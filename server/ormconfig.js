
module.exports = {
  type: process.env.MYSQL_CONNECTION,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  migrations: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  subscribers: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  cli: {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
};
