import dotenv from 'dotenv';

dotenv.config();

const {
  HOST, PORT
} = process.env;

const host = HOST || "localhost";
const port = PORT || 3333;
const server = {
  host, port
};

export default {
  server
};