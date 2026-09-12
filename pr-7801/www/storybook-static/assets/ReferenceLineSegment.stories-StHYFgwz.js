import{R as e}from"./iframe-DDEEclxH.js";import{R as i}from"./zIndexSlice-CummiUIE.js";import{C as n}from"./ComposedChart-DyJQFPgX.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CJl6Ubeo.js";import{X as s}from"./XAxis-OiAt4OfM.js";import{Y as c}from"./YAxis-x9xRaP5Q.js";import{L as d}from"./Line-CgJTWLaM.js";import{R as g}from"./ReferenceLine-BtteoN1w.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OMOVa0qg.js";import"./index-BXn3iYjY.js";import"./index-DUYM5IBE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BzDlbQMA.js";import"./isWellBehavedNumber-D3AVRour.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3G4Mqkl.js";import"./axisSelectors-DiahpmD-.js";import"./d3-scale-U2rNi4eb.js";import"./index-DuT7Rit8.js";import"./index-CkiAY9bZ.js";import"./renderedTicksSlice-BdHhja-C.js";import"./index-BjbpJMdG.js";import"./CartesianChart-CBOTH61V.js";import"./chartDataContext-XrvVwuj4.js";import"./CategoricalChart-msaFLCNM.js";import"./CartesianAxis-CdQspuXD.js";import"./Layer-DiIYn3al.js";import"./Text-CkcSa5pV.js";import"./DOMUtils-3FjGni4U.js";import"./useId-C6c_N3kr.js";import"./useBackwardsCompatibleTheme-CoJLQA5O.js";import"./Label-BfUQEb6D.js";import"./ZIndexLayer-BUGWfp6H.js";import"./types-CMxl_r2z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DmyaY7N7.js";import"./step-C_2d7_Dh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-AtWd5M7o.js";import"./useAnimationId-qBVm6Gg1.js";import"./ActivePoints-CkbG5RIV.js";import"./Dot-DxUofVpC.js";import"./RegisterGraphicalItemId-nSLabm2D.js";import"./ErrorBarContext-DNzyQz3v.js";import"./GraphicalItemClipPath-CmGXOSE1.js";import"./SetGraphicalItem-gofxKkAQ.js";import"./getRadiusAndStrokeWidthFromDot-B-fypNZ4.js";import"./ActiveShapeUtils-CjAGkH2d.js";import"./useGraphicalItemIdentity-Dou3-X4Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
