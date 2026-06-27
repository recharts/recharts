import{R as t}from"./iframe-s6xAG-TK.js";import{R as p}from"./zIndexSlice-CtX8Pm57.js";import{C as m}from"./ComposedChart-m51DX7EH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cx20F653.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BuLmScwe.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./get-BoCVnOHD.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NYzcnM5V.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./renderedTicksSlice-iMX2N49n.js";import"./axisSelectors-w5mwcrs7.js";import"./d3-scale-B4pAi3sm.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./Layer-D5OpM5xs.js";import"./AnimatedItems-BLpXLA7r.js";import"./Label-Dp2fRDxb.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./ZIndexLayer-DbooohNT.js";import"./useAnimationId-BfD45VPw.js";import"./ActivePoints-CifW1zG8.js";import"./Dot-uO_lT4NP.js";import"./types-DdoD64CJ.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./getRadiusAndStrokeWidthFromDot-kUCtaSTN.js";import"./ActiveShapeUtils-BRE298QS.js";import"./Curve-BmhK5pW4.js";import"./step-DcuFANAi.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-dZUwQqOx.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
