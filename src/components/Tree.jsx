import CardSingle from "./CardSingle"
import CardTwo from './CardTwo'

const Tree = (flowTree) => {
  const len = Object.keys(flowTree).length

  console.log(flowTree[0].children)
  return (len === 1) ? (
    <>
      <CardSingle title={flowTree[0].text} x={flowTree[0].x} y={flowTree[0].y} />
      {flowTree[0].children && flowTree[0].children.length > 0 && <Tree {...flowTree[0].children} /> }
    </>
  ) : (
    <>
      <CardTwo title1={flowTree[0].text} title2={flowTree[1].text} x1={flowTree[0].x} y1={flowTree[0].y} x2={flowTree[1].x} y2={flowTree[1].y} />
      {flowTree[0].children && flowTree[0].children.length > 0 && <Tree {...flowTree[0].children} />}
      {flowTree[1].children && flowTree[1].children.length > 0 && <Tree {...flowTree[1].children} />}
    </>
  )
}

export default Tree