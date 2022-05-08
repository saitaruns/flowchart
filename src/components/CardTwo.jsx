import "./../styles/Card.css";
import CardSingle from "./CardSingle";

const CardTwo = ({ title1, title2,x1,y1,x2,y2}) => {
  return (
    <div className="card-two">
      <div className="vrbar"></div>
      <div className="hrbar"></div>
      <div className="card-two-body">
        <CardSingle title={title1} x={x1} y={y1} />
        <CardSingle title={title2} x={x2} y={y2} />
      </div>
    </div>
  );
};

export default CardTwo;
