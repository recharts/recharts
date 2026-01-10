import{e as t}from"./iframe-DFbc2wnk.js";import{R as s}from"./arrayEqualityCheck-DNx-7st0.js";import{C as l}from"./ComposedChart-b5llXj5F.js";import{B as r}from"./Bar-G8Up9Uce.js";import{R as m}from"./RechartsHookInspector-BArVV55G.js";import{p as c}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./PolarUtils-BDvNNmDF.js";import"./RechartsWrapper-PvLVQTSN.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./zIndexSlice-DhoG6ae-.js";import"./CartesianChart-DAIV8Ndc.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./Layer-qN8dyvlM.js";import"./tooltipContext-BfWSfKm-.js";import"./ReactUtils-BJsLkXPe.js";import"./Label-CS9yD1bY.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./ZIndexLayer-DxPlI_9c.js";import"./types-CdWStgLs.js";import"./ActiveShapeUtils-BSQcxVua.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-tz9WvN-g.js";import"./useAnimationId-B9C_B4hh.js";import"./Trapezoid-CRho5hrx.js";import"./Sector-BE1YiTfv.js";import"./Symbols--iTzKkzh.js";import"./Curve-CTbZZW_i.js";import"./RegisterGraphicalItemId-BFMXufyl.js";import"./ErrorBarContext-DSr7txyg.js";import"./GraphicalItemClipPath-Dc38YvNS.js";import"./SetGraphicalItem-DlUa5gp3.js";import"./getZIndexFromUnknown-BMOGUI9H.js";import"./graphicalItemSelectors-BIbkXNjh.js";import"./index-DEbDUIbN.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
