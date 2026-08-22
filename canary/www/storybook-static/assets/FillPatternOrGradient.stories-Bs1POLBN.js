import{R as t}from"./iframe-BX5cRibr.js";import{R as s}from"./zIndexSlice-AZuYl_vp.js";import{C as m}from"./ComposedChart-ySsto5-f.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DCSjGvKA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zmqWqRK4.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./Layer-W_QEwym4.js";import"./AnimatedItems-Cm8c3RW5.js";import"./Label-DaxsWVsm.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./useAnimationId-CcWR-JA_.js";import"./types-DbQE6sDs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sEO8jAvN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./tooltipContext-BCMOyfKZ.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getZIndexFromUnknown-wU2gbq3X.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DW-toJ5T.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
