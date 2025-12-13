const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, (error: Error) => {
  if (error) throw Error;
  console.log(`Listening on port ${PORT}`);
});
