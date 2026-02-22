import{e as t}from"./iframe-CqeTTYgU.js";import{R as s}from"./arrayEqualityCheck-Coc3X9xQ.js";import{C as m}from"./ComposedChart-BOROE11D.js";import{B as e}from"./Bar-DiL9CI-U.js";import{R as l}from"./RechartsHookInspector-DuqrKYC7.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cwp1jNVd.js";import"./immer-Bmaq1-Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6Akcaf8.js";import"./index-BO_IR7-E.js";import"./hooks-BVZwqIsr.js";import"./axisSelectors-eZrQ8WsS.js";import"./d3-scale-BUPtB_Da.js";import"./zIndexSlice-B88Xz9xU.js";import"./renderedTicksSlice-8ohVO2kh.js";import"./CartesianChart-DZdtJPpm.js";import"./chartDataContext-Ldzwvxi_.js";import"./CategoricalChart-BJzA0W2C.js";import"./Layer-BQFYDPNU.js";import"./tooltipContext-BI-Mou3E.js";import"./ReactUtils-B-FxzwwC.js";import"./Label-CPRQ4lU_.js";import"./Text-CnAhi5dg.js";import"./DOMUtils-CyUZ16Kt.js";import"./ZIndexLayer-3q_nDWL4.js";import"./types-Bq8qb-jz.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DuOrrb61.js";import"./isPlainObject-D0uwI2wh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ns2TMUOg.js";import"./useAnimationId-qdD0Hx_g.js";import"./Trapezoid-CAvqiTd0.js";import"./Sector-DAbvgQ-I.js";import"./Symbols-CZaCanOC.js";import"./symbol-DUDKRTy9.js";import"./step-D7PdYBbD.js";import"./Curve-BysHPIUF.js";import"./RegisterGraphicalItemId-BIO7eBqw.js";import"./ErrorBarContext-CkyHavp9.js";import"./GraphicalItemClipPath-CG5McJvS.js";import"./SetGraphicalItem--tjWfp6d.js";import"./getZIndexFromUnknown-RmAn_9Ya.js";import"./graphicalItemSelectors-gmzbomB-.js";import"./index-B3OxvjqV.js";import"./ChartSizeDimensions-VEbBqbyV.js";import"./OffsetShower-DVBsz6mw.js";import"./PlotAreaShower-DAW7_xjH.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
