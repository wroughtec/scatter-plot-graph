const { gql } = require('apollo-server-hapi');

const typeDefs = gql`
  type Query {
    coordinates: Coordinates
  }

  type Coordinates {
    points: [[Float]]
  }
`;

module.exports = typeDefs;
