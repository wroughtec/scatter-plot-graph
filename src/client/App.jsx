// @flow
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ScatterPlotChart } from 'components/ScatterPlotChart/ScatterPlotChart';
import { apiUrl } from 'consts/api';
import './_app.scss';

const client = new ApolloClient({
  uri: apiUrl
});

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ScatterPlotChart />
      </ApolloProvider>
    );
  }
}
