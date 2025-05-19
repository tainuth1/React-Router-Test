import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{marginTop: "20px"}}>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
