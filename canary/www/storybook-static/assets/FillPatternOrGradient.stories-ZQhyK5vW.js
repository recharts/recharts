import{e as t}from"./iframe-HCWlV7eT.js";import{g as s}from"./arrayEqualityCheck-Cf1iFAtr.js";import{C as m}from"./ComposedChart-nAk3IKvH.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-CWbvk1iQ.js";import{R as c}from"./RechartsHookInspector-DiUR5-Rd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKTz6CIA.js";import"./immer-CyT7MAhj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3_OF8yL.js";import"./index-CG6p6UQd.js";import"./hooks-Bu1aMOxG.js";import"./axisSelectors-kc4WL651.js";import"./d3-scale-DGA5oTTZ.js";import"./zIndexSlice-BUPMHSoM.js";import"./renderedTicksSlice-DNGVWtDy.js";import"./CartesianChart-CIcvcNyp.js";import"./chartDataContext-C29Qu4zj.js";import"./CategoricalChart-DsLokalm.js";import"./Layer-BieoRt7-.js";import"./tooltipContext-DIK5pHUy.js";import"./ReactUtils-C2TKIy08.js";import"./Label-Cz3tNLpR.js";import"./Text-Sb1Xn8CY.js";import"./DOMUtils-Bqm3Lq_z.js";import"./ZIndexLayer-DYTZmJpE.js";import"./types-BVJNSeSn.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DMoSdW99.js";import"./isPlainObject-DzHCCxCs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsPKVDyM.js";import"./useAnimationId-BbyheOhI.js";import"./Trapezoid-CtygYOR4.js";import"./Sector-BWvy9RzL.js";import"./Symbols-Eaix-2lc.js";import"./symbol-DfBAaUU7.js";import"./step-BzEMV51B.js";import"./Curve-B-66MxCQ.js";import"./RegisterGraphicalItemId-S6JUBuqk.js";import"./ErrorBarContext-D9407eJA.js";import"./GraphicalItemClipPath-BdouDh12.js";import"./SetGraphicalItem-C9MUiNjo.js";import"./getZIndexFromUnknown-CWn5s7WI.js";import"./graphicalItemSelectors-BNNBGRzE.js";import"./index-BHZHrA64.js";import"./ChartSizeDimensions-DdWY1IL4.js";import"./OffsetShower-XZyi8iCL.js";import"./PlotAreaShower-KC6xEH0b.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
