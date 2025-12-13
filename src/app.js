const express = require("express");
const app = express();

app.get("/", (_req, res) => res.send("hello world!"));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw Error;
  console.log(`Listening on port ${PORT}`);
});
