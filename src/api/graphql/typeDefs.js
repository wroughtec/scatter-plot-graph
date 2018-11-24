const { gql } = require('apollo-server-hapi');

const typeDefs = gql`
  type Query {
    coordinates: Coordinates
  }

  type Coordinates {
    x: [Float]
    y: [Float]
  }
`;

module.exports = typeDefs;
