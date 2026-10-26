import{R as t}from"./iframe-CatpbanJ.js";import{R as p}from"./zIndexSlice-BMWzHmEu.js";import{C as m}from"./ComposedChart-KfrZJSX3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DL_QK99R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BADc_Fld.js";import"./throttle-CW9K2jjI.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./RechartsWrapper-DLFC9k-P.js";import"./axisSelectors-ByEpyZG7.js";import"./polarAxisSelectors-BGfelowG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWpKPZRY.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./Layer-ElswMSOx.js";import"./activeStyles-RllIEBru.js";import"./Label-CA5ryIJW.js";import"./Text-CG59Fli3.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./dataEntryStyles-DxsZOfoL.js";import"./useAnimationId-BwwRxKkz.js";import"./ActivePoints-Neb4G9yW.js";import"./Dot-CO3qiad8.js";import"./types-BWsJ_4qp.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getRadiusAndStrokeWidthFromDot-CAu9psjm.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./Curve-CPjpKaHf.js";import"./step-uDZ4fNKk.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-YwyUQgbT.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
