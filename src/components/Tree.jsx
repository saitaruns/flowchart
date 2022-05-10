import CardSingle from "./CardSingle";

const Tree = ({ flowTree, x, y, gap, w }) => {
  const len = Object.keys(flowTree).length;
  const den = 1.3;
  let x_dash = x + (w - (len * (w / den) + (len - 1) * (gap / den))) / 2;
  x_dash -= w + gap / den;
  return flowTree.map((node) => {
    x_dash += w + gap / den;
    return (
      <>
        <CardSingle {...node} x={x_dash} y={y} w={w} />
        {node.children && node.children.length > 0 && (
          <Tree
            flowTree={[...node.children]}
            x={x_dash}
            y={y + 166}
            gap={gap / den}
            w={w / den}
          />
        )}
      </>
    );
  });
};
export default Tree;
