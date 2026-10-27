import{R as t}from"./iframe-B87OnEHe.js";import{R as p}from"./zIndexSlice-CayLxsD5.js";import{C as m}from"./ComposedChart-CPmtdHf0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-cVYv24Fj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./RechartsWrapper-C4kU4M5n.js";import"./axisSelectors-DZJywaTf.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./Layer-B5mZFZkh.js";import"./LabelList-DteE4Y6d.js";import"./Label-CCuY2Era.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./dataEntryStyles-B54Iq7xi.js";import"./ActivePoints-Bws5v7as.js";import"./Dot-5T458_dG.js";import"./types-CvQS_eYG.js";import"./activeStyles-gtCHrDIH.js";import"./useAnimationId-DHS0idNw.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getRadiusAndStrokeWidthFromDot-tXoAwvPO.js";import"./ActiveShapeUtils-KYdt019M.js";import"./Curve-CzFk349I.js";import"./step-Dlj9Cqyz.js";import"./useEffectiveDataKey-D32F3nXW.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
