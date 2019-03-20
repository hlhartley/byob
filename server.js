const express = require('express')
const app = express()
const cors = require('cors');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.NODE_ENV || 3001)

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('welcome to states')
});

app.get('/api/v1/states', (request, response) => {
    database('states').select()
      .then((states) => {
        response.status(200).json(states);
      })
      .catch((error) => {
        response.status(500).json({ error });
      });
  });

app.get('/api/v1/counties', (request, response) => {
  database('counties').select()
    .then((counties) => {
      response.status(200).json(counties);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/states/:id', (request, response) => {
  database('states').where('id', request.params.id).select()
    .then(states => {
      if (states.length) {
        response.status(200).json(states);
      } else {
        response.status(404).json({
          error: `Could not find state with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/counties/:id', (request, response) => {
  database('counties').where('id', request.params.id).select()
    .then(counties => {
      if (counties.length) {
        response.status(200).json(counties);
      } else {
        response.status(404).json({
          error: `Could not find county with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/states', (request, response) => {
  const state = request.body;

  for (let requiredParameter of ['name', 'capital', 'population']) {
    if (!state[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, capital: <String>, population: <Integer> }. You're missing a "${requiredParameter}" property.`});
    }
  }

  database('states').insert(state, 'id')
    .then(state => {
      response.status(201).json({ id: state[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/counties', (request, response) => {
  const county = request.body;

  for (let requiredParameter of ['name', 'state_id', 'population']) {
    if (!county[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, state_id: <Integer>, population: <Integer> }. You're missing a "${requiredParameter}" property.`});
    }
  }

  database('counties').insert(county, 'id')
    .then(county => {
      response.status(201).json({ id: county[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.delete('/api/v1/counties/:id', async (request, response) => {
  try {
    await database('counties').where('id', request.params.id).delete()
  } catch {
    response.status(500).json({ error })
    response.status(204)
  }
  // database('counties').where('id', request.params.id).delete()
  //   .then(() => {
  //     response.status(204)
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
});

app.delete('/api/v1/states/:id', async (request, response) => {
  try {
    await database('counties').where('state_id', request.params.id).delete()
    await database('states').where('id', request.params.id).delete()
    response.status(204)
  } catch {
    response.status(500).json({ error });
  }
});

//   database('counties').where('state_id', request.params.id).delete()
//     .then(() => {
//       database('states').where('id', request.params.id).delete()
//         .then(() => {
//           response.sendStatus(204)
//         })
//         .catch(error => {
//           response.status(500).json({ error });
//         });
//     })
//     .catch(error => {
//       response.status(500).json({ error });
//     });
// });

app.listen(app.get('port'), () => {
  console.log(`The HTTP server is running on port ${app.get('port')}.`)
})