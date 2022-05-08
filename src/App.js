import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/Modal";
import { ModalContext } from "./Helper/ModalContext";
import Tree from "./components/Tree";

function App() {
  const [flowTree, setFlowTree] = useState([{
      id:"root",
      text: "Root",
      x:200,
      y:100,
      children: [
        {
          id:"child1",
          text: "child1",
          x:150,
          y:200,
          children : [
            {
              id:"grandchild1",
              text:"grandchild1",
              x:100,
              y:400,
              children:[]
            }
          ]
        },
        {
          id:"child2",
          text : "child2",
          x:300,
          y:100,
          children: [
            {
              id:"grandchild2",
              text:"grandchild2",
              x:200,
              y:300,
              children:[]
            }
          ]
        }
      ],
    }]);
  const [modal, setModal] = useState(false);

  const openModal = (modalStatus) => {
    setModal(modalStatus);
  };

  // const findAllByKey = (obj, keyToFind) => {
  //   return Object.entries(obj)
  //     .reduce((acc, [key, value]) => (key === keyToFind)
  //       ? acc.concat(value)
  //       : (typeof value === 'object')
  //       ? acc.concat(findAllByKey(value, keyToFind))
  //       : acc
  //     , [])
  // }

  const addElem = ({parentKey}) => {
    Object.entries(flowTree).forEach(([key, val]) => {
      if (key === parentKey) {
        const newNode = {
          text: val,
          children: [],
        };
        const id = uuidv4();
        val.children[id] = newNode;
        return;
      }
      if (typeof val === "object") {
        addElem(parentKey);
      }
    });
  };

  return (
    <div className="App">
      <header className="navbar">
        <h3 className="title">HSV-Flow Chart</h3>
      </header>
      <ModalContext.Provider value={{ modal, openModal, addElem }}>
        {modal && (
          <Modal title={"Select Number of Elements to be added"} />
        )}

        <Tree {...flowTree} />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
