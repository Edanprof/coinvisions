import express from 'express';

const app = express();
const port = 3000;

app.use('/', express.static(__dirname + "/../public"));

app.get("/", (req, res) => {
  return res.render(__dirname + "/../index.html");
});

app.listen(3000, () => {
  console.log("Listening on port", port);
});