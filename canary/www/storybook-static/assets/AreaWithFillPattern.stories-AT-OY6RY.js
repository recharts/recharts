import{R as t}from"./iframe-DQWQDaPi.js";import{R as p}from"./zIndexSlice-DcHJpvAl.js";import{C as m}from"./ComposedChart-BSJdMKGt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CmfRADlv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BQvRWZqy.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Booe6JJa.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYnvhIY5.js";import"./index-BkyhQGGW.js";import"./index-CXa1CePB.js";import"./axisSelectors-CuF4kGlO.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./Layer-7j8XoA_H.js";import"./AnimatedItems-Brr5wTGw.js";import"./Label-DuuyKMi1.js";import"./Text-C8i9V0Ud.js";import"./DOMUtils-D6N96cFz.js";import"./ZIndexLayer-CfwFYr9r.js";import"./useAnimationId-C7lsUvOa.js";import"./ActivePoints-CRS7YZW5.js";import"./Dot-xJkR_k9t.js";import"./types-D4LIC8ZM.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./getRadiusAndStrokeWidthFromDot-DsN6vJJI.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./Curve-CR2T-gv2.js";import"./step-C6wof28x.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./graphicalItemSelectors-X4IgffWK.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
