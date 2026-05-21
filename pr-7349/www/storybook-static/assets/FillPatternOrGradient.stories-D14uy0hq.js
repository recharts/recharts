import{e as t}from"./iframe-D2xkh5VA.js";import{g as s}from"./arrayEqualityCheck-BcvopYI_.js";import{C as m}from"./ComposedChart-oF9YiWjC.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-HhFMTZQv.js";import{R as c}from"./RechartsHookInspector-BNLXTPTn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./immer-CX6PUSO2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./d3-scale-CrDd0VeH.js";import"./zIndexSlice-BbkJeUOK.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./Layer-DhOsa-t6.js";import"./tooltipContext-CmECDRNO.js";import"./ReactUtils-Bwb7QYmO.js";import"./Label-DeRbtMqy.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./ZIndexLayer-C7En4AyY.js";import"./types-CxiHHYTB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFymuHuj.js";import"./useAnimationId-DiNRYHAi.js";import"./ActiveShapeUtils-B5QqFS4A.js";import"./isPlainObject-BMKBAZsK.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-D_8matpL.js";import"./ErrorBarContext-CJXaSsld.js";import"./GraphicalItemClipPath-DFyECcqW.js";import"./SetGraphicalItem-DpgyXd2u.js";import"./getZIndexFromUnknown-DE3_c6Ln.js";import"./graphicalItemSelectors-BesszVB6.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ot=["Fill"];export{e as Fill,ot as __namedExportsOrder,it as default};
