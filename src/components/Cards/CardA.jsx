import React from "react";
import "./Card.css";
import A from "../img/R-LK3sqLiBw.svg";
import chair from "../img/iconfinder_Movies_and_Entertainment_cinema_seat_theatre_sofa_6611449 1.svg";
import stairs from "../img/stairs-with-handrail 1.svg";
import hektar from "../img/keyboard-key-m 1.svg";
const CardA = () => {
  return (
    <div className="Card">
      <img src={A} alt=""  />
      <h3>290.000 $</h3>
      <h5>Apartment for sale</h5>
      <p>London, Oxford St.</p>
      <p>26 November 2020</p>
      <div>
        <div>
          <img src={chair}  alt=""  /> <span>3+1</span>
        </div>
        <div>
          <img src={stairs}  alt="" /> <span>10</span>
        </div>
        <div>
          <img src={hektar}  alt=""  /> <span>150 m²</span>
        </div>
      </div>
    </div>
  );
};

export default CardA;
