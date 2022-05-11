import "./../styles/Card.css";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState,useContext } from "react";
import {ModalContext} from "../Helper/ModalContext";

const CardSingle = ({text,id,x,y,w}) => {
  const {toggleModal,setParentId,handleDelete} = useContext(ModalContext)
  const [hover, setHover] = useState(false);


  const handleAdd = ()=>{
    setParentId(id)
    toggleModal(true)
  }

  return (
    <div className="card-main" style={{top:y+"px",left:x+"px",width:w+"px"}}>
      <div className="vrbar"></div>
      <div
        className="card"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="card-text">{text}
         </p>          
        {hover && (
            <button className="close icon-btn" onClick={()=>handleDelete(id)}>
              <FaTrashAlt />
            </button>
          )}
      </div>
      <div className="vrbar"></div>
      <button className="icon-btn plus" onClick={handleAdd}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CardSingle;
