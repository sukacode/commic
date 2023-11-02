require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan");
const createError = require("http-errors");
const path = require("path");

const main = require("./src/router");

const app = express();
const PORT = 3000;

app.use(
  cors({
    credentials: true,
    origin: ["*"],
  })
);
app.use(cookieParser());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(xss());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", main);

app.all("*", (req, res, next) => {
  next(new createError.NotFound());
});

app.use((err, req, res) => {
  const msg = err.message || "Internal Server Error";
  const code = err.status || 500;

  res.status(code).json({
    message: msg,
  });
});

app.listen(3000, () => {
  console.log(`SERVER RUNNING 3000`);
});
