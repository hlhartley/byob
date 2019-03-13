const { loadCsv, removeCommas, upperCase } = require('../../../helpers/csvLoader');

const createState = (knex, state) => {
  return knex('states').insert({
    name: state.name,
    capital: state.capital,
    population: state.population
  }, 'id')
}

const createCounty = (knex, county) => {
  return knex('counties').insert({
    name: county.name,
    state_id: county.state_id,
    population: county.population
  }, 'id')
}

exports.seed = function(knex, Promise) {
  return knex('counties').del()
    .then(() => knex('states').del())
    .then(async () => {
      let statePromises = [];
      const statesData = await loadCsv('./data/states.csv', {
        name: upperCase,
        capital: upperCase,
      });
      statesData.forEach(state => statePromises.push(createState(knex, state)));
      return Promise.all(statePromises);
    })
    .then(async () => {
      let countiesPromises = [];
      const countiesData = await loadCsv('./data/counties.csv', {
        population: removeCommas,
        name: upperCase,
      });
      countiesData.forEach(county => countiesPromises.push(createCounty(knex, county)));
      return Promise.all(countiesPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
}

