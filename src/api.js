const hapi = require('hapi');
const { ApolloServer } = require('apollo-server-hapi');
const typeDefs = require('./api/graphql/typeDefs');
const resolvers = require('./api/graphql/resolvers');

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const StartServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.applyMiddleware({
    app: server
  });

  await apolloServer.installSubscriptionHandlers(server.listener);

  try {
    await server.start();
  } catch (err) {
    console.log(`Error while starting server: ${err.message}`);
  }

  console.log(`Server running at: ${server.info.uri}`);
};

StartServer();
