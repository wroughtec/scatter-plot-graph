import { GET_COORDINATES } from 'consts/getCoordinates';

export const COORDINATES_MOCK = [
  {
    request: {
      query: GET_COORDINATES,
      variables: {}
    },
    result: {
      data: {
        coordinates: {
          points: [[18.71230688, 11034.12], [13.61320583, 16340.26]]
        }
      }
    }
  }
];
