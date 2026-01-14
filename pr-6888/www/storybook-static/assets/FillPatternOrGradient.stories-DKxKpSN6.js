import{e as t}from"./iframe-C4Awkoff.js";import{R as s}from"./arrayEqualityCheck-B4QvsFQi.js";import{C as l}from"./ComposedChart-BcZ2exHk.js";import{B as r}from"./Bar-cmCRjnWQ.js";import{R as m}from"./RechartsHookInspector-C8xIuzm_.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B49yJYL9.js";import"./PolarUtils-CG-ELovL.js";import"./RechartsWrapper-D13K1qt6.js";import"./hooks-Gb_nE6Hc.js";import"./axisSelectors-CRRN5Cb6.js";import"./zIndexSlice-BPscvr6m.js";import"./CartesianChart-DYhYqUl7.js";import"./chartDataContext-BbHvubZk.js";import"./CategoricalChart-CQLlvG-9.js";import"./Layer-3uSdf7p6.js";import"./tooltipContext-86YEwt54.js";import"./ReactUtils-QCPHueip.js";import"./Label-BgopB1Yd.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./types-BzBfPwET.js";import"./ActiveShapeUtils-DGax7cBC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGrEruZe.js";import"./useAnimationId-BOjGjWHD.js";import"./Trapezoid-C9Na_GGw.js";import"./Sector-Bh3LTLHk.js";import"./Symbols-D7LlaOYy.js";import"./Curve-CSLJzt9O.js";import"./RegisterGraphicalItemId-DlrlPqlA.js";import"./ErrorBarContext-COm8GL2L.js";import"./GraphicalItemClipPath-DelQe7IH.js";import"./SetGraphicalItem-Dytz3s7d.js";import"./getZIndexFromUnknown-CcYELLwg.js";import"./graphicalItemSelectors-iEeM8zu0.js";import"./index-C4xfSpfA.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
