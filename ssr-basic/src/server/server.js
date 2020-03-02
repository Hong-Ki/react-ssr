// Express
import express from "express";

// React
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";
import Html from "./Html";
import WDM from "./WDM"; // WDM 추가
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackConfig = require("../../webpack.dev.js");

  const compiler = webpack(webpackConfig);

  app.use(WDM(compiler));

  //app.use(webpackHotMiddleware(compiler));
}

//app.use(express.static(path.resolve(__dirname)));

app.get("/", function(req, res, next) {
  const html = ReactDOMServer.renderToString(
    <Html script={"./build/bundle.js"} stylesheet={"./build/main.css"}>
      <App />
    </Html>
  );

  console.log(html);

  res.set("content-type", "text/html");
  res.send(html);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
