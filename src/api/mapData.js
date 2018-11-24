const newLine = /\r\n|\r|\n/;

const mapData = data => {
  const coordinates = {};

  if (data) {
    data
      .trim()
      .split(newLine)
      .map((item, i) => {
        const columns = item.split(',');

        if (i === 0) {
          return columns.forEach(column => {
            coordinates[column] = [];
          });
        }

        return Object.keys(coordinates).forEach((key, index) => {
          coordinates[key].push(parseFloat(columns[index]));
        });
      });
  }

  return coordinates;
};

module.exports = mapData;
