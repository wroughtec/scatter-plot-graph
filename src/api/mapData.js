const newLine = /\r\n|\r|\n/;

const mapData = data => {
  const coordinates = [];

  if (data) {
    data
      .trim()
      .split(newLine)
      .map((item, i) => {
        // skip the headers
        if (i === 0) return null;

        const numberItems = item.split(',').map(col => parseFloat(col));

        return coordinates.push(numberItems);
      });
  }

  return coordinates;
};

module.exports = mapData;
