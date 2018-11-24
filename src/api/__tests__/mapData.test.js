import mapData from '../mapData';

describe('mapData', () => {
  const data = `
    x,y
    18.71230688,11034.12
    13.61320583,16340.26
    17.58212046,25200.85
    0.33767329,503.22
    11.34590321,7029.99
    65.25484819,38744.4
  `;

  it('should convert map to JSON', () => {
    expect(mapData(data)).toMatchSnapshot();
  });

  it('should return empty object when no data', () => {
    expect(mapData()).toEqual({});
  });
});
