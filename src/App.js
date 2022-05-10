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
      children: [
        {
          id:"child1",
          text: "child1",
          children : [
            // {
            //   id:"grandchild1",
            //   text:"grandchild1",
            //   children:[]
            // }
          ]
        },
        {
          id:"child2",
          text : "child2",
          children: [
            // {
            //   id:"grandchild2",
            //   text:"grandchild2",
            //   children:[]
            // }
          ]
        }
      ],
    }]);
  const [modal, setModal] = useState(false);
  const [parentId, setParentId] = useState(flowTree[0].id);

  const toggleModal = (modalStatus) => {
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

  const addElem = (obj,parentKey,text) => {
    if(obj.length === 0){
      return
    }
    const id = uuidv4();
    let newNode = {
      id: id,
      text: text,
      children: [],
    };
    obj.forEach((node) => {
      if (node.id === parentKey) { 
        if(node.children.length < 2){
          node.children.push(newNode)
        }
        else{
          console.log("2 children max");
        }
        return;
      }
      addElem(node.children,parentKey,text)
    });
    return obj
  };

  const deleteElem = (obj,id)=>{
    if(id === "root"){
      return
    }
    obj.forEach((node)=>{
      if(node.id === id){
        if(node.children.length === 0){
          // console.log(node.children.length)
          return obj.filter(el => el.id !== id)
        }
        else{
          console.log("cant delete")
        }
      }
      deleteElem(node.children,id)
    })
    return obj
  }

  const handleDelete = (id)=>{
    const flowCopy = Object.assign([],flowTree) //creates a copy of the state
    let resTree
    resTree = deleteElem(flowCopy,id)
    setFlowTree(resTree)
    console.log(flowTree)
  }

  const handleAdd = (text1,text2=null)=>{
    const flowCopy = Object.assign([],flowTree) //creates a copy of the state
    let resTree;
    if(text2===null){
      resTree = addElem(flowCopy,parentId,text1)
    }
    else{
      addElem(flowCopy,parentId,text1)
      resTree = addElem(flowCopy,parentId,text2)
    }
    setFlowTree(resTree)
    console.log(flowTree)
  }

  

  return (
    <div className="App">
      <header className="navbar">
        <h3 className="title">HSV-Flow Chart</h3>
      </header>
      <ModalContext.Provider value={{ modal, toggleModal, handleAdd, parentId, setParentId, handleDelete }}>
        {modal && (
          <Modal title={"Select Number of Elements to be added"} />
        )}

        <Tree flowTree={[...flowTree]} x={window.screen.width/2+100} y={100} gap={530} w={100}/>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
