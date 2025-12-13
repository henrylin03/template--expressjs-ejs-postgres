const express = require("express");
const path = require("node:path");

const app = express();

/* set up EJS templating */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (_req, res) => res.render("index"));

const PORT = 3000;
app.listen(PORT, (error) => {
	if (error) throw Error;
	console.log(`Listening on port ${PORT}`);
});
