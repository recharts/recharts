import{R as t}from"./iframe-DzolqKW_.js";import{R as p}from"./zIndexSlice-BFydgfU7.js";import{C as m}from"./ComposedChart-BXGKVBvM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DUh6boSw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWqOgTiL.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CninMw2k.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./axisSelectors-BWPQJWKM.js";import"./d3-scale-BOKuOqr8.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./CategoricalChart-tg3Y8Ccg.js";import"./Layer-TAE-BGU4.js";import"./AnimatedItems-D8n1PMNM.js";import"./Label-BR8h5iiR.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./ZIndexLayer-CuyP-vcu.js";import"./useAnimationId-BCQ5DS1y.js";import"./ActivePoints-CAwFhkX4.js";import"./Dot-CwbyEbx1.js";import"./types-BKcxhU3G.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./getRadiusAndStrokeWidthFromDot-BzM4Z0nC.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./Curve-D6-Bsbi2.js";import"./step-DRn0xJ5_.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DnZlAaLd.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
