import{R as t}from"./iframe-Bzk7zQca.js";import{R as p}from"./zIndexSlice-CmFEWq1r.js";import{C as m}from"./ComposedChart-BwJ5t2t4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CfBg9_Ji.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CcXYFoUI.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./get-CihDQax7.js";import"./resolveDefaultProps-CJmyog69.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./Layer-C58in0aX.js";import"./AnimatedItems-Bm1dVVre.js";import"./Label-CTPsCXr1.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./ZIndexLayer-DxzvrsVM.js";import"./useAnimationId-3u1Yr1gs.js";import"./ActivePoints-BuHZiJPV.js";import"./Dot-CLahKtoI.js";import"./types-BYFlfVWD.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getRadiusAndStrokeWidthFromDot-CmnydJOh.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./Curve-QDW-Shr1.js";import"./step-BsT6z54w.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B0IMupcf.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
