import{e as t}from"./iframe-eSAJEZht.js";import{R as s}from"./arrayEqualityCheck-DIP4cf6Y.js";import{C as m}from"./ComposedChart-C-MvXfhH.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-DiPSM-V2.js";import{R as c}from"./RechartsHookInspector-CNBbry69.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhREbLw9.js";import"./immer-TNEPjPCB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./Layer-Cp_zb8Y2.js";import"./tooltipContext-CBEOTzBv.js";import"./ReactUtils-H-FoJgDc.js";import"./Label-C16feiqK.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./ZIndexLayer-D46bbrBq.js";import"./types-BwWrJ-BL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dy2Nr1AF.js";import"./isPlainObject-YNZwY72g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvSVsybX.js";import"./useAnimationId-Cu-vgNv6.js";import"./Trapezoid-CdRLetkI.js";import"./Sector-DkuyB5qD.js";import"./Symbols-DdU7u5vI.js";import"./symbol-56g7D4zb.js";import"./step-n_okOr0Q.js";import"./Curve-dniblYNk.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./ErrorBarContext-BMrhnYpV.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./getZIndexFromUnknown-DvFuFSqO.js";import"./graphicalItemSelectors-CtTHxHbt.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
