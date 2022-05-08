import "./../styles/Card.css";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState,useContext } from "react";
import {ModalContext} from "../Helper/ModalContext";

const CardSingle = ({ title,x,y }) => {
  const {openModal} = useContext(ModalContext)
  const [hover, setHover] = useState(false);
  
  return (
    <div className="card-main" style={{top:x+"px",left:y+"px"}}>
      <div className="vrbar"></div>
      <div
        className="card"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="card-text">{title}</p>          
        {hover && (
            <button className="close icon-btn">
              <FaTrashAlt />
            </button>
          )}
      </div>
      <div className="vrbar"></div>
      <button className="icon-btn plus" onClick={()=>openModal(true)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CardSingle;
