import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("It's Server Side Rendering");
  useEffect(() => {
    setTimeout(() => setMessage("It's Client Side Rendering"), 0);
  }, []);

  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
};

export default App;
