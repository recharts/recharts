import{e as t}from"./iframe-UdgfSgbV.js";import{g as s}from"./arrayEqualityCheck-CicOt-ds.js";import{C as m}from"./ComposedChart-BcvZKN5E.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-Ds6vgmxd.js";import{R as c}from"./RechartsHookInspector-CthRFnLf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DUahjl-e.js";import"./immer-D2PrSKKY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-niwZzApw.js";import"./index-DugrSXtg.js";import"./hooks-YBktsx8t.js";import"./axisSelectors-DMRIE0Wb.js";import"./d3-scale-UW9tFBgt.js";import"./zIndexSlice-BZq2EGul.js";import"./renderedTicksSlice-l1jYlYN2.js";import"./CartesianChart-Cvpty9Rq.js";import"./chartDataContext-B4DzVMPi.js";import"./CategoricalChart-BUvemvV9.js";import"./Layer-DfoJX-WM.js";import"./tooltipContext-Ccjm7MpW.js";import"./ReactUtils-CpmrlivC.js";import"./Label-GqUuXqgi.js";import"./Text-O_rmI639.js";import"./DOMUtils-CEz4_y1m.js";import"./ZIndexLayer--K-LA7QR.js";import"./types-BRerldyT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVc3ss1Y.js";import"./useAnimationId-_H_C4I0e.js";import"./ActiveShapeUtils-fzwtdy4J.js";import"./RegisterGraphicalItemId-BLtUrA1U.js";import"./ErrorBarContext-BYjQvvS7.js";import"./GraphicalItemClipPath-qHH5OIPj.js";import"./SetGraphicalItem-sqFy1wuC.js";import"./getZIndexFromUnknown-C6nMQ6mR.js";import"./graphicalItemSelectors-DL6ZBcdq.js";import"./index-D9bwHzxQ.js";import"./ChartSizeDimensions-ql6F2UUA.js";import"./OffsetShower-DEkhdigp.js";import"./PlotAreaShower-Coz6Wn-z.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
