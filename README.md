# Build Your Own Backend (byob)
### Summary
byob included building a RESTful API for a large dataset, creating a one-to-many relational database schema design, and deploying the API to Heroku. There are 4 GET endpoints, 2 POST endpoints, and 2 DELETE endpoints (as seen below).

Original Project Spec: http://frontend.turing.io/projects/build-your-own-backend.html

### Schema
![screenshot](states-counties-schema.png)

### Endpoints
**Get all states:** `GET /api/v1/states`
- Response Status: 200
- Response Example: 
  ```
  [
    {
        "id": 1,
        "name": "ALABAMA",
        "capital": "MONTGOMERY",
        "population": "4849377",
        "created_at": "2019-03-14T04:49:03.802Z",
        "updated_at": "2019-03-14T04:49:03.802Z"
    },
    {
        "id": 2,
        "name": "ALASKA",
        "capital": "JUNEAU",
        "population": "736732",
        "created_at": "2019-03-14T04:49:03.808Z",
        "updated_at": "2019-03-14T04:49:03.808Z"
    },
    {
        "id": 3,
        "name": "ARKANSAS",
        "capital": "LITTLE ROCK",
        "population": "2966369",
        "created_at": "2019-03-14T04:49:03.811Z",
        "updated_at": "2019-03-14T04:49:03.811Z"
    }
   ]
    ```

**Get all counties:** `GET /api/v1/counties`
- Response Status: 200
- Response Example: 
```
    [
      {
        "id": 1,
        "name": "JEFFERSON",
        "state_id": 1,
        "population": "574613",
        "created_at": "2019-03-14T04:49:03.846Z",
        "updated_at": "2019-03-14T04:49:03.846Z"
      },
      {
        "id": 11,
        "name": "DOUGLAS",
        "state_id": 6,
        "population": "335299",
        "created_at": "2019-03-14T04:49:03.852Z",
        "updated_at": "2019-03-14T04:49:03.852Z"
      },
      {
          "id": 31,
          "name": "FRANKLIN",
          "state_id": 17,
          "population": "1292000",
          "created_at": "2019-03-14T04:49:03.861Z",
          "updated_at": "2019-03-14T04:49:03.861Z"
      }
    ]
```

**Get specific state by id:** `GET /api/v1/states/:id`
- Response Status: 200
- Response Example: 
```
     [
       {
        "id": 30,
        "name": "NEW JERSEY",
        "capital": "TRENTON",
        "population": "8938175",
        "created_at": "2019-03-14T04:49:03.828Z",
        "updated_at": "2019-03-14T04:49:03.828Z"
       }
     ]
```

**Get specific county by id:** `GET /api/v1/counties/:id`
- Response Status: 200
- Response Example: 
```
    [
      {
        "id": 22,
        "name": "ADA",
        "state_id": 12,
        "population": "456849",
        "created_at": "2019-03-14T04:49:03.857Z",
        "updated_at": "2019-03-14T04:49:03.857Z"
      }
    ]
```

**Post state:** `POST /api/v1/states/`
- Response Status: 201
- Response Example: 
```
  {
    "id": 51
  }
```
- Parameters:

| Name          | Type          |
| ------------- | ------------- |
| `name`        | `string`      |
| `capital`     | `string`      |
| `population`  | `integer`     |

**Post county:** `POST /api/v1/counties/`
- Response Status: 201
- Response Example: 
```
  {
    "id": 102
  }
```
- Parameters:

| Name          | Type          |
| ------------- | ------------- |
| `name`        | `string`      |
| `state_id`    | `integer`     |
| `population`  | `integer`     |

**Delete state:** `DELETE /api/v1/states/:id`
- Response Status: 204

**Delete county:** `DELETE /api/v1/counties/:id`
- Response Status: 204

