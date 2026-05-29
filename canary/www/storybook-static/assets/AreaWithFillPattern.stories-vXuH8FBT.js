import{c as t}from"./iframe-CJZgj0uU.js";import{g as p}from"./zIndexSlice-BZ2O-OQH.js";import{C as m}from"./ComposedChart-CmvcVU8X.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-B-NaJF6I.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BIrrzgtK.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./get-BEAZ2r52.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./isWellBehavedNumber-Nplq3bnb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./Curve-Cyl-l43N.js";import"./types-CiRy8kfJ.js";import"./step-DNKj4THz.js";import"./path-DyVhHtw_.js";import"./Layer-ydyUpJJb.js";import"./ReactUtils-GZ1OoiCv.js";import"./Label-CJIrHnSQ.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./ActivePoints-IwLpaKOt.js";import"./Dot-BRBzm1sk.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./useAnimationId-Bs6-Zm7y.js";import"./getRadiusAndStrokeWidthFromDot-D1SY7hYV.js";import"./graphicalItemSelectors-CK02F2-J.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
