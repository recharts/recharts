import{e as t}from"./iframe-Y_Pa4XUD.js";import{R as s}from"./arrayEqualityCheck-ufqgmavw.js";import{C as m}from"./ComposedChart-DNNSx7vR.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CzEUnejF.js";import{R as c}from"./RechartsHookInspector-CoUZ_IKN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_hVYzQT.js";import"./immer-fIOXVJOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8CMlo1v.js";import"./index-BJNVUtSj.js";import"./hooks-CIr5CD4S.js";import"./axisSelectors-BmerCj2n.js";import"./d3-scale-ByVEmPR9.js";import"./zIndexSlice-CTCYCdxd.js";import"./renderedTicksSlice-CQWIZJ1K.js";import"./CartesianChart-Ds9j1WCi.js";import"./chartDataContext-DAoPlUXM.js";import"./CategoricalChart-C8vuTQEv.js";import"./Layer-Cvh40WqM.js";import"./tooltipContext-BbTMHj5q.js";import"./ReactUtils-BE45q0BU.js";import"./Label-DoWUrSWO.js";import"./Text-mkkNE3Pk.js";import"./DOMUtils-DN2B9zoo.js";import"./ZIndexLayer-DHPXYj4K.js";import"./types-CFzlQQ1s.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DigOcqgk.js";import"./isPlainObject-CqaZa_wl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWx4TmVI.js";import"./useAnimationId-LxxsO2il.js";import"./Trapezoid-DRFbXSGQ.js";import"./Sector-NCqbNZMf.js";import"./Symbols-CsuZ3_sL.js";import"./symbol-DrAbyEPw.js";import"./step-B3cL9I-q.js";import"./Curve-BrfIxnDD.js";import"./RegisterGraphicalItemId-BIRSR7Jx.js";import"./ErrorBarContext-Cb6v3AYw.js";import"./GraphicalItemClipPath-DMPCiQHF.js";import"./SetGraphicalItem-CCipA_FV.js";import"./getZIndexFromUnknown-BQHFDhPr.js";import"./graphicalItemSelectors-uuoEO_SJ.js";import"./index-CPjVtjVX.js";import"./ChartSizeDimensions-Bp_T5Mu5.js";import"./OffsetShower-Bd96igZ1.js";import"./PlotAreaShower-DzHDy2_i.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
