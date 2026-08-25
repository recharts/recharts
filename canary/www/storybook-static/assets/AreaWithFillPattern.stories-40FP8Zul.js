import{R as t}from"./iframe-pb0eGUzQ.js";import{R as p}from"./zIndexSlice-Cv3joHsa.js";import{C as m}from"./ComposedChart-BYOHyhAB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-kBoCIC6_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLVKwQCr.js";import"./index-CadbAa9f.js";import"./index-B3wblxBJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIcSgHHm.js";import"./isWellBehavedNumber-sYswO0zz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvkKxzHL.js";import"./index-Ci6SDbSO.js";import"./index-DmA7_hIT.js";import"./axisSelectors-RMGVuaxT.js";import"./d3-scale-D40q8NYs.js";import"./renderedTicksSlice-BIUrSjZy.js";import"./CartesianChart-D9u_fkX_.js";import"./chartDataContext-tQQ7C7rr.js";import"./CategoricalChart-DraDT8M3.js";import"./Layer-CsF7idKX.js";import"./AnimatedItems-DvU5M9qH.js";import"./Label-C-65Vs2n.js";import"./Text-Bq7mJ7MP.js";import"./DOMUtils-C_JPJk8X.js";import"./useId-xKOkSlvZ.js";import"./useBackwardsCompatibleTheme-DGBzFLd0.js";import"./ZIndexLayer-BlGsGj6Y.js";import"./useAnimationId-hkXeXWT6.js";import"./ActivePoints-CH_dCX-F.js";import"./Dot-DmEXtJXC.js";import"./types-CuZ7ciTr.js";import"./RegisterGraphicalItemId-BA80SMDx.js";import"./GraphicalItemClipPath-B6_R3NgE.js";import"./SetGraphicalItem-DoaJ7VXW.js";import"./getRadiusAndStrokeWidthFromDot-DyhskonW.js";import"./ActiveShapeUtils-DGHBRMQa.js";import"./Curve-CGTwaLHs.js";import"./step-BNEQKmaP.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7aPo6C0-.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
