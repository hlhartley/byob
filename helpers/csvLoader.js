const csv = require('csv-parser');
const fs = require('fs');

const loadCsv = (file, columns = [], transformFn = () => {}) => {
    return new Promise((resolve, reject) => {
        const data = [];
        try {
            fs.createReadStream(file)
                .pipe(csv())
                .on('data', (row) => {
                    columns.forEach(col => {
                        if (row[col]) {
                            row[col] = transformFn(row[col])
                        }
                    })
                    data.push(row)
                })
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
