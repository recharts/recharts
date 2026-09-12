import{R as t}from"./iframe-DqI8fZWc.js";import{R as p}from"./zIndexSlice-9oYbhSdQ.js";import{C as m}from"./ComposedChart-C5b2LV09.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-ClTsFjsK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTCEGSKU.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQO3SMEw.js";import"./axisSelectors-Degnf0cl.js";import"./d3-scale-dm0sSvQ9.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./index-DPm6oXEP.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./Layer-Ckim_S0G.js";import"./AnimatedItems-rYif9Enh.js";import"./Label-B6t_CsQ4.js";import"./Text-9XM6GnGO.js";import"./DOMUtils-C2uAcB2d.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./ZIndexLayer-CmCgphBH.js";import"./useAnimationId-sXalVax-.js";import"./ActivePoints-BpZWKXXH.js";import"./Dot-D3i3k8Cq.js";import"./types-D6uFqDQP.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./getRadiusAndStrokeWidthFromDot-Bz_0HqQj.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./Curve-BfuijxKL.js";import"./step-CpsUov4P.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
