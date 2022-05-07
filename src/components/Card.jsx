import "./../styles/Card.css";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState,useContext } from "react";
import {ModalContext} from "../Helper/ModalContext";

const Card = ({ title,id }) => {
  const {setModal} = useContext(ModalContext)
  const [hover, setHover] = useState(false);
  return (
    <div className="card-main">
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
      <div className="hrbar"></div>
      <button className="icon-btn plus" onClick={()=>setModal(true)}>
        <FaPlus />        
      </button>
    </div>
  );
};

export default Card;
