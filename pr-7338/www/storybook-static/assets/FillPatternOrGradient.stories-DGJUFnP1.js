import{e as t}from"./iframe-DWlBD4sR.js";import{g as s}from"./arrayEqualityCheck-CNEGbaey.js";import{C as m}from"./ComposedChart-BAyx4O2z.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-gNH6kzEo.js";import{R as c}from"./RechartsHookInspector-BbwGamUB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNcUKtS8.js";import"./immer-DA_Y9NxP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-qpXHOlBt.js";import"./index-CG7DpBSc.js";import"./hooks-OMlNr05X.js";import"./axisSelectors-CpE3e6Wf.js";import"./d3-scale-M7VTsA4f.js";import"./zIndexSlice-D96LA4yw.js";import"./renderedTicksSlice-ClpTcocu.js";import"./CartesianChart-C5Nu26yg.js";import"./chartDataContext-tYXX0vXe.js";import"./CategoricalChart-DhnxgrNh.js";import"./Layer-CBKkaEhK.js";import"./tooltipContext-DkmKbkUG.js";import"./ReactUtils-Bv-62o8T.js";import"./Label-B7fwnDQB.js";import"./Text-DHQSj0lc.js";import"./DOMUtils-LgZ0OFlh.js";import"./ZIndexLayer-CcFVuy64.js";import"./types-DufW0EQG.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DFxf-U2C.js";import"./isPlainObject-Cg4BwvD8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-q1bxg6yb.js";import"./useAnimationId-DeTKnBQG.js";import"./Trapezoid-DYkluK8E.js";import"./Sector-DrZ87OSF.js";import"./Symbols-DVgdh6wF.js";import"./symbol-CoAVQGVr.js";import"./step-DBWpQbX9.js";import"./Curve-DtQybK0o.js";import"./RegisterGraphicalItemId-D8G2PQ9m.js";import"./ErrorBarContext-PluNcskT.js";import"./GraphicalItemClipPath-fLehOmj-.js";import"./SetGraphicalItem-CmDlGunV.js";import"./getZIndexFromUnknown-JQW3vpqd.js";import"./graphicalItemSelectors-4Z2vAgt9.js";import"./index-DfML4_6p.js";import"./ChartSizeDimensions-hqEEbS1-.js";import"./OffsetShower-DyOzfQGn.js";import"./PlotAreaShower-9P4lyNiw.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
