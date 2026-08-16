import{R as t}from"./iframe-GNxtioUR.js";import{R as s}from"./zIndexSlice-D4haQxNn.js";import{C as m}from"./ComposedChart-Dx410X4q.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Cqz2JVPf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Du4Eduzv.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./index-BJVo2ffI.js";import"./axisSelectors-CsnJkuOW.js";import"./d3-scale-CsslalFd.js";import"./renderedTicksSlice-BNEcUsku.js";import"./CartesianChart-B0x1kr2K.js";import"./chartDataContext-DEGQ_Aoe.js";import"./CategoricalChart-m_Ids5fk.js";import"./Layer-DR6S9zl-.js";import"./tooltipContext-DDY_vjIu.js";import"./AnimatedItems-Ct2IhasV.js";import"./Label-C7cFT6-M.js";import"./Text-C79V-s10.js";import"./DOMUtils-UzZI-9_5.js";import"./RechartsThemeContext-BZnANilh.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./useAnimationId-B4U03xNw.js";import"./types-omsl4D4O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_z4MU1Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-McNEEg_Y.js";import"./RegisterGraphicalItemId-BVyZPmQY.js";import"./ErrorBarContext-DSsXqNs7.js";import"./GraphicalItemClipPath-BK71gx_X.js";import"./SetGraphicalItem-vjMpKlni.js";import"./getZIndexFromUnknown--fn58SrP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BM42DxsS.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
