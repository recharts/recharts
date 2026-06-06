import{R as t}from"./iframe-BUJOmzqi.js";import{R as p}from"./zIndexSlice-BsaVfiwf.js";import{C as m}from"./ComposedChart-D5MlcB5U.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-fNDfyaQG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DH0vdgZo.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./get-BL4oPmOH.js";import"./resolveDefaultProps-hlzoE81R.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./axisSelectors-BsZbVas6.js";import"./d3-scale-DS8AhCL8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CwVYswgd.js";import"./chartDataContext-BLLyTvAK.js";import"./CategoricalChart--vXw4uUZ.js";import"./Layer-DAIr4ncG.js";import"./AnimatedItems-JOMjWh90.js";import"./Label-BNcqFpiL.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./ZIndexLayer-DYX-KLdv.js";import"./useAnimationId-BY-iJyWy.js";import"./ActivePoints-CMM7Mo_4.js";import"./Dot-DN1GlAfe.js";import"./types-BzrTCe99.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getRadiusAndStrokeWidthFromDot-DkvFWbU0.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./Curve-DuctlboJ.js";import"./step-C_dZFxdF.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-6So_Cw7T.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
