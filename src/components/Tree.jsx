import CardSingle from "./CardSingle";

const Tree = ({ flowTree, x, y, gap, w }) => {
  const len = Object.keys(flowTree).length;
  const den = 1.3;
  const thisWidth = (len * w + (len - 1) * gap) / den;
  let x_dash = x + (w - thisWidth) / 2;
  x_dash -= (w + gap) / den;
  let childrenLength;
  let childrenWidth; 

  const y_dash = (len === 1) ? y  : y + 45;
  return flowTree.map((node) => {
    childrenLength = Object.keys(node.children).length
    childrenWidth = (childrenLength * w + (childrenLength-1) * gap ) / (den*den)
    x_dash += (w + gap) / den;
    return (
      <>
        <CardSingle {...node} x={x_dash} y={y_dash} w={w/den} />
        {node.children.length >= 2 && (
          <>
            <div className="two-bar" style={{position:"absolute",top:y_dash+166+"px",left:x_dash+(w/(2*den))-(childrenWidth - w/(den*den) + 5)/2 +"px"}}>
              <div className="vrbar"></div>
              <div className="hrbar" style={{ width: childrenWidth - w/(den*den) + 5  + "px" }}></div>
            </div>
          </>
        ) }
        {node.children && node.children.length > 0 && (
          <Tree
            flowTree={[...node.children]}
            x={x_dash}
            y={y_dash+166}
            gap={gap/den}
            w={w/den}
          />
        )}
      </>
    );
  });
};
export default Tree;
