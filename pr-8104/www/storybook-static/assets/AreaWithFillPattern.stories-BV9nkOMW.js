import{R as t}from"./iframe-Bc_TQ7zr.js";import{R as p}from"./zIndexSlice-CO4_damr.js";import{C as m}from"./ComposedChart-GKyMiMHY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bt9qHIET.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-urKJAClX.js";import"./throttle-DHt3nTHd.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./axisSelectors-BQX-Wl7f.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-2JXHcyFQ.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./Layer-Pn8de_pX.js";import"./LabelList-aO6gLBJB.js";import"./Label-B9G7W81w.js";import"./Text-DL7i-IN9.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./ActivePoints-lBMg9AK3.js";import"./Dot-BVzb9xNA.js";import"./types-CI1g0QBx.js";import"./activeStyles-CqnjEaUo.js";import"./useAnimationId-BaQxjUGX.js";import"./dataEntryStyles-CcDBy8RW.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getRadiusAndStrokeWidthFromDot-CL0rbQkZ.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./Curve-BkI7sWgu.js";import"./step-Bz4sQ0ke.js";import"./useEffectiveDataKey-BSvuchOk.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
