import{R as t}from"./iframe-z3NgSViZ.js";import{R as p}from"./zIndexSlice-BX0CZtnZ.js";import{C as m}from"./ComposedChart-BMGZ_TwG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BpZ3VLfD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwdrNliT.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_oQRH40.js";import"./axisSelectors-CgbkNJhz.js";import"./d3-scale-CwYOu9hN.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-bcahlE0Z.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./Layer-DIcps5If.js";import"./activeStyles-CeGdwWio.js";import"./Label-Cv5DkZGS.js";import"./Text-Bf3Z0ESX.js";import"./pageBackground-SSHR1dqO.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./ZIndexLayer-B4GmRtpr.js";import"./dataEntryStyles-C3z4X2RS.js";import"./useAnimationId-Cz2G0J8W.js";import"./ActivePoints-B_9Jv1Nk.js";import"./Dot-CpIhdaoH.js";import"./types-2rYpOkQj.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getRadiusAndStrokeWidthFromDot-CUlrtQzF.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./Curve-CyxMxsdR.js";import"./step-BrvgHvKB.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CRDGSrQh.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
