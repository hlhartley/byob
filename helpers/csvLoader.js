const csv = require('csv-parser');
const fs = require('fs');

const loadCsv = (file) => {
    return new Promise((resolve, reject) => {
        const data = [];
        try {
            fs.createReadStream(file)
                .pipe(csv())
                .on('data', (row) => data.push(row))
                .on('end', () => resolve(data))
        } catch (err) {
            reject(err);
        }
    })
}

const removeCommas = (num) => {
    return num.replace(',', '');
}

module.exports = {
    loadCsv,
    removeCommas,
}
