import{R as t}from"./iframe-Bj-yQnc2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DO4y32gA.js";import{B as p}from"./BarChart-VortCsrk.js";import{X as l}from"./XAxis-XI4N_gb4.js";import{Y as h}from"./YAxis-Bs6EndY5.js";import{B as x}from"./Brush-DGjY0cQP.js";import{B as c}from"./Bar-CaXxE_pb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQMCJbJ.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./d3-scale-rY2RSZRS.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./CartesianAxis-Dfz3FhFq.js";import"./Layer-BLp5IiBu.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./Label-Cm9vMlt2.js";import"./ZIndexLayer-CZNNIEzh.js";import"./types-YXwkeCBT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-5h72lmDe.js";import"./AnimatedItems-DUyUCCX0.js";import"./useAnimationId-Yo_b-bos.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4kIWx5v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BoActjfk.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./ErrorBarContext-ft-NJLsc.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getZIndexFromUnknown-BbLveRBG.js";import"./graphicalItemSelectors-DrBqiWoN.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
