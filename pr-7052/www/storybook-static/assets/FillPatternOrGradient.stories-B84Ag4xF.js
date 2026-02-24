import{e as t}from"./iframe-BlrnuDjf.js";import{R as s}from"./arrayEqualityCheck-BTXXQX4n.js";import{C as m}from"./ComposedChart-CXlLrCCb.js";import{B as e}from"./Bar-BFL1jp-D.js";import{R as l}from"./RechartsHookInspector-BAQjFSl6.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1DdFNclr.js";import"./immer-BI9UFPL2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./index-CKL3N-6v.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./zIndexSlice-CqZHWfc6.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./Layer-XHhRDzId.js";import"./tooltipContext-BFnVZoxN.js";import"./ReactUtils-BjQ30mBr.js";import"./Label-D_q5FUVB.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./ZIndexLayer-7Hmap2eH.js";import"./types-DB_0tejV.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dv40rWK2.js";import"./isPlainObject-BwE05GU9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXu9YO7w.js";import"./useAnimationId-DbkCLx7t.js";import"./Trapezoid-DnTBSn7u.js";import"./Sector-Dv5PvvRm.js";import"./Symbols-DUfoVivI.js";import"./symbol-C5z5ai8y.js";import"./step-oX00aiZd.js";import"./Curve-BlGAAnP8.js";import"./RegisterGraphicalItemId-Bh07AqU-.js";import"./ErrorBarContext-BsqB8Oyr.js";import"./GraphicalItemClipPath-EkcAQ3H7.js";import"./SetGraphicalItem-B1RMw4_v.js";import"./getZIndexFromUnknown-DQjkJqnN.js";import"./graphicalItemSelectors-D-FsgECM.js";import"./index-Cy5kt_9j.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
