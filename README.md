
# Nest + Postgres Starter 

<br>
<br>
<p align="middle" float="left">
      <img  width="140px" src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg"/>
      <img  width="140px" src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"/>
      <img  width="140px" src="https://img.stackshare.io/service/7419/20165699.png"/>
      <img  width="140px" src="https://iconape.com/wp-content/files/kd/371533/svg/371533.svg"/>
</p>
<br>
<br>

## Description

__[Nest](https://github.com/nestjs/nest)__ framework __[TypeScript](https://www.typescriptlang.org/)__ starter repository. In addition, the starter contains connections to __[PostgreSQL](https://www.postgresql.org)__, __[TypeOrm](https://typeorm.io)__, __[Swagger](https://swagger.io)__ and _a special config pattern_.

## Get Started

```bash
$ git clone https://github.com/Full-Stack-Shokhboz-Abdullayev/nestjs-postgres-starter.git
```
or you can freely fork the repo.

## Running the Starter

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Open up the `http://localhost:<your-port>/api` or `http://localhost:5050/api` to see docs page.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Auto Migrations

```bash
# generate migrations
$ npm run typeorm:migration:generate -- <your-migration-name>

# run/apply migrations into DB
$ npm run typeorm:migration:run
```
Folders like _src/scripts_, _src/migrations_ are essential for auto migration.


## Stay in touch.

- Author: [Shokhboz Abdullaev](https://shox-pro.com)


## License

Starter project is [MIT licensed](LICENSE).
