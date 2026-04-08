const db = require("./config/db");

const createTable = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
      );
    `);

    console.log("Table created successfully");
    process.exit();
  } catch (err) {
    console.error(" Error creating table:", err);
    process.exit(1);
  }
};

createTable();