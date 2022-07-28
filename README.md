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
  "name": "Workout#1",
  "mode": "mode",
  "equipment": [
    "equipment#1",
    "equipment#2"
  ],
  "exercises": [
    "exercises#1",
    "1exercises#2"
  ],
  "trainerTips": [
    "Updated Tips#1",
    "Updated Tips#2"
  ]
}
```
### UPDATE record:
* Endpoint: `http://localhost:3000/api/v1/workouts/:workoutId`
* Method: `PATCH`
* Data in body:
```sh
{
  "name": "Workout#2",
  "mode": "mode",
  "equipment": [
    "equipment#1",
    "equipment#2"
  ],
  "exercises": [
    "exercises#1",
    "1exercises#2"
  ],
  "trainerTips": [
    "Updated Tips#1",
    "Updated Tips#2"
  ]
}
```
### DELETE record:
* Endpoint: 
* Method: `DELETE`
* Data in body:

### READ One record:
* Endpoint: 
* Method: `GET`
* Data in body: