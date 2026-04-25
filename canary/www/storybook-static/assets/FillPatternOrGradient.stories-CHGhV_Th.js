import{e as t}from"./iframe-CPCZOK1n.js";import{R as s}from"./arrayEqualityCheck-8pkbG_5i.js";import{C as m}from"./ComposedChart-BjaTFdDo.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CNlILCK8.js";import{R as c}from"./RechartsHookInspector-BtGo_ncg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-oWFt7rla.js";import"./immer-BU-gze6F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./Layer-DgSzLvrX.js";import"./tooltipContext-CwU0bArp.js";import"./ReactUtils-CSglJ9G5.js";import"./Label-CTXaFaVv.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./ZIndexLayer-PN2_dLzy.js";import"./types-tTbnguye.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BsAVSgeR.js";import"./isPlainObject-hFLIJzKO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBBYhjQV.js";import"./useAnimationId-BOEFbdDG.js";import"./Trapezoid-t3_zdwFX.js";import"./Sector-BjRPzYK4.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";import"./step-B2es0Z9s.js";import"./Curve-Bm35dzge.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./ErrorBarContext-Cm1Er5q-.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./getZIndexFromUnknown-DXow7mdb.js";import"./graphicalItemSelectors-D0v11jcu.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
