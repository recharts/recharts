import{e as t}from"./iframe-CIxNp6W3.js";import{R as s}from"./arrayEqualityCheck-ZcVH4_uJ.js";import{C as m}from"./ComposedChart-Ch4nojgt.js";import{B as e}from"./Bar-BcfvpKem.js";import{R as l}from"./RechartsHookInspector-B8l4NQFC.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cf5_CJke.js";import"./immer-CkfrG0rl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnQHtrMt.js";import"./index-Cib5zjST.js";import"./hooks-BNI7_4lT.js";import"./axisSelectors-BeBP2I3U.js";import"./d3-scale-BQ18Pqvj.js";import"./zIndexSlice-BEW6pf_v.js";import"./renderedTicksSlice-CbtbEbDH.js";import"./CartesianChart-CaQ1UeLW.js";import"./chartDataContext-DEZM9FrZ.js";import"./CategoricalChart-FVnBP1Tu.js";import"./Layer-Bp29xhoh.js";import"./tooltipContext-BltSJ5jf.js";import"./ReactUtils-CD81hbcy.js";import"./Label-DM_zt9zM.js";import"./Text-B-dRdN-u.js";import"./DOMUtils-SOpGz0EB.js";import"./ZIndexLayer-DPYjXPVc.js";import"./types-D88TaevE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DJ7hB8mH.js";import"./isPlainObject-B_udAERF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDKHqCIu.js";import"./useAnimationId-BJAtAhRd.js";import"./Trapezoid-BynO58oQ.js";import"./Sector-NGTsm_Cr.js";import"./Symbols-CH9tQV3q.js";import"./symbol-R0iacGzj.js";import"./step-CuAsm7Fe.js";import"./Curve-CcclPR5V.js";import"./RegisterGraphicalItemId-B3XRN-uf.js";import"./ErrorBarContext-Dko46g4M.js";import"./GraphicalItemClipPath-DxCJ5NSr.js";import"./SetGraphicalItem-CExaHKdU.js";import"./getZIndexFromUnknown-C4OsV5_f.js";import"./graphicalItemSelectors-AVx7kv9h.js";import"./index-CEgQsKlh.js";import"./ChartSizeDimensions-CNahkAGh.js";import"./OffsetShower-CBcMXDRG.js";import"./PlotAreaShower-BJdN30iA.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
