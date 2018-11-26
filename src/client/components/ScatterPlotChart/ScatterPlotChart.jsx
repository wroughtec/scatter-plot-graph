// @flow
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Spinner } from 'components/Spinner/Spinner';
import { GET_COORDINATES } from 'consts/getCoordinates';

export class ScatterPlotChart extends Component {
  displayChart = ({ loading, error, data }) => {
    let component = null;
    if (loading) component = <Spinner />;
    if (error) return `Error! ${error.message}`;

    if (data && data.coordinates) {
      const {
          coordinates: { points }
        } = data,
        options = {
          chart: {
            type: 'scatter',
            zoomType: 'xy'
          },
          boost: {
            useGPUTranslations: true,
            usePreAllocated: true
          },
          xAxis: {
            gridLineWidth: 1,
            title: {
              text: null
            }
          },
          yAxis: {
            minPadding: 0,
            maxPadding: 0,
            title: {
              text: null
            }
          },
          title: {
            text: 'Scatter plot of points'
          },
          legend: {
            enabled: false
          },
          series: [
            {
              name: 'Points',
              color: 'rgba(223, 83, 83, .5)',
              data: points,
              marker: {
                radius: 2
              },
              tooltip: {
                followPointer: false,
                pointFormat: 'x: {point.x:.1f}, y: {point.y:.1f}'
              }
            }
          ]
        };
      component = <HighchartsReact highcharts={Highcharts} options={options} />;
    }

    return component;
  };

  render() {
    return <Query query={GET_COORDINATES}>{this.displayChart}</Query>;
  }
}
