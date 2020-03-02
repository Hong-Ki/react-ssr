import React from "react";
import { useLocation, Link } from "react-router-dom";

const Hello = () => {
  const { pathname = "" } = useLocation();
  return (
    <article>
      <h1>{`Hi! Here is ${pathname}!`}</h1>
      <Link to={"/"}>
        <h3>{"Go to Hello page!"}</h3>
      </Link>
    </article>
  );
};

export default Hello;
