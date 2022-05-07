import "./App.css";
import Card from "./components/Card";
import { useState} from "react";
import Modal from "./components/Modal"
import {ModalContext} from "./Helper/ModalContext";

function App() {
  const [flowTree, setFlowTree] = useState([["Root"],])
  const [modal, setModal] = useState(false)
  
  const addElements = (text1,text2="")=>{
    if(text2===""){
      setFlowTree([...flowTree,[text1]])
    }
    else{
      setFlowTree([...flowTree,[text1,text2]])
    }
  }
  
  return (
    <div className="App">
      <header className="navbar">
        <h3 className="title">HSV-Flow Chart</h3>
      </header>
      <ModalContext.Provider value={{modal, setModal,addElements}}>
      {modal && <Modal title={"Select Number of Elements to be added"}/>}
      
      
        {flowTree.map(elem => {
          return (
            <div className="flow">
              <Card title={elem[0]} />
            </div>
          )
        })}
      </ModalContext.Provider>
    </div>
  );
}

export default App;
