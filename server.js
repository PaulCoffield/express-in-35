const express = require("express");
const app = express();

// Allow static files to be rendered without needing to setup specific routes for them
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(logger);

// app.get("/", (req, res) => {
//   // Send status code
//   // res.sendStatus(500);

//   // Send status code and chain message in text
//   // res.status(500).send('Hi');

//   // Send status code and chain message in json
//   // res.status(500).json({"message":"Error"});

//   // Send just json
//   // res.json({"message":"Error"});

//   // Send file to be downloaded
//   // res.download('server.js') //path to file to be downloaded

//   // Send page to be rendered
//   // res.render('index.ejs');

//   // Send page to be rendered and chain extra data to be used
//   res.render("index.ejs", { text: "world 🌍" });
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
