import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
  const { pathname = "" } = useLocation();

  return (
    <article>
      <h2>{`Seriously? "${pathname}"..?`}</h2>
      <h1>{"Sorry.. Here is error page..."}</h1>
    </article>
  );
};

export default Error;
