import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [message, setMessage] = useState("It's Server Side Rendering");
  useEffect(() => {
    setTimeout(() => setMessage("It's Client Side Rendering"), 0);
  }, []);

  return (
    <article>
      <h2>{"Here is Main"}</h2>
      <h1>{message}</h1>
      <Link to={"/hello"}>
        <h3>{"Go to Hello page!"}</h3>
      </Link>
    </article>
  );
};

export default Main;
