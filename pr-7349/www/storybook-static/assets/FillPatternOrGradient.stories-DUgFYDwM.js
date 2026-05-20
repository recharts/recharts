import{e as t}from"./iframe-8-kjzB7M.js";import{g as s}from"./arrayEqualityCheck-BFH1E3k_.js";import{C as m}from"./ComposedChart-Dr0nJPxm.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-DejEor9c.js";import{R as c}from"./RechartsHookInspector-CM7h1fuc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DEBbAbU8.js";import"./immer-DyK63VIN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7ei5y6q.js";import"./index-B7HOuyLw.js";import"./hooks-D7HTiiCO.js";import"./axisSelectors-BNYuZguV.js";import"./d3-scale-CQtZ6VlM.js";import"./zIndexSlice-RoK7gDNz.js";import"./renderedTicksSlice-B1hkz5RK.js";import"./CartesianChart-DIcUCgdK.js";import"./chartDataContext-B5w2WfFE.js";import"./CategoricalChart-BSYInFMU.js";import"./Layer-CzqQGym9.js";import"./tooltipContext-DATQSPWz.js";import"./ReactUtils-CewVIgMM.js";import"./Label-DM3VCT7K.js";import"./Text-CoxxW3ZN.js";import"./DOMUtils-DlGm6rgl.js";import"./ZIndexLayer-BFtzmC6W.js";import"./types-BtLx_F1t.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9KTCJgL8.js";import"./useAnimationId-R2tEawoj.js";import"./ActiveShapeUtils-B64sWmQr.js";import"./isPlainObject-Dd1Ki_ZE.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-CmJN5Y2e.js";import"./ErrorBarContext-DcV-oeSm.js";import"./GraphicalItemClipPath-CVE49Uj3.js";import"./SetGraphicalItem-DKHyStui.js";import"./getZIndexFromUnknown-D3BpjNV2.js";import"./graphicalItemSelectors-BwmNh9RH.js";import"./index-DmSQVuHS.js";import"./ChartSizeDimensions-C53bqH85.js";import"./OffsetShower-Ba6R23wJ.js";import"./PlotAreaShower-mh0ASj0Y.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
