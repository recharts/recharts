import{e as t}from"./iframe-DvRa5dgx.js";import{R as s}from"./arrayEqualityCheck-Bp8MITA_.js";import{C as m}from"./ComposedChart-BwcJtZel.js";import{B as r}from"./Bar-ByrRzTR2.js";import{R as l}from"./RechartsHookInspector-BA8H9BQA.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SoldR4SX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMf934kH.js";import"./hooks-BvcgOwyj.js";import"./axisSelectors-s-qGbPsD.js";import"./zIndexSlice-DOVBAap6.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./Layer-D1P67DdH.js";import"./tooltipContext-XxmaSwiQ.js";import"./ReactUtils-CmHVY68G.js";import"./Label-Btvu6YdH.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./ZIndexLayer-DYz5TQmP.js";import"./types-B9z2jnxG.js";import"./ActiveShapeUtils-CAuhGApT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNOkSbEV.js";import"./useAnimationId-BFi3XFtV.js";import"./Trapezoid-BUi5_O3W.js";import"./Sector-BF6BfHlW.js";import"./Symbols-DZMMgp9J.js";import"./Curve-DLYOuSdb.js";import"./RegisterGraphicalItemId-CIANtz7R.js";import"./ErrorBarContext-RHRezGW4.js";import"./GraphicalItemClipPath-mIkxvXlB.js";import"./SetGraphicalItem-C9-rzWMm.js";import"./getZIndexFromUnknown-wuejp92i.js";import"./graphicalItemSelectors-BMXMKkAx.js";import"./index-B2ipCF0h.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
