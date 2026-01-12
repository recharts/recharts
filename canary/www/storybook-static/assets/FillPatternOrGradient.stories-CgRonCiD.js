import{e as t}from"./iframe-B8wZLo82.js";import{R as s}from"./arrayEqualityCheck-mQHvFPpg.js";import{C as l}from"./ComposedChart-BcqGzy_j.js";import{B as r}from"./Bar-DZSjuuu2.js";import{R as m}from"./RechartsHookInspector-GmoDPQRs.js";import{p as c}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhFJ0Eqh.js";import"./PolarUtils-DHvcKc2n.js";import"./RechartsWrapper-CBigNIyW.js";import"./hooks-BiJhptmv.js";import"./axisSelectors-Bv-IDWqv.js";import"./zIndexSlice-vxKp5epo.js";import"./CartesianChart-o83YROHa.js";import"./chartDataContext-Cx3FiXmZ.js";import"./CategoricalChart-DfnOGKPM.js";import"./Layer-BJUTpLkJ.js";import"./tooltipContext-CuTQZya9.js";import"./ReactUtils-Dj7f4Iqr.js";import"./Label-DvY0zh6c.js";import"./Text-B5lfNvYb.js";import"./DOMUtils-Caps1FVU.js";import"./ZIndexLayer-DdiLICHA.js";import"./types-DiGBS5_O.js";import"./ActiveShapeUtils-CpZCSmIN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg6726WX.js";import"./useAnimationId-Dy4qDS51.js";import"./Trapezoid-Zj_KtUDG.js";import"./Sector-B3KOtxMp.js";import"./Symbols-CZWpR43S.js";import"./Curve-CMsBNtPf.js";import"./RegisterGraphicalItemId-CCpmn4R2.js";import"./ErrorBarContext-D12Q2uZb.js";import"./GraphicalItemClipPath-BYlHtFhX.js";import"./SetGraphicalItem-CNzy8eWj.js";import"./getZIndexFromUnknown-CRBaJxD-.js";import"./graphicalItemSelectors-DZbwE9ZQ.js";import"./index-DUOpxgLn.js";import"./ChartSizeDimensions-QOi8XTXN.js";import"./OffsetShower-DE0ZkW5V.js";import"./PlotAreaShower-ZBvPTwOe.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
