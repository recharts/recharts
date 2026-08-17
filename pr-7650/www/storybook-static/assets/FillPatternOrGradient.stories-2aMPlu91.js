import{R as t}from"./iframe-D_SBmach.js";import{R as s}from"./zIndexSlice-C-84-lKY.js";import{C as m}from"./ComposedChart-D6p63Jnk.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CuhljhLO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dlx_LjAj.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./axisSelectors-T3miAVW7.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./Layer-Be605v_j.js";import"./AnimatedItems-DZGph_C9.js";import"./Label-CdDqsnQd.js";import"./Text-Bw10gxla.js";import"./DOMUtils-DrunKDJC.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./useAnimationId-BA2h0Ua8.js";import"./types-CKo4Bnww.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DL8Pps38.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./tooltipContext-j8SRSGe2.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./ErrorBarContext-B-lCMwxo.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getZIndexFromUnknown-Dk9H2hpn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DMdb4hau.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
