import{R as t}from"./iframe-BjoWmD_2.js";import{R as p}from"./zIndexSlice-QxL2_XNr.js";import{C as m}from"./ComposedChart-CfdRjNXn.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-KPR5toEf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h3rYfSBM.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./axisSelectors-CTjcoI_o.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./Layer-BETohxRY.js";import"./activeStyles-pw12H8S5.js";import"./Label-Cqr17CGT.js";import"./Text-DoJy0Hms.js";import"./pageBackground-B2WnjK3P.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./ZIndexLayer-DQXgAxZP.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./ActivePoints-CbXUnkX6.js";import"./Dot-CwvTlVWs.js";import"./types-CwctOhA4.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getRadiusAndStrokeWidthFromDot-BXg1EUK6.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./Curve-Bi87Df9h.js";import"./step-DbGei3uZ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
