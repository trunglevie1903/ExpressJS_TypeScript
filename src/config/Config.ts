import dotenv from 'dotenv';

dotenv.config();

const {
  HOST, PORT,
  MONGO_PATH, MONGO_USER, MONGO_PASSWORD,
  MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME
} = process.env;

const host = HOST || "localhost";
const port = PORT || 3333;
const server = {
  host, port
};

const mongo = {
  path: MONGO_PATH,
  user: MONGO_USER,
  password: MONGO_PASSWORD
}

const mysql = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  dbname: MYSQL_DBNAME
}

export default {
  server, mongo, mysql
};