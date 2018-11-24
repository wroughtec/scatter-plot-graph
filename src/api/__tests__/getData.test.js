import getData from '../getData';
import filePath from '../filePath';

describe('getData', () => {
  const dataFile = '../__mocks__/dataMock.csv';
  it('should convert map to JSON', () => {
    expect(getData(filePath(dataFile))).toMatchSnapshot();
  });

  it('should be null if no path sent', () => {
    expect(getData()).toBeNull();
  });
});
