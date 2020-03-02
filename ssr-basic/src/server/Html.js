import React from "react";

const Html = props => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Server Side Render Basic</title>
      <link href={props.stylesheet} rel="stylesheet" />
    </head>
    <body>
      <div id="root">{props.children}</div>
      <script src={props.script}></script>
    </body>
  </html>
);

export default Html;
