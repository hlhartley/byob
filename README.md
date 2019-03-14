# Build Your Own Backend (byob)

### Endpoints
**Get all states:** `GET /api/v1/states`
- Response Status: 200
- Response Example: 
 ```[{
        "id": 1,
        "name": "ALABAMA",
        "capital": "MONTGOMERY",
        "population": "4849377",
        "created_at": "2019-03-14T04:49:03.802Z",
        "updated_at": "2019-03-14T04:49:03.802Z"
    }]```

**Get all counties:** `GET /api/v1/counties`
- Response Status: 200
- Response Example: [{
        "id": 1,
        "name": "JEFFERSON",
        "state_id": 1,
        "population": "574613",
        "created_at": "2019-03-14T04:49:03.846Z",
        "updated_at": "2019-03-14T04:49:03.846Z"
    }]

**Get specific state by id:** `GET /api/v1/states/:id`
- Response Status: 200
- Response Example: [{
        "id": 30,
        "name": "NEW JERSEY",
        "capital": "TRENTON",
        "population": "8938175",
        "created_at": "2019-03-14T04:49:03.828Z",
        "updated_at": "2019-03-14T04:49:03.828Z"
    }]

**Get specific county by id:** `GET /api/v1/counties/:id`
- Response Status: 200
- Response Example: [{
        "id": 22,
        "name": "ADA",
        "state_id": 12,
        "population": "456849",
        "created_at": "2019-03-14T04:49:03.857Z",
        "updated_at": "2019-03-14T04:49:03.857Z"
    }]

**Post state:** `POST /api/v1/states/`
- Response Status: 201
- Response Example: {
    "id": 51
}
- Parameters:

| Name          | Type          |
| ------------- | ------------- |
| `name`        | `string`      |
| `capital`     | `string`      |
| `population`  | `integer`     |

**Post county:** `POST /api/v1/counties/`
- Response Status: 201
- Response Example: {
    "id": 102
}
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

