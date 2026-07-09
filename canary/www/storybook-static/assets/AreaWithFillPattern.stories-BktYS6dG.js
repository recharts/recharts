import{R as t}from"./iframe-1WG2GaGK.js";import{R as p}from"./zIndexSlice-Cov-NdD7.js";import{C as m}from"./ComposedChart-oCH7LOuc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-gsVmhDQX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CilGSGoA.js";import"./index-5AmNG6XU.js";import"./index-B9GM_nGd.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B25CKbLH.js";import"./isWellBehavedNumber-B8fKCwi6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEOyl0D-.js";import"./index-VHVhx1s3.js";import"./index-4UOu-PIF.js";import"./renderedTicksSlice-yo2RGDNB.js";import"./axisSelectors-Z8eCsImY.js";import"./d3-scale-CmojMi_E.js";import"./CartesianChart-Zn47P4p1.js";import"./chartDataContext-D8DLudE3.js";import"./CategoricalChart-SqRjK-fv.js";import"./Layer-DBIGyDPn.js";import"./AnimatedItems-4pikexb5.js";import"./Label-C04bXC5p.js";import"./Text-Dz3dqWjs.js";import"./DOMUtils-BEiFehcN.js";import"./ZIndexLayer-DViTPcza.js";import"./useAnimationId-CnlBu4wu.js";import"./ActivePoints-QnPfRyyM.js";import"./Dot-DPmzUGmI.js";import"./types-CoEQwN0Z.js";import"./RegisterGraphicalItemId-kBJx_8Si.js";import"./GraphicalItemClipPath-CPz3ISZ8.js";import"./SetGraphicalItem-C1oEpLce.js";import"./getRadiusAndStrokeWidthFromDot-Be8-hX5d.js";import"./ActiveShapeUtils--OE9DBaA.js";import"./Curve-E4cJetkR.js";import"./step-BCYuq7V7.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BER8UMX1.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
