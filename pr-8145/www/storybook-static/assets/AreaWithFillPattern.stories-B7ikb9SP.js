import{R as t}from"./iframe-C9Icmvn-.js";import{R as p}from"./zIndexSlice-BtEgXkTj.js";import{C as m}from"./ComposedChart-D9iZM0Ny.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DNZbQoXb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./throttle-BP58Oxor.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./RechartsWrapper-CtHkjOy7.js";import"./axisSelectors-C12AZXdM.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZcRnjza.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./Layer-wqByJTCO.js";import"./LabelList-BBURyYAC.js";import"./Label-B5iIonTH.js";import"./Text-sNGi1G51.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./ActivePoints-CHnUvRu_.js";import"./Dot-DC8dfn9r.js";import"./types-C9Uy4GKt.js";import"./activeStyles-h91K6JZi.js";import"./useAnimationId-BL9AhoYr.js";import"./dataEntryStyles-BjZqswDr.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getRadiusAndStrokeWidthFromDot-Df9gcykC.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./Curve-C441Qxgg.js";import"./step-DBIWc43o.js";import"./useEffectiveDataKey-C0LxQIpq.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
