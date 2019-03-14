# Build Your Own Backend (byob)

### Endpoints
**Get all states:** `GET /api/v1/states`
- Response Status: 200
- Response Example: 
 [{
        "id": 1,
        "name": "ALABAMA",
        "capital": "MONTGOMERY",
        "population": "4849377",
        "created_at": "2019-03-14T04:49:03.802Z",
        "updated_at": "2019-03-14T04:49:03.802Z"
    }
 ]

**Get all counties:** `GET /api/v1/counties`
- Response
Status: 200

**Get specific state by id:** `GET /api/v1/states/:id`
- Response
Status: 200

**Get specific county by id:** `GET /api/v1/counties/:id`
- Response
Status: 200

**Post state:** `POST /api/v1/states/`
- Response
Status: 201
- Parameters:

| Name          | Type          |
| ------------- | ------------- |
| `name`        | `string`      |
| `capital`     | `string`      |
| `population`  | `integer`     |

**Post county:** `POST /api/v1/counties/`
- Response
Status: 201
- Parameters:

| Name          | Type          |
| ------------- | ------------- |
| `name`        | `string`      |
| `state_id`    | `ingeger`     |
| `population`  | `integer`     |

**Delete state:** `DELETE /api/v1/states/:id`
- Response
Status: 204

**Delete county:** `DELETE /api/v1/counties/:id`
- Response
Status: 204

