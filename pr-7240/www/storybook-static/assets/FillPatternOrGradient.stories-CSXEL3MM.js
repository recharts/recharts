import{e as t}from"./iframe-BeDGORj6.js";import{R as s}from"./arrayEqualityCheck-JsAXyDLr.js";import{C as m}from"./ComposedChart-4gGlBLIt.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-e9_WTVyt.js";import{R as c}from"./RechartsHookInspector-CMV-TCMh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C99f34Mc.js";import"./immer-Cq48D3GD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzXrp2Yg.js";import"./index-Cjcxel70.js";import"./hooks-CZlzwV4c.js";import"./axisSelectors-BWLPVm14.js";import"./d3-scale-Dn9C_p1J.js";import"./zIndexSlice-f8r1nxA3.js";import"./renderedTicksSlice-sW53jx3E.js";import"./CartesianChart-B5AKLLNj.js";import"./chartDataContext-kI4vfNyg.js";import"./CategoricalChart-BaIwFCUZ.js";import"./Layer-Cb63g7eE.js";import"./tooltipContext-D6G9a4bo.js";import"./ReactUtils-8jcv2sZp.js";import"./Label-DIDBGhSu.js";import"./Text-DVPNdnrr.js";import"./DOMUtils-BJyHcXDT.js";import"./ZIndexLayer-CzXr4GKG.js";import"./types-C_8vdBSO.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CKh9-uWL.js";import"./isPlainObject-CPwWoDLp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmD5nffX.js";import"./useAnimationId-Dpd_sVLz.js";import"./Trapezoid-C6mcZG1p.js";import"./Sector-CvLn_4ix.js";import"./Symbols-BtXiAqa0.js";import"./symbol-Dz8LJwUL.js";import"./step-CdMW3WL_.js";import"./Curve-Cn7Yw6fj.js";import"./RegisterGraphicalItemId-Be6P2E9J.js";import"./ErrorBarContext-BP-aXdJD.js";import"./GraphicalItemClipPath-DuAL_izP.js";import"./SetGraphicalItem-CByUuzu8.js";import"./getZIndexFromUnknown-DaofpVY5.js";import"./graphicalItemSelectors-CS5KZb2K.js";import"./index-qx6-V41S.js";import"./ChartSizeDimensions-W3vYP0Xa.js";import"./OffsetShower-SgjYM82s.js";import"./PlotAreaShower-k5ztxQce.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
