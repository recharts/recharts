import{R as t}from"./iframe-54ZcEpUv.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D4EcTS4q.js";import{B as p}from"./BarChart-CPm_7eLK.js";import{X as l}from"./XAxis-BhMXtQiv.js";import{Y as h}from"./YAxis-2cFJkYpr.js";import{B as x}from"./Brush-B3l0NgoS.js";import{B as c}from"./Bar-D9w0_3rN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DtmCwuH2.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./d3-scale-Bz_vEXwn.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./CartesianAxis-BfyoGem3.js";import"./Layer-C5bNrRV9.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./Label--73vW_dK.js";import"./ZIndexLayer-CQupnOhG.js";import"./types-kdBRSK-c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-D8x71NVd.js";import"./AnimatedItems-Bo-aqLFl.js";import"./useAnimationId-D-RZ_xXC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KX1Q4ZbD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./ErrorBarContext-DIEqyawL.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getZIndexFromUnknown-BzvwOVTj.js";import"./graphicalItemSelectors-C-mFdHvd.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
