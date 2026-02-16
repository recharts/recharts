import{e as t}from"./iframe-Ch6AeBvd.js";import{R as s}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as m}from"./ComposedChart-CZ_B4iUN.js";import{B as r}from"./Bar-nlGAf4mV.js";import{R as l}from"./RechartsHookInspector-B8QYXaP3.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrY4pfOn.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./zIndexSlice-iERq52j6.js";import"./renderedTicksSlice-m0x3riPF.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./Layer-4QzHj9sV.js";import"./tooltipContext-DgLUObry.js";import"./ReactUtils-DkszlIgF.js";import"./Label-BhgECJNB.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./types-Do_qsLRQ.js";import"./ActiveShapeUtils-bE4blCx8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IGKhP2jD.js";import"./useAnimationId-YtLKjIEe.js";import"./Trapezoid-r21rfNHm.js";import"./Sector-nTDBGNXx.js";import"./Symbols-WE9lD8Kq.js";import"./Curve-Bln8u_qs.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./ErrorBarContext-mxMpkgJh.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./getZIndexFromUnknown-CxHu1T5X.js";import"./graphicalItemSelectors-CqQUOiKD.js";import"./index-Bzb6Yeqp.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
