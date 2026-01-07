import{e as t}from"./iframe-BlTD-rim.js";import{R as p}from"./arrayEqualityCheck-rFMbtr9X.js";import{C as m}from"./ComposedChart-rwI72tz9.js";import{A as r}from"./Area-CG2HUbW2.js";import{R as s}from"./RechartsHookInspector-AxC62fMg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./PolarUtils-uT4ExAHg.js";import"./RechartsWrapper-BRiCuj44.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./zIndexSlice-Ir6gglyl.js";import"./CartesianChart-CytP6aLk.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./Curve-BUANm7-q.js";import"./types-DTlxByIq.js";import"./Layer-COV8jJuI.js";import"./ReactUtils-cgJBm0o5.js";import"./Label-DeeiiEOU.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./ActivePoints-CPWPbj6O.js";import"./Dot-C6jOffNH.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./GraphicalItemClipPath-D9Dgqofo.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./useAnimationId-Cp6XJ64u.js";import"./getRadiusAndStrokeWidthFromDot-ByE9rINe.js";import"./graphicalItemSelectors-CzrM9QyT.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./OffsetShower-BJ7VFhTL.js";import"./PlotAreaShower-DLdCBikg.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
