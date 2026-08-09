import{R as t}from"./iframe-osdC7w3x.js";import{R as s}from"./zIndexSlice-deUrzjsz.js";import{C as m}from"./ComposedChart-NByrG7TX.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-C8jawNzS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yBEImYyh.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./Layer-CRq3eSZM.js";import"./tooltipContext-DugeM6MB.js";import"./AnimatedItems-DHXks09V.js";import"./Label-CRRMP5SS.js";import"./Text-HkDUvF78.js";import"./DOMUtils-CpdlvjrD.js";import"./ZIndexLayer-C_4Zumz8.js";import"./useAnimationId-T5o_BkmZ.js";import"./types-PJaZpOTb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IzVRkUh0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getZIndexFromUnknown-CDLEPKSa.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DAicamNa.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
