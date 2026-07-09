const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Tes koneksi saat aplikasi dijalankan
db.getConnection((err, connection) => {
  if (err) {
    console.error("[DB] Gagal connect:", err.message);
  } else {
    console.log("[DB] Database connected!");
    connection.release(); // kembalikan koneksi ke pool
  }
});

module.exports = db;
