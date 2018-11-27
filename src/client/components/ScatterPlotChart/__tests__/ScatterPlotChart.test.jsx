import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { COORDINATES_MOCK } from 'mocks/getCoordinates.mock';
import { ScatterPlotChart } from 'components/ScatterPlotChart/ScatterPlotChart';
import { render, cleanup } from 'react-testing-library';
import wait from 'waait';

describe('ScatterPlotChart', () => {
  afterEach(cleanup);

  test('should renders without error', async () => {
    const { getByText } = render(
      <MockedProvider mocks={COORDINATES_MOCK} addTypename={false}>
        <ScatterPlotChart />
      </MockedProvider>
    );

    await wait(0);

    expect(getByText('Created with Highcharts 6.2.0')).toBeTruthy();
  });

  test('should render loading state initially', async () => {
    const { container } = render(
      <MockedProvider mocks={[]}>
        <ScatterPlotChart />
      </MockedProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
