const createState = (knex, state) => {
  return knex('states').insert({
    name: state.name,
    capital: state.capital,
    population: state.population
  }, 'id')
}

let statesData = [{
  name: 'Alabama',
  capital: 'Montgomery',
  population: 4849377
}]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('states').del()
    .then(() => knex('counties').del())
    .then(() => {
      let statePromises = [];
  
      statesData.forEach(state => {
        statePromises.push(createState(knex, state));
    });

    return Promise.all(statePromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

