import filePath from '../filePath';

describe('filePath', () => {
  it('should convert map to JSON', () => {
    expect(filePath('../../__mocks__/dataMock.csv')).toContain('__mocks__/dataMock.csv');
  });
});
