import React from "react";
import "./Main.css";
import source from "./img/Source.svg";
import main from "./img/Main.svg";
const Main = () => {
  return (
    <>
      <main>
        <img src={main} alt="" /> 
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
