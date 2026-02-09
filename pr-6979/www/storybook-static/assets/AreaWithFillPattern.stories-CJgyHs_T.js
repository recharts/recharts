import{e as t}from"./iframe-Bm_dlztP.js";import{R as p}from"./arrayEqualityCheck-BKx_y40S.js";import{C as m}from"./ComposedChart-DyBYNAPL.js";import{A as r}from"./Area-m5csQfYr.js";import{R as s}from"./RechartsHookInspector-CZNQLUTJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./Curve-D1sI4FDZ.js";import"./types-DmFvG4SC.js";import"./Layer-DqzpUDSE.js";import"./ReactUtils-278YW1x2.js";import"./Label-CDVZMFBi.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./ZIndexLayer-BWJMOT1A.js";import"./ActivePoints-CYA336oa.js";import"./Dot-DVC6PvDp.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./useAnimationId-DL43TA5B.js";import"./getRadiusAndStrokeWidthFromDot-zhMizOQu.js";import"./graphicalItemSelectors-DtgjuJtM.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
