import React from "react";
import "./Content.css";
import CardA from "./CardA.jsx";
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
      </section>
    </>
  );
};

export default Content;
