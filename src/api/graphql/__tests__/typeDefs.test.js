import { makeExecutableSchema, addMockFunctionsToSchema, mockServer } from 'graphql-tools';
import { graphql } from 'graphql';
import typeDefs from '../typeDefs';

describe('typeDefs', () => {
  const result = [[12.34, 12.34], [12.34, 12.34]];
  const testCase = {
    id: 'coordinates',
    query: `
      query {
        coordinates {
          points
        }
      }
    `,
    variables: {},
    context: {},
    expected: {
      data: {
        coordinates: {
          points: result
        }
      }
    }
  };

  const cases = [testCase];
  const mockSchema = makeExecutableSchema({ typeDefs });

  addMockFunctionsToSchema({
    schema: mockSchema,
    mocks: {
      Boolean: () => false,
      ID: () => '1',
      Int: () => 1,
      Float: () => 12.34,
      String: () => 'Dog'
    }
  });

  test('should have valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs);

      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });

  cases.forEach(obj => {
    const { id, query, variables, context: ctx, expected } = obj;

    test(`query: ${id}`, async () =>
      expect(graphql(mockSchema, query, null, { ctx }, variables)).resolves.toEqual(expected));
  });
});
