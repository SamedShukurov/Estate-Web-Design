import React from "react";
import "./Main.css";
import source from "./img/Source.svg";
const Main = () => {
  return (
    <>
      <main>
        <h3>Your dream house is here.</h3>
        <div>
          <input type="text"></input>
          <img src={source} alt="Source" />
        </div>
      </main>
    </>
  );
};

export default Main;
