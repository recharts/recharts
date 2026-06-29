import{R as t}from"./iframe-Xn2MpEZO.js";import{R as p}from"./zIndexSlice-Ci7uKtqk.js";import{C as m}from"./ComposedChart-B-mMwZkB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-7gJ7wVDU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Df9E9w07.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./get-a5GlobPr.js";import"./resolveDefaultProps-ComQIB2r.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./axisSelectors-N1yg_9bS.js";import"./d3-scale-BhQeBFLV.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./Layer-DSBtIc_n.js";import"./AnimatedItems-AezG2GF8.js";import"./Label-Drk02YPI.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./ZIndexLayer-rkhqqfVD.js";import"./useAnimationId-Dddlhxb8.js";import"./ActivePoints-Du0eECBh.js";import"./Dot-BgDetyZ9.js";import"./types-BkUFHbYz.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getRadiusAndStrokeWidthFromDot-CWaP50r6.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./Curve-DX9_0-tw.js";import"./step-DkdplZJs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-IpQzZ0vj.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
