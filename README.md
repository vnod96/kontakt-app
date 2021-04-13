## Setup People API
I am using `json-server` to host `people.json` as a backend api server.

#### Install
`npm install -g json-server`

### Start Server
`json-server data/people.json -p 8080 -r data/routes.json`
> Run this command in root directory.

This will start the People API on `http://localhost:8080/api/people`

#

## Setup UI

#### Install
`npm install`

#### Start the application
`npm start`

> It will start the app on `http://localhost:3000`

#### Run Integration Tests
`npm test`