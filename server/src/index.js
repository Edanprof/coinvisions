import express from 'express';
import path from 'path';
import OAuthController from 'controllers/oauth';

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, "../../public")));
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  return res.render("index.ejs");
});

app.use("/oauth", OAuthController);

app.listen(3000, () => {
  console.log("Listening on port", port);
});