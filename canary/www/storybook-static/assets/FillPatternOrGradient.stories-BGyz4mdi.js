import{e as t}from"./iframe-BpuHkxzv.js";import{g as s}from"./arrayEqualityCheck-D3NbzucA.js";import{C as m}from"./ComposedChart-CjOzFbN4.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-C-HLHhlT.js";import{R as c}from"./RechartsHookInspector-AaKfh7uA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./immer-OyT0OiEL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-PymVavj3.js";import"./index-B2w93Cnl.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./zIndexSlice-CmLQD4Hj.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./Layer-BqE9-RFh.js";import"./tooltipContext-DC3Kn2Ay.js";import"./ReactUtils-eZNJAb5x.js";import"./Label-DXexZu28.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./types-EV6wLq9J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2x9Rcis.js";import"./useAnimationId-ObzFSifI.js";import"./ActiveShapeUtils-CT-qLZ85.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./ErrorBarContext-C3BTG3j_.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./getZIndexFromUnknown-Ba28HUXU.js";import"./graphicalItemSelectors-DK3U3rqu.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
