import reactDom from "react-dom";
import "./../styles/Modal.css";
import { ModalContext } from "./../Helper/ModalContext";
import { useContext, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ title }) => {
  const { toggleModal, handleAdd } = useContext(ModalContext);
  const [isTwo, setIsTwo] = useState(false)
  const [in1, setIn1] = useState("")
  const [in2, setIn2] = useState("")
  const [error, setError] = useState("")

  const handleModalAdd = ()=>{
    if((isTwo===false && in1==="") || (isTwo===true && (in1==="" || in2===""))){
      setError("Cannot add node with empty text")
      setTimeout(() => {
        setError("")
      }, 2000);
      return;
    }
    isTwo ? handleAdd(in1,in2) : handleAdd(in1); 
    setIn1("")
    setIn2("")
    toggleModal(false)
  }

  return reactDom.createPortal(
    <>
      <div className={"darkBG"} onClick={() => toggleModal(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <h5 className={"heading"}>{title}</h5>
          </div>
          <button className={"closeBtn"} onClick={() => toggleModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={"modalContent"}>
            <div className="options">
                <button className="single addBtn" autoFocus={true} style={{backgroundColor:isTwo?"gray":"#2c3e50"}} onClick={()=>setIsTwo(false)}>
                    Single
                </button>
                <button className="two addBtn" style={{backgroundColor:isTwo?"#2c3e50":"gray"}} onClick={()=>setIsTwo(true)}>
                    Two
                </button>
            </div>
            <div className="tile-input">
                <input type="text" placeholder="Enter your text here..." value={in1} onChange={(e)=>setIn1(e.target.value)} />
                {isTwo && <input type="text" placeholder="Enter your text here..." value={in2} onChange={(e)=>setIn2(e.target.value)} />}
                {error!=="" && <p style={{color:"red"}}>{error}</p> }
            </div>
          </div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <button className={"addBtn"} onClick={handleModalAdd} >Add</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
