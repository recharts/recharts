import{e as t}from"./iframe-xRIz3qbF.js";import{R as s}from"./arrayEqualityCheck-BdN7i4MO.js";import{C as m}from"./ComposedChart-BETovjYm.js";import{B as r}from"./Bar-x6i0j3NK.js";import{R as l}from"./RechartsHookInspector-CC_tuF9F.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-y0J6uKM2.js";import"./hooks-0oNAH-Yd.js";import"./axisSelectors-CpIgH2EX.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./CartesianChart-taOmKSzk.js";import"./chartDataContext-BSH8i1Pa.js";import"./CategoricalChart-Dtl4cVT_.js";import"./Layer-BmRFOYbB.js";import"./tooltipContext-DDQr_iGb.js";import"./ReactUtils-Cl__7Wwh.js";import"./Label-w-b8AlxD.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./ZIndexLayer-CoDEXRAT.js";import"./types-BXkuDJCo.js";import"./ActiveShapeUtils-DVUTgNxA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DArYXtns.js";import"./useAnimationId-Ca9wkO8e.js";import"./Trapezoid-D3wL9tbg.js";import"./Sector-BtgfQr6b.js";import"./Symbols-DxmxARm7.js";import"./Curve-DYmyqph4.js";import"./RegisterGraphicalItemId-E0tByVzF.js";import"./ErrorBarContext-BFUqajde.js";import"./GraphicalItemClipPath-C4i3jj0c.js";import"./SetGraphicalItem-CTKmQnUP.js";import"./getZIndexFromUnknown-2vHaUvlB.js";import"./graphicalItemSelectors-CD1rDFMQ.js";import"./index-BTLusoTB.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
