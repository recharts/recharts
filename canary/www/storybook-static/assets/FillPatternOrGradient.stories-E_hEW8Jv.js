import{e as t}from"./iframe-DU58YqXX.js";import{R as s}from"./arrayEqualityCheck-CPm_ZzNM.js";import{C as m}from"./ComposedChart-CTPFUUjo.js";import{B as e}from"./Bar-CPoXQg8g.js";import{R as l}from"./RechartsHookInspector-bU2QYxIO.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvRsDILo.js";import"./immer-CCty7oPO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCRQCspP.js";import"./index-CAIf49bT.js";import"./hooks-BmHTCWu2.js";import"./axisSelectors-C_NSCJzf.js";import"./d3-scale-D66UOGri.js";import"./zIndexSlice-D06B5CMj.js";import"./renderedTicksSlice-C5yXBQp1.js";import"./CartesianChart-2UpvhmGK.js";import"./chartDataContext-C5MRHpth.js";import"./CategoricalChart-CnCv7GAg.js";import"./Layer-D-R-VvL4.js";import"./tooltipContext-DbSMOeuq.js";import"./ReactUtils-qI72OB32.js";import"./Label-1-xmv-OU.js";import"./Text-BeOHNxA6.js";import"./DOMUtils--vhf8olX.js";import"./ZIndexLayer-DrZECD3r.js";import"./types-BRRO6f_Y.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CmjzNmwX.js";import"./isPlainObject-CFpSvqCv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiaAAf2E.js";import"./useAnimationId-hGktevsz.js";import"./Trapezoid-BQne9xH8.js";import"./Sector-NGcPnez7.js";import"./Symbols-CeuFr1Zm.js";import"./symbol-B759Rj27.js";import"./step-DaNDWZj1.js";import"./Curve-CdKz9IVe.js";import"./RegisterGraphicalItemId-BSQp396K.js";import"./ErrorBarContext-CYZNadIi.js";import"./GraphicalItemClipPath-D9N1r5H3.js";import"./SetGraphicalItem-XqVw1NHm.js";import"./getZIndexFromUnknown-DVDuXtIT.js";import"./graphicalItemSelectors-BQ1ZcZO0.js";import"./index-D73aQCF4.js";import"./ChartSizeDimensions-DA9JA8Lt.js";import"./OffsetShower-OVwVH-bI.js";import"./PlotAreaShower-Yynvk9Up.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
