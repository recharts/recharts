import{R as t}from"./iframe-B87OnEHe.js";import{R as s}from"./zIndexSlice-CayLxsD5.js";import{C as m}from"./ComposedChart-CPmtdHf0.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-5lkvLcEM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./RechartsWrapper-C4kU4M5n.js";import"./axisSelectors-DZJywaTf.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./Layer-B5mZFZkh.js";import"./LabelList-DteE4Y6d.js";import"./Label-CCuY2Era.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./dataEntryStyles-B54Iq7xi.js";import"./types-CvQS_eYG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-XssNjNyZ.js";import"./useAnimationId-DHS0idNw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KYdt019M.js";import"./tooltipContext-UIwdYet0.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./ErrorBarContext-DgiLcLgY.js";import"./activeStyles-gtCHrDIH.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getZIndexFromUnknown-CoN1Aw3R.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./omit-Dn3mPKBL.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},ot=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,ot as __namedExportsOrder,it as default};
