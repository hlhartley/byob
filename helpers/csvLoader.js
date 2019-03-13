const csv = require('csv-parser');
const fs = require('fs');

const loadCsv = (file, columnTransformations = {}) => {
    return new Promise((resolve, reject) => {
        const data = [];
        try {
            fs.createReadStream(file)
                .pipe(csv())
                .on('data', (row) => {
                    Object.keys(columnTransformations).forEach(col => {
                        if (row[col]) {
                            const transformFn = columnTransformations[col];
                            row[col] = transformFn(row[col]);
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
    return num.replace(/,/g, '');
}

const upperCase = (str) => {
    return str.toUpperCase();
}

module.exports = {
    loadCsv,
    removeCommas,
    upperCase,
}
