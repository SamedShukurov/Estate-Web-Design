import C from "../img/pexels-theo-decker-5448171 1.jpg";
import "./CardC.css";
const CardC = () => {
  return (
    <div className="search view">
      <div>
        <div>
          <h4>Search Your Dream House On The Map</h4>
          <p>
            Find the house you are looking for easily according to location
            information.
          </p>
        </div>
        <div>
          <button>Search On Map</button>
        </div>
      </div>
      <div>
        <img src={C} alt="" />
      </div>
    </div>
  );
};

export default CardC;
