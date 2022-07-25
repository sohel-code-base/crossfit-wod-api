# REST API
## REST API with [Node.js](https://nodejs.org) and [Express.js](https://expressjs.com/)
> Note: `Node must be installed`
### Installation
* Run `git clone https://github.com/sohel-code-base/crossfit-wod-api.git` in command line.

```sh
cd crossfit-wod-api
npm install
npm run dev
```
### READ All records:
* Endpoint: `http://localhost:3000/api/v1/workouts`
* Method: `GET`
### CREATE record:
* Endpoint: `http://localhost:3000/api/v1/workouts`
* Method: `POST`
* Data in body:
```sh
{
  "name": "Core Buster",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}
```
### UPDATE record:
* Endpoint: 
* Method: `PATCH`
* Data in body:

### DELETE record:
* Endpoint: 
* Method: `DELETE`
* Data in body:

### READ One record:
* Endpoint: 
* Method: `GET`
* Data in body: