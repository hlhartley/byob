const csv = require('csv-parser');
const fs = require('fs');

const loadCsv = (file) => {
    const data = [];
    return fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row) => data.push(row))
        .on('end', () => data)
}

module.exports = {
    loadCsv,
}

