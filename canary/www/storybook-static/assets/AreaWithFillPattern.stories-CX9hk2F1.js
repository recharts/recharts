import{c as t}from"./iframe-fo49l_7F.js";import{g as p}from"./zIndexSlice-DRP-3MQ6.js";import{C as m}from"./ComposedChart-BGsB6qPQ.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-Ce_szkwB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cnd_vM0p.js";import"./index-Cq9JpdB2.js";import"./index-LHlEkonc.js";import"./get-BUAOm5zY.js";import"./resolveDefaultProps-CVMfvQ41.js";import"./isWellBehavedNumber-B0btAC56.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNEpPwFB.js";import"./index-3vxLE14G.js";import"./index-Dnm6qrQS.js";import"./renderedTicksSlice-DvOi1XF2.js";import"./axisSelectors-DA_mvJaq.js";import"./d3-scale-qag23egh.js";import"./CartesianChart-C_VrjQWn.js";import"./chartDataContext-DeCM2GRR.js";import"./CategoricalChart-Di0rvdap.js";import"./Curve-C8R-he6_.js";import"./types-Bblnl65_.js";import"./step-D7HygetQ.js";import"./path-DyVhHtw_.js";import"./Layer-Cshlv-Qa.js";import"./ReactUtils-Bb0TLcRV.js";import"./Label-B622NV2p.js";import"./Text-BTD0u6_t.js";import"./DOMUtils-7oUYJi4I.js";import"./ZIndexLayer-D6UFvHMF.js";import"./ActivePoints-Dt3Cg6Px.js";import"./Dot-C2AIzy-O.js";import"./RegisterGraphicalItemId-zZVZ96Iy.js";import"./GraphicalItemClipPath-qLKfObJe.js";import"./SetGraphicalItem-BMqVgIbs.js";import"./useAnimationId-AS8JtY64.js";import"./getRadiusAndStrokeWidthFromDot-BviS3R6P.js";import"./graphicalItemSelectors-D7c0zymu.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
