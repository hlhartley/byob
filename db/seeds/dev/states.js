const { loadCsv, removeCommas } = require('../../../helpers/csvLoader');

const createState = (knex, state) => {
  return knex('states').insert({
    name: state.name,
    capital: state.capital,
    population: state.population
  }, 'id')
}

exports.seed = function(knex, Promise) {
  return knex('states').del()
    .then(() => knex('counties').del())
    .then(async () => {
      let statePromises = [];
      const statesData = await loadCsv('./data/states.csv');
      statesData.forEach(state => {
        statePromises.push(createState(knex, state));
    });

    return Promise.all(statePromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

