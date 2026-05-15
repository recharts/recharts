import{e as t}from"./iframe-CFLjOTm5.js";import{g as s}from"./arrayEqualityCheck-ChmsrC0B.js";import{C as m}from"./ComposedChart-FER9Vi0e.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-BdMUviFN.js";import{R as c}from"./RechartsHookInspector-BDSD1XTs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./immer-e_Tfrumf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./zIndexSlice-Cx77az4x.js";import"./renderedTicksSlice-odoaHiua.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./Layer-CWq3y3ul.js";import"./tooltipContext-DQRc-e97.js";import"./ReactUtils-DhONHYWu.js";import"./Label-BSOdMnMn.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./ZIndexLayer-D7dGD0_V.js";import"./types-CgNdS23P.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DrwY_Mc1.js";import"./isPlainObject-CzNO0PsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwfIT2qv.js";import"./useAnimationId-DK1cyyuV.js";import"./Trapezoid-B5Lh4oRr.js";import"./Sector-DsUts6aH.js";import"./Symbols-CkgCxPkV.js";import"./symbol-BeYyKtHZ.js";import"./step-BuRaAczm.js";import"./Curve-BhvAwYBS.js";import"./RegisterGraphicalItemId-E3PAioKC.js";import"./ErrorBarContext--tEIgjZN.js";import"./GraphicalItemClipPath-Diu1h3xz.js";import"./SetGraphicalItem-Tg4ql8Pw.js";import"./getZIndexFromUnknown-CAlG6STk.js";import"./graphicalItemSelectors-D5sFVyPf.js";import"./index-xA73MIG_.js";import"./ChartSizeDimensions-DagJBs5z.js";import"./OffsetShower-CbRTjXXF.js";import"./PlotAreaShower-Bz-8aerp.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
