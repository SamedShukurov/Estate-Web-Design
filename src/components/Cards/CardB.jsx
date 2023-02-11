import React from "react";
import "./Card.css";
import B from "../img/MP0bgaS_d1c.svg";
import chair from "../img/iconfinder_Movies_and_Entertainment_cinema_seat_theatre_sofa_6611449 1.svg";
import stairs from "../img/stairs-with-handrail 1.svg";
import hektar from "../img/keyboard-key-m 1.svg";
const CardB = () => {
  return (
    <div className="Card">
      <img src={B}  alt="" />
      <h3>3.000 $</h3>
      <h5>Apartment for rent</h5>
      <p>London, John Ruskin St.</p>
      <p>26 November 2020</p>
      <div>
        <div>
          <img src={chair}  alt=""  /> <span>2+1</span>
        </div>
        <div>
          <img src={stairs}  alt="" /> <span>7</span>
        </div>
        <div>
          <img src={hektar}  alt="" /> <span>110 m²</span>
        </div>
      </div>
    </div>
  );
};

export default CardB;
