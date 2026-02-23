import{e as t}from"./iframe-CGVhrCsk.js";import{R as s}from"./arrayEqualityCheck-hWfBO-dZ.js";import{C as m}from"./ComposedChart-Cs4bNDUq.js";import{B as e}from"./Bar-CEsP4oMW.js";import{R as l}from"./RechartsHookInspector-W4SpTwNb.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwNF5fMy.js";import"./immer-ByckOGb7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgM4xUF4.js";import"./index-CEIii_b2.js";import"./hooks-mLbHXbPh.js";import"./axisSelectors-CrTWvSV9.js";import"./d3-scale-D5vl0Nsi.js";import"./zIndexSlice-DutzqnKh.js";import"./renderedTicksSlice-DmMczr5P.js";import"./CartesianChart-B1c-3hUF.js";import"./chartDataContext-DQaWG2U3.js";import"./CategoricalChart-X3-XrJiY.js";import"./Layer-DI3r5k9z.js";import"./tooltipContext-dZuY-BFu.js";import"./ReactUtils-CZtHcLE8.js";import"./Label-Ca0FMlUU.js";import"./Text-DbvmJCeH.js";import"./DOMUtils-5Zd9MXZO.js";import"./ZIndexLayer-BlFiVhV6.js";import"./types-CutyoUQf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DEu4pVNL.js";import"./isPlainObject-BSA6Caji.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL9KViSo.js";import"./useAnimationId-bFrgCHGo.js";import"./Trapezoid-C1cOue80.js";import"./Sector-8CmLtbdM.js";import"./Symbols-DsXXK2gD.js";import"./symbol-Dw_xitWX.js";import"./step-p7MifGWd.js";import"./Curve-DdraDXui.js";import"./RegisterGraphicalItemId-D2-m4nk3.js";import"./ErrorBarContext-BGDc3EIW.js";import"./GraphicalItemClipPath-D7PtxHvG.js";import"./SetGraphicalItem-BqAzYXKd.js";import"./getZIndexFromUnknown-BCBfMeyE.js";import"./graphicalItemSelectors-CBuEl457.js";import"./index-CQT87Gjl.js";import"./ChartSizeDimensions-CJ3vtll8.js";import"./OffsetShower-56TqmRW6.js";import"./PlotAreaShower-CzLMiHXt.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
