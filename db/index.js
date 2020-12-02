const { Client } = require("pg");

const db = process.env.NODE_ENV === 'test' ? 'studenttest' : 'students'

client = new Client({
    //connectionString: `postgresql://localhost/${db}`,
    user: 'postgres',
    host: 'localhost',
    database: db,
    password: 'Kolade11',
    port: 5432
})

client.connect()


module.exports = client;