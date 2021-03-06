const filePath = require('../filePath');
const getData = require('../getData');
const mapData = require('../mapData');

const dataFile = '../../data/data.csv';
const coordinates = mapData(getData(filePath(dataFile)));

const resolvers = {
  Query: {
    coordinates: () => ({
      points: coordinates
    })
  }
};

module.exports = resolvers;
