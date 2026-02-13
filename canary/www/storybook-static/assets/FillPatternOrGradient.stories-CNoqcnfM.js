import{e as t}from"./iframe-BrTwOhsr.js";import{R as s}from"./arrayEqualityCheck-CfVGBoS6.js";import{C as l}from"./ComposedChart-Br1-FoJi.js";import{B as r}from"./Bar-Baqb0dNt.js";import{R as m}from"./RechartsHookInspector-wr1qbxN7.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D38DG274.js";import"./hooks-CwxxJRu9.js";import"./axisSelectors-DyCazfsW.js";import"./zIndexSlice-q9T-BB65.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./Layer-B-9J2nmA.js";import"./tooltipContext-C74b5_44.js";import"./ReactUtils-BRgMO5-h.js";import"./Label-Bx9GqcNI.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./ZIndexLayer-vpi4acAX.js";import"./types-CgBItb-S.js";import"./ActiveShapeUtils-BDlzWM-D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkEKHy4P.js";import"./useAnimationId-DrcXJvRo.js";import"./Trapezoid-BSnUVGBW.js";import"./Sector-GT6Bl8Sq.js";import"./Symbols-L5mWEGXG.js";import"./Curve-CFG-wGoi.js";import"./RegisterGraphicalItemId-DG1ATRc8.js";import"./ErrorBarContext-B6qv5CJK.js";import"./GraphicalItemClipPath-BJcM9DJz.js";import"./SetGraphicalItem-DZWKp8RZ.js";import"./getZIndexFromUnknown-D9w9YWsI.js";import"./graphicalItemSelectors-DnYp8OGY.js";import"./index-8XSHT_-Z.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./OffsetShower-Djp4qM9b.js";import"./PlotAreaShower-B7fNSASi.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
