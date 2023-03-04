import mysql from 'mysql2/promise';

import Config from '@config/Config';
import Logging from './Logging';

const Connect_Mysql = async (): Promise<void> => {
  const namespace = 'CONNECT_MYSQL';
  const { host, user, password, dbname } = Config.mysql;
  // Logging.info(namespace, `${host} ${user} ${password} ${dbname}`);
  try {
    const connection = await mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: dbname
    });
    const [rows, fields] = await connection.execute('SELECT * FROM `programming_languages`');
    // Logging.info(namespace, );
    if (rows || fields) {
      Logging.info(namespace, 'Connected to MySQL');
    } else {
      Logging.error(namespace, 'Something went wrong when trying to connect to MySQL');
    }
    connection.end();
  } catch (error: any) {
    Logging.error(namespace, error.message);
  }
};

export default Connect_Mysql;