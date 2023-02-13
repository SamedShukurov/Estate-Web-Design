import "./Card.css";

import A from "../img/R-LK3sqLiBw.svg";
import chair from "../img/iconfinder_Movies_and_Entertainment_cinema_seat_theatre_sofa_6611449 1.svg";
import hektar from "../img/keyboard-key-m 1.svg";
import stairs from "../img/stairs-with-handrail 1.svg";

const CardA = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="Card"  key={index}>
          <img src={A} alt="" />
          <h3>{item.sales}</h3>
          <h5>{item.title}</h5>
          <p>{item.location}</p>
          <p>{item.deadline}</p>
          <div>
            <div>
              <img src={chair} alt="" /> <span>{item.room}</span>
            </div>
            <div>
              <img src={stairs} alt="" /> <span>{item.floor}</span>
            </div>
            <div>
              <img src={hektar} alt="" /> <span>{item.size}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardA;
