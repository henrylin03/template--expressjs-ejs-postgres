const { Pool } = require("pg");

// TODO: read from environment variables
module.exports = new Pool({
	host: "localhost", // or wherever the db is hosted
	user: "<role_name>",
	database: "top_users",
	password: "<role_password>",
	port: 5432, // The default port
});

// alternatively, can use Connection URI: https://node-postgres.com/features/connecting#connection-uri
// module.exports = new Pool({
//   connectionString:
//     "postgresql://<role_name>:<role_password>@localhost:5432/<database>",
// });
