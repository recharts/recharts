import{R as t}from"./iframe-CIwxHuVP.js";import{R as p}from"./zIndexSlice-4cOqtSJ1.js";import{C as m}from"./ComposedChart-D9qEBqM1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BsZtGFQV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DyeZ31Gg.js";import"./index-DYcgeWKW.js";import"./index-BBY9vn-H.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqjvsCVB.js";import"./isWellBehavedNumber-DnH2FQ7z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-saup7v4_.js";import"./axisSelectors-YcB3o8_5.js";import"./d3-scale-BsCK15DF.js";import"./index-Dret-drz.js";import"./index-KtvOjFJW.js";import"./renderedTicksSlice-BymeN3Gd.js";import"./index-CgMi-XQz.js";import"./CartesianChart-BuIzZkiF.js";import"./chartDataContext-BnEwWcTU.js";import"./CategoricalChart-BsI6BCbz.js";import"./Layer-QH0nRmzc.js";import"./AnimatedItems-CJSCuTfT.js";import"./Label-P76xZGuB.js";import"./Text-DdeI7QFK.js";import"./DOMUtils-DJmg_ALb.js";import"./useId-CvnBUwAn.js";import"./useBackwardsCompatibleTheme-CaEtd9Gi.js";import"./ZIndexLayer-DSlR-fbE.js";import"./useAnimationId-CRxHEUg9.js";import"./ActivePoints-DbUUlzxv.js";import"./Dot-USLgQRMp.js";import"./types-CaxJYW3v.js";import"./RegisterGraphicalItemId-Bx9h1qwh.js";import"./GraphicalItemClipPath-DfR7F3pr.js";import"./SetGraphicalItem-DCJicVim.js";import"./getRadiusAndStrokeWidthFromDot-CxoI2rZS.js";import"./ActiveShapeUtils-C_X8XuiV.js";import"./Curve-ByjfkPmA.js";import"./step-CKl1-sZu.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BMtT3rRV.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
