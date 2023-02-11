import React from "react";
import "./Content.css";
import CardA from "./CardA.jsx";
import CardB from "./CardB.jsx";
const Content = () => {
  return (
    <>
      <section>

        <div className="cards">
          <CardA />
          <CardA />
          <CardA />
          <CardA />
        </div>
        
        <div className="cards">
          <CardB />
          <CardB />
          <CardB />
          <CardB />
        </div>
      </section>
    </>
  );
};

export default Content;
