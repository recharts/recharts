import{R as t}from"./iframe-ClZ97IhH.js";import{R as s}from"./zIndexSlice-C5PhT0E1.js";import{C as l}from"./ComposedChart-B1E1zelw.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D1Ou1-wH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CenVclrT.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./axisSelectors-YPPwLD-Y.js";import"./d3-scale-BrF_Bfnv.js";import"./CartesianChart-CLbAeK38.js";import"./chartDataContext-DXptRcnW.js";import"./CategoricalChart-CU7_I9di.js";import"./Layer-av8QWZYv.js";import"./tooltipContext-2SEiETQf.js";import"./AnimatedItems-Ugycet-g.js";import"./Label-Bh1DkGaJ.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./ZIndexLayer-DzfxsJEt.js";import"./useAnimationId-BXxNbWRb.js";import"./types-CfFSLUx9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcxWrdiG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SliXRAYD.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./ErrorBarContext-D5P-GrTa.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getZIndexFromUnknown-kZ-FQiNi.js";import"./graphicalItemSelectors-LqY6E-my.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
