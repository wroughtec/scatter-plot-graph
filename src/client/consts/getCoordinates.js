import gql from 'graphql-tag';

export const GET_COORDINATES = gql`
  query getCoordinates {
    coordinates {
      points
    }
  }
`;
