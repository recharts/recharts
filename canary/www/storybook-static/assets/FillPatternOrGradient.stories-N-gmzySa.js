import{e as t}from"./iframe-D83ZSNbz.js";import{R as s}from"./arrayEqualityCheck-BGA4RwPN.js";import{C as m}from"./ComposedChart-B5Ky6_S3.js";import{B as e}from"./Bar-B6lDsnLA.js";import{R as l}from"./RechartsHookInspector-BWsm2Zwo.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./immer-CVep4-EU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6kLXfAE0.js";import"./index-8b00PKjq.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./zIndexSlice-z-sDwpjP.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./Layer-CzMDOsc5.js";import"./tooltipContext-DO06d1Q0.js";import"./ReactUtils-Dwz5eB4M.js";import"./Label-CPoQ7ALx.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./ZIndexLayer-BlsfoIRs.js";import"./types-CQ4rEtgJ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C7T_TsZu.js";import"./isPlainObject-CP5WOR_K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcHYsitW.js";import"./useAnimationId-DC1LkXPL.js";import"./Trapezoid-DcZW9PM6.js";import"./Sector-BNG-UwhR.js";import"./Symbols-BiJ-DNBY.js";import"./symbol-S6sIvH4b.js";import"./step-DnRHTEfS.js";import"./Curve-VgEiMVDm.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./ErrorBarContext-DI1C1qO8.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./getZIndexFromUnknown-uQaIatUX.js";import"./graphicalItemSelectors-CeivcGR-.js";import"./index-CSluNsr9.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
