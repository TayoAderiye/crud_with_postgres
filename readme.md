# CRUD with Node js and Postgres

> CRUD API for using Node js, Express and Postgres as the database

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependecies
```
npm install // yarn add
yarn add pg pg-hstore --save // Installs Postgres
yarn add sequelize --save // Installs Sequelize
yarn add sequelize-cli -D
yarn sequelize-cli init
```

## Run App
```
# Run in dev mode
npm run dev
# Run in prod mode
npm start
```

## Update package.json

Update package.json to create database
```
"db:create": "sequelize-cli db:create"
Now we can run yarn db:create to create our new database.
OR npx sequelize-cli db:create
```

## Create first Model

```
yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
OR npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
model:generate
```

## Run Migration

update package.json
```
db:migrate": "sequelize-cli db:migrate",
"db:g:migration": "sequelize-cli migration:generate --name"

then run yarn db:migrate
```

## Create Seeding

update package.json
```
"db:g:seed": "sequelize-cli seed:generate --name"
"db:seeds": "sequelize-cli db:seed:all"

then run yarn db:g:seed
```



- Verson 1.0.0
- License MIT
- Author: Tayo Aderiye
