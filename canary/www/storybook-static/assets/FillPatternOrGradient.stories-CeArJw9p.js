import{e as t}from"./iframe-DY46aw1T.js";import{R as s}from"./arrayEqualityCheck-0_K9klWl.js";import{C as m}from"./ComposedChart-xNspB-SJ.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-D4Fhzfxu.js";import{R as c}from"./RechartsHookInspector-DkRCe0AE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./immer-BvCcuZ6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSeg5AQz.js";import"./index-D_nfX1S8.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./zIndexSlice-CoVcCSuo.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./Layer-hFhQiM_L.js";import"./tooltipContext-DBoXDcOk.js";import"./ReactUtils-Cz-9gufx.js";import"./Label-BXRSGziE.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./types-Dtzv1a1O.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C_pX6xWx.js";import"./isPlainObject-zUPa-N8J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEP5-Dm7.js";import"./useAnimationId-Zdg7gWN0.js";import"./Trapezoid-vSPDkj38.js";import"./Sector-BAsKK7Vz.js";import"./Symbols-CVBOcrIt.js";import"./symbol-CEFOgOTV.js";import"./step-CyrTl9M_.js";import"./Curve-DQutT_ql.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./ErrorBarContext-BdBDnSnf.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./getZIndexFromUnknown-CfrDC0TC.js";import"./graphicalItemSelectors-l57etwjZ.js";import"./index-Bfh64D8_.js";import"./ChartSizeDimensions-Cyi7sjqL.js";import"./OffsetShower-Ci2ghI7q.js";import"./PlotAreaShower-DdXIA49x.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
