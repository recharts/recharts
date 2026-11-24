import{R as t}from"./iframe-3nQ-xZag.js";import{R as p}from"./zIndexSlice-Dm-AMY-R.js";import{C as m}from"./ComposedChart-BTAIT8TE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-0nLeI4S9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./throttle-VgoIbkK-.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./RechartsWrapper-CLBNIVU_.js";import"./axisSelectors-fNaznWMp.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Nv905U8s.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./getRadiusAndStrokeWidthFromDot-DqipViX9.js";import"./Layer-B7hf8wrq.js";import"./dataEntryStyles-31cxgZsa.js";import"./Label-CjKwBg5w.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./ActivePoints-Ba3qB0HE.js";import"./Dot-B0shGOFT.js";import"./types-CveBZAlv.js";import"./activeStyles-BALJdcO7.js";import"./useAnimationId-JHyqMuIo.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CcSizHOA.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./Curve-D3218arp.js";import"./step-nf1yL9aW.js";import"./useEffectiveDataKey-DHnfGJ84.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
