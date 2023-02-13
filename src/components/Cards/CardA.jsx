import React from "react";
import "./Card.css";
import A from "../img/R-LK3sqLiBw.svg";
import chair from "../img/iconfinder_Movies_and_Entertainment_cinema_seat_theatre_sofa_6611449 1.svg";
import stairs from "../img/stairs-with-handrail 1.svg";
import hektar from "../img/keyboard-key-m 1.svg";
const CardA = ({sales}) => {
  return (
    <div className="Card">
        <img src={A} alt="" />
      {sales.map((sales, index) => (
        <>
          <h3 key={index}>{sales.price}</h3>
          <h5 key={index}>{sales.title}</h5>
          <p key={index}>{sales.location}</p>
          <p key={index}>{sales.deadline}</p>
          <div>
            <div>
              <img src={chair} alt="" /> <span key={index}>{sales.room}</span>
            </div>
            <div>
              <img src={stairs} alt="" /> <span key={index}>{sales.floor}</span>
            </div>
            <div>
              <img src={hektar} alt="" /> <span key={index}>{sales.size}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CardA;
