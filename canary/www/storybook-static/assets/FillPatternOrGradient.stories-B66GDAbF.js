import{e as t}from"./iframe-DrGUwCNH.js";import{R as s}from"./arrayEqualityCheck-B-thuthJ.js";import{C as m}from"./ComposedChart-BhneGLLj.js";import{B as e}from"./Bar-DFHinX5t.js";import{R as l}from"./RechartsHookInspector-DVkoldVn.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./immer-BtgqId3I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5QstiPk.js";import"./index-BPQwAQcQ.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./d3-scale-ByzzBKwW.js";import"./zIndexSlice-C-eL6wuf.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./Layer-DOWBbL5h.js";import"./tooltipContext-DrtKfZE5.js";import"./ReactUtils-C94_zE_J.js";import"./Label-B7C6-KkD.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./ZIndexLayer-CBw-SdHg.js";import"./types-P3EO869A.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-xJQks6Bh.js";import"./isPlainObject-Bv08dW3C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DeFl-4jd.js";import"./useAnimationId-CM7jQqD0.js";import"./Trapezoid-BR-nBhBU.js";import"./Sector-2SvHHXh3.js";import"./Symbols-DUBAqkb2.js";import"./symbol-Bc0Cydwk.js";import"./step-DKLDrfb1.js";import"./Curve-ywtP4oOQ.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./ErrorBarContext-Bia10oLS.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./getZIndexFromUnknown-kZY2cf95.js";import"./graphicalItemSelectors-DdKGU9xu.js";import"./index-3x6YcQkr.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./OffsetShower-7BYMSgLY.js";import"./PlotAreaShower-BXy-ESLg.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
