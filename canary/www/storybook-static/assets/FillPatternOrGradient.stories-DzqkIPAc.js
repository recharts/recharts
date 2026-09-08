import{R as t}from"./iframe-DwQ960mE.js";import{R as s}from"./zIndexSlice-CRshAYou.js";import{C as m}from"./ComposedChart-njiJAHmg.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-o8rL7bWh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBpng8v-.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CV7KCZiE.js";import"./axisSelectors-BuM-hXsR.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./index-Dhp6LnMJ.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./Layer-nbNG3urG.js";import"./AnimatedItems--DCjDL7v.js";import"./Label-BnvMog58.js";import"./Text-D31azkqa.js";import"./DOMUtils-jWrmId9V.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./ZIndexLayer-CNwoXSbx.js";import"./useAnimationId-CgdCBqIf.js";import"./types-BF5horUV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oko1PZRH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./tooltipContext-wowC4QJZ.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./ErrorBarContext-C6-51rId.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getZIndexFromUnknown-DlytlEN4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DUZ2mI-D.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
