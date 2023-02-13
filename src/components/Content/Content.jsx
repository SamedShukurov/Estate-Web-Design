import React from "react";
import "./Content.css";
import CardA from "../Cards/CardA.jsx";
import CardB from "../Cards/CardB.jsx";
const Content = () => {
  return (
    <>
      <section>
        <div className="featured">
          <h4>Featured Sales</h4>
          <button>All</button>
        </div>
        <div className="cards">
          <CardA />
        </div>
        <div className="featured">
          <h4>Featured Rental</h4>
          <button>All</button>
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
