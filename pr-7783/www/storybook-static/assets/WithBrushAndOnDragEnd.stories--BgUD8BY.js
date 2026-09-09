import{R as t}from"./iframe-DzgNGLlq.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CTnIst4D.js";import{B as p}from"./BarChart-bD7Sz6Z9.js";import{X as l}from"./XAxis-Cw-Rs66g.js";import{Y as h}from"./YAxis-TE47wPZ7.js";import{B as x}from"./Brush-BMs2qMRV.js";import{B as c}from"./Bar-CqYxz51s.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-uLx0gES7.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CaF46lB1.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CboTFEd7.js";import"./axisSelectors-94eYl4rY.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./CartesianAxis-Cz79nqzF.js";import"./Layer-OlcmJ5EJ.js";import"./Text-Cmcmp6Rw.js";import"./DOMUtils-qoFWhjfZ.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./Label-B2-HhKmy.js";import"./ZIndexLayer-BSDazUEj.js";import"./types-jKlbb9F_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Cm23KMMu.js";import"./useAnimationId-CKHGdmz-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chy5A9Vo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./tooltipContext-Bvg8AaqK.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./ErrorBarContext-BTHVw71_.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./getZIndexFromUnknown-ubDi66MJ.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
