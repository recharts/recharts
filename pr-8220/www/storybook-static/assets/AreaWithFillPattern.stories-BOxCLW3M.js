import{R as t}from"./iframe-DNXhgPY2.js";import{R as p}from"./zIndexSlice-C_G2hm8X.js";import{C as m}from"./ComposedChart-X9xQAOg_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bf82P_xq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./throttle-OaXA1Z9W.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./RechartsWrapper-C4y6DVLx.js";import"./axisSelectors-CTPBeHC3.js";import"./polarAxisSelectors-z81ryBra.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8LWxob5.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./Layer-EsfR_jDG.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./Label-Ds6wWWz7.js";import"./Text-_51Pk49J.js";import"./ZIndexLayer-wMGGFAui.js";import"./ActivePoints-B_3_DJ4t.js";import"./Dot-BLhlTrFS.js";import"./types-DuvV7zSt.js";import"./activeStyles-DSoUr8Vz.js";import"./useAnimationId-CljrEDcm.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getRadiusAndStrokeWidthFromDot-CP6kgx-1.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./Curve-DQsYvz2A.js";import"./step-DKewonm6.js";import"./useEffectiveDataKey-CcJJJpcL.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
