## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

It is one of two project department services. It currently contains the functionality of planning departments, create elements and change user position in department
## Tech Stack

Nestjs: 8.2.4 with express
Postgres
Swagger: 5.2.0
nestjs/typeorm: 9.0.1
nestjs/jwt: 10.0.1

## Installation

```bash
$ npm install
```

## Docker
# Run build command on first docker run
$ docker-compose build
# Run docker
$ docker-compose up

## Install PostgreSQL

$ brew install postgres

## Create db

createdb department_plan_main_db

## Delete db

dropdb department_plan_main_db

## Create and fill env file

.development.env for dev
.staging.env for stage
.production.env for prod


## ENV structure

NODE_ENV="development"

# Fields for running server
BACKEND_DOMAIN="localhost"
API_PREFIX="/api"
ADDRESS="0.0.0.0"
PORT=4337

# Fields for connecting to the database
DB_HOST="localhost"
DB_PORT="5432"
DB_USERNAME=""
DB_PASSWORD=""
DB_NAME="department_plan_main_db"

# Field to connect db in docker
POSTGRES_PASSWORD=""

# Fields for jwt auth
JWT_ACCESS_SECRET=""
JWT_REFRESH_SECRET=""

# 1 day
JWT_ACCESS_EXPIRES_IN="86400"
# 28 days
JWT_REFRESH_EXPIRES_IN="2419200"

#CORS
ALLOWED_ORIGINS=""

## Running the app

```bash

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).