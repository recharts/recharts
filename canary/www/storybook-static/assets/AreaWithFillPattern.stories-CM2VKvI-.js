import{R as t}from"./iframe-Cy0y2ns8.js";import{R as p}from"./zIndexSlice-DIpYS2pc.js";import{C as m}from"./ComposedChart-CZFSAvco.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-kjat5t9S.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-GHjNdOLX.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tnntysZI.js";import"./axisSelectors-B794UmHN.js";import"./d3-scale-Bptb5_HU.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./Layer-Dt1c85pW.js";import"./activeStyles-Cnxc9Yt_.js";import"./Label-VahG2YbD.js";import"./Text-CR6ssGu_.js";import"./pageBackground-C3xeFLUy.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./ZIndexLayer-DfeIwWxW.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./ActivePoints-B8MUv4SH.js";import"./Dot-BhegBlK5.js";import"./types-es-lSoS7.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./getRadiusAndStrokeWidthFromDot-BVS64Mww.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./Curve-5eCLnpsK.js";import"./step-aUPxj0fJ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BEJg52qX.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
