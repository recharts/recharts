import{e as t}from"./iframe-E-WC41kJ.js";import{R as s}from"./arrayEqualityCheck-BqUzcRut.js";import{C as m}from"./ComposedChart-Cj1Yh8a_.js";import{B as e}from"./Bar-DDeSzWfw.js";import{R as l}from"./RechartsHookInspector-DKk-8ET5.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZw5DbVo.js";import"./immer-B2AHHn8G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIczAnOb.js";import"./index-DZtbJ9Ut.js";import"./hooks-DQ5ZrLCC.js";import"./axisSelectors-BVUql3J4.js";import"./d3-scale-CSKw2yvo.js";import"./zIndexSlice-DkBOVcrD.js";import"./renderedTicksSlice-BqXsAF6I.js";import"./CartesianChart-B56zTdxs.js";import"./chartDataContext-CK93mzcE.js";import"./CategoricalChart-aHZNXhsF.js";import"./Layer-DOBdv7Ak.js";import"./tooltipContext-DWBl8IuC.js";import"./ReactUtils-BHUem0rc.js";import"./Label-C5w0zLuo.js";import"./Text-DTbX-dn1.js";import"./DOMUtils-CpAJnaA6.js";import"./ZIndexLayer-DVYJjRDY.js";import"./types-CSLfd7k_.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DBHiiMuo.js";import"./isPlainObject-CY-G0_BP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bf3uqJQh.js";import"./useAnimationId-Kk3oGpCX.js";import"./Trapezoid-B6nQFknd.js";import"./Sector-BB0wVMAH.js";import"./Symbols-B0YB4VCR.js";import"./symbol-BSUu54iG.js";import"./step-DU5CJrCT.js";import"./Curve-DYFm9WRY.js";import"./RegisterGraphicalItemId-D0Yd-4hn.js";import"./ErrorBarContext-he9UG2nL.js";import"./GraphicalItemClipPath-CjeMVbHl.js";import"./SetGraphicalItem-FieAjGNP.js";import"./getZIndexFromUnknown-CJp06f3Q.js";import"./graphicalItemSelectors-nDm2w2MC.js";import"./index-DcwfkASu.js";import"./ChartSizeDimensions-myNJ6iDJ.js";import"./OffsetShower-h4QuBQIC.js";import"./PlotAreaShower-ByNkN2fY.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
