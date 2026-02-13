import{e as t}from"./iframe-BdYBH0hQ.js";import{R as s}from"./arrayEqualityCheck-CnZHVnux.js";import{C as l}from"./ComposedChart-BGyCZHRq.js";import{B as r}from"./Bar-BCqQWrxk.js";import{R as m}from"./RechartsHookInspector-XSvtem8K.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BV4LHELv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-92XHVlpU.js";import"./hooks-CxwMnTRQ.js";import"./axisSelectors-B830JJxv.js";import"./zIndexSlice-5OAeHe1c.js";import"./CartesianChart-CWPbPBgj.js";import"./chartDataContext-nXwfjN3A.js";import"./CategoricalChart-CVN3i_3c.js";import"./Layer-CC1sQm5k.js";import"./tooltipContext-BdRs6IP9.js";import"./ReactUtils-BSN6r0Fc.js";import"./Label-nQ379wTM.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./ZIndexLayer-D6TqYbdI.js";import"./types-CeaFy_xO.js";import"./ActiveShapeUtils-BIp3i795.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EyNMCPiV.js";import"./useAnimationId-D1PUvmFT.js";import"./Trapezoid-B53GEe_2.js";import"./Sector-DrjPStcI.js";import"./Symbols-Dfpy34Qh.js";import"./Curve-C1OuXXjt.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./ErrorBarContext-CAApCFPz.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./getZIndexFromUnknown-DFDF0r1o.js";import"./graphicalItemSelectors-BJTRBxI-.js";import"./index-CsvAOYvG.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./OffsetShower-CHh6x2lZ.js";import"./PlotAreaShower-CNu2XHWT.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
