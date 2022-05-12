import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const path = window.location.href;

    const queryParams = path.split("?");
    const options = queryParams[1].split("=");
    const formatedOptions = options[1].replaceAll("%22", '"');

    console.log("path", JSON.parse(formatedOptions));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          minHeight: "600px",
          minWidth: "400px",
          borderRadius: "20px",
        }}
      >
        <p>Bounce Application POC</p>
        <button>Click me</button>
      </div>
    </div>
  );
};

export default App;
