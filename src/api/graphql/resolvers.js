const filePath = require('../filePath');
const getData = require('../getData');
const mapData = require('../mapData');

const dataFile = '../../data/data.csv';
const coordinates = mapData(getData(filePath(dataFile)));

console.log('>', coordinates);
const resolvers = {
  Query: {
    coordinates: () => ({
      ...coordinates
    })
  }
};

module.exports = resolvers;
