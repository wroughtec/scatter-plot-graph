import resolvers from '../resolvers';

describe('resolvers', () => {
  test('should resolve', () => {
    const output = resolvers.Query.coordinates();

    expect(output).toMatchSnapshot();
  });
});
