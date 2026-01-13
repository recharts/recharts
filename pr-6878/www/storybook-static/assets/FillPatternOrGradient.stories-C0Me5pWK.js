import{e as t}from"./iframe-CoPAm7V1.js";import{R as s}from"./arrayEqualityCheck-b4a3wn0-.js";import{C as l}from"./ComposedChart--N9Ah0Mu.js";import{B as r}from"./Bar-mYqqMHi8.js";import{R as m}from"./RechartsHookInspector-CfbHdkme.js";import{p as c}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-OnP709yn.js";import"./PolarUtils-DGkU6n7f.js";import"./RechartsWrapper-DeO9xugK.js";import"./hooks-BDoK-oN_.js";import"./axisSelectors-Cdwi4Gmi.js";import"./zIndexSlice-CV1CLEn_.js";import"./CartesianChart-DHc8LGBh.js";import"./chartDataContext-482lKGc9.js";import"./CategoricalChart-L_hDSvwE.js";import"./Layer-BHClijQk.js";import"./tooltipContext-DUgdEMZ_.js";import"./ReactUtils-B2MREsDE.js";import"./Label-BN0l3Vc3.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./ZIndexLayer-DI7Wag2n.js";import"./types-BF6A7chk.js";import"./ActiveShapeUtils-fJZGBnKb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CvvJIb6J.js";import"./useAnimationId-BwvCPaTs.js";import"./Trapezoid-f55pqUw3.js";import"./Sector-CfHQ2k9y.js";import"./Symbols-oRqZ57VZ.js";import"./Curve-DDvcpmM9.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./ErrorBarContext-BY_hX5kq.js";import"./GraphicalItemClipPath-VLyW1X2z.js";import"./SetGraphicalItem-D7kJJVje.js";import"./getZIndexFromUnknown-D4VqWDgG.js";import"./graphicalItemSelectors-BJJxd4bN.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
