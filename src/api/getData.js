const fs = require('fs');

const getData = filePath => {
  if (filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf8' }, error => console.log('>>', error));
  }

  return null;
};

module.exports = getData;
