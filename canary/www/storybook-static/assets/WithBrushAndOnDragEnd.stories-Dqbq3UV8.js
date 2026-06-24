import{R as t}from"./iframe-DI4HGhHh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DLsQIX9Y.js";import{B as p}from"./BarChart-w2HIqmHx.js";import{X as l}from"./XAxis-Dj4RjVoP.js";import{Y as h}from"./YAxis-C1Oi2VZJ.js";import{B as x}from"./Brush-_uzboENN.js";import{B as c}from"./Bar-BCtslQcx.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CAVNBYxE.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./get-Bfcmt9LS.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./renderedTicksSlice-CGUH_--9.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./CartesianAxis-XgaOnUyy.js";import"./Layer-2I2RJkTJ.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./Label-BOdAN_xF.js";import"./ZIndexLayer-CAI-vp6k.js";import"./types-BM9AiZnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DfACEnFU.js";import"./AnimatedItems-B_Y2HCHw.js";import"./useAnimationId-B5j5oAoh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdJqIjzl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getZIndexFromUnknown-3dpL5-Eh.js";import"./graphicalItemSelectors-COEWuTcX.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
