import{e as t}from"./iframe-CFR-gaGN.js";import{R as s}from"./arrayEqualityCheck-B4mATf9c.js";import{C as m}from"./ComposedChart-D9gmYwEq.js";import{B as e}from"./Bar-BQbMJIhN.js";import{R as l}from"./RechartsHookInspector-DAIAGGPn.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DjGpqQPT.js";import"./immer-Bk-xXHBC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeWitytO.js";import"./index-CSJLk245.js";import"./hooks-JwuHHdAq.js";import"./axisSelectors-D5HRTRW9.js";import"./d3-scale-BgOEq5Xh.js";import"./zIndexSlice-Boi-P9QX.js";import"./renderedTicksSlice-Br16TDM7.js";import"./CartesianChart-ueo_-gP0.js";import"./chartDataContext-BElgqktZ.js";import"./CategoricalChart-BnFLIcrr.js";import"./Layer-BHVJ1AiA.js";import"./tooltipContext-6um_7vyP.js";import"./ReactUtils-C9SxeRDL.js";import"./Label-DP_LAI-Y.js";import"./Text-mFmQrBQg.js";import"./DOMUtils-yKB-qwZ7.js";import"./ZIndexLayer-C3JqUkkH.js";import"./types-DncqRVvk.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DrwV2_Fx.js";import"./isPlainObject-D5r1oj15.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1LUHF-ab.js";import"./useAnimationId-VCCfkRDK.js";import"./Trapezoid-C6_wzf5N.js";import"./Sector-DhcqTi-n.js";import"./Symbols-tvatlAm7.js";import"./symbol-DyWKZjmK.js";import"./step-BuQilum9.js";import"./Curve-xncZGYH6.js";import"./RegisterGraphicalItemId-BEFkKq7O.js";import"./ErrorBarContext-GzoTlhrP.js";import"./GraphicalItemClipPath-Plh3ZetI.js";import"./SetGraphicalItem-DT4VFHn2.js";import"./getZIndexFromUnknown-DySrk910.js";import"./graphicalItemSelectors-BFOBHAua.js";import"./index-BlXLNwUK.js";import"./ChartSizeDimensions-D3nOZoYf.js";import"./OffsetShower-CvuXOJnC.js";import"./PlotAreaShower-BMOctqSh.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
