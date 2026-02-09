import{e as t}from"./iframe-_ezCe_To.js";import{R as s}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as l}from"./ComposedChart-BZQ3F3Nq.js";import{B as r}from"./Bar-Ws9Fj2fv.js";import{R as m}from"./RechartsHookInspector-D5tzqIDa.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3l68k8X.js";import"./hooks-DGCPXX4G.js";import"./axisSelectors-LsrbDDJC.js";import"./zIndexSlice-Dca2j4f-.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./Layer-BtA8wuUB.js";import"./tooltipContext-C3W9U2Bx.js";import"./ReactUtils-B0BDd-2i.js";import"./Label-CHFqoGJt.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./ZIndexLayer-CWThG05g.js";import"./types-DgqTh4_l.js";import"./ActiveShapeUtils-C67ovaxo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-citx9Y_h.js";import"./useAnimationId-BzKwp2Yk.js";import"./Trapezoid-CX1vw1n4.js";import"./Sector-Cl8ZFmwF.js";import"./Symbols-DtsjZSQh.js";import"./Curve-C2x4bgof.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./ErrorBarContext-DrqmUEJ9.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./getZIndexFromUnknown-BHoiilg2.js";import"./graphicalItemSelectors-DUHvhoPV.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
