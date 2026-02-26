import{e as t}from"./iframe-Cff4EXi3.js";import{R as s}from"./arrayEqualityCheck-VW91KjqU.js";import{C as m}from"./ComposedChart-B12oAa8n.js";import{B as e}from"./Bar-Wd0XKC_V.js";import{R as l}from"./RechartsHookInspector-qCKXCEwx.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-pLSVnyPY.js";import"./immer-Cixy3ajB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMPfsW98.js";import"./index-B-6vBbA8.js";import"./hooks-DQBeyb0n.js";import"./axisSelectors-D22FLxk-.js";import"./d3-scale-DMGDf7_x.js";import"./zIndexSlice-C-izguCE.js";import"./renderedTicksSlice-B92sUlvw.js";import"./CartesianChart-B_TDMZX3.js";import"./chartDataContext-OdHOh49w.js";import"./CategoricalChart-CTT0iB0s.js";import"./Layer-D22mEoCB.js";import"./tooltipContext-BWdtFUR0.js";import"./ReactUtils-BhGfO_gM.js";import"./Label-KYKyDNcr.js";import"./Text-DvkJV6Cf.js";import"./DOMUtils-CF14m3lA.js";import"./ZIndexLayer-UZz4JYvU.js";import"./types-CtvHHRW4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BY5228yv.js";import"./isPlainObject-BUXLJ9Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BITjWgSa.js";import"./useAnimationId-CJEIt2ET.js";import"./Trapezoid-BMmW3PWG.js";import"./Sector-BomCciMR.js";import"./Symbols-i7pcWr_t.js";import"./symbol-7J1n19-D.js";import"./step-YwxG2wvl.js";import"./Curve-1dMXeL2S.js";import"./RegisterGraphicalItemId-CvWcZdp6.js";import"./ErrorBarContext-BXEok-II.js";import"./GraphicalItemClipPath-MuxXQAh9.js";import"./SetGraphicalItem-CGKCADpx.js";import"./getZIndexFromUnknown-D4u0nCln.js";import"./graphicalItemSelectors-B6viA6C5.js";import"./index-lBMzeJSk.js";import"./ChartSizeDimensions-Bz5WY-XJ.js";import"./OffsetShower-C9tHURwR.js";import"./PlotAreaShower-iGisZace.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
