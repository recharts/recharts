import{R as t}from"./iframe-DDEEclxH.js";import{R as p}from"./zIndexSlice-CummiUIE.js";import{C as m}from"./ComposedChart-DyJQFPgX.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-cSvbnb93.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OMOVa0qg.js";import"./index-BXn3iYjY.js";import"./index-DUYM5IBE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BzDlbQMA.js";import"./isWellBehavedNumber-D3AVRour.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3G4Mqkl.js";import"./axisSelectors-DiahpmD-.js";import"./d3-scale-U2rNi4eb.js";import"./index-DuT7Rit8.js";import"./index-CkiAY9bZ.js";import"./renderedTicksSlice-BdHhja-C.js";import"./index-BjbpJMdG.js";import"./CartesianChart-CBOTH61V.js";import"./chartDataContext-XrvVwuj4.js";import"./CategoricalChart-msaFLCNM.js";import"./Layer-DiIYn3al.js";import"./AnimatedItems-AtWd5M7o.js";import"./Label-BfUQEb6D.js";import"./Text-CkcSa5pV.js";import"./DOMUtils-3FjGni4U.js";import"./useId-C6c_N3kr.js";import"./useBackwardsCompatibleTheme-CoJLQA5O.js";import"./ZIndexLayer-BUGWfp6H.js";import"./useAnimationId-qBVm6Gg1.js";import"./ActivePoints-CkbG5RIV.js";import"./Dot-DxUofVpC.js";import"./types-CMxl_r2z.js";import"./RegisterGraphicalItemId-nSLabm2D.js";import"./GraphicalItemClipPath-CmGXOSE1.js";import"./SetGraphicalItem-gofxKkAQ.js";import"./getRadiusAndStrokeWidthFromDot-B-fypNZ4.js";import"./ActiveShapeUtils-CjAGkH2d.js";import"./Curve-DmyaY7N7.js";import"./step-C_2d7_Dh.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dou3-X4Z.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
