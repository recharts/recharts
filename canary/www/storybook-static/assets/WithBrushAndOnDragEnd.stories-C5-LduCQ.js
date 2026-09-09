import{R as t}from"./iframe-DsxZlU5r.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C9X4WKOn.js";import{B as p}from"./BarChart-DWWxtgDE.js";import{X as l}from"./XAxis-CYz9D79b.js";import{Y as h}from"./YAxis-BnTqZW5t.js";import{B as x}from"./Brush-Bch4pO2Y.js";import{B as c}from"./Bar-D5P1MOki.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-UzrpYZZa.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-txR9uiFl.js";import"./isWellBehavedNumber-CTT7gzfy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwO2SplL.js";import"./axisSelectors-BqZ8E3_i.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./CartesianAxis-xh5AQvWr.js";import"./Layer-C9CQXPgt.js";import"./Text-rMrFJjxt.js";import"./DOMUtils-DeolnxnC.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./Label-W_BNIllg.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./types-DNLq32QI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D0Io6hoN.js";import"./useAnimationId-BTOaFYFg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Y7TKK3zv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWfz214x.js";import"./tooltipContext-CqKrYQht.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./getZIndexFromUnknown-CN6ZCCqF.js";import"./useGraphicalItemIdentity-DcyTJT25.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
