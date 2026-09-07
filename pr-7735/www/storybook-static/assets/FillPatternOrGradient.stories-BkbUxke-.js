import{R as t}from"./iframe-Bpd2XNWC.js";import{R as s}from"./zIndexSlice-BTu_B7mV.js";import{C as m}from"./ComposedChart-CzZEMv_V.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-HmII4SBU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CxmKEgMS.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cs-3N8QT.js";import"./axisSelectors-BrNdfEDm.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./index-3uQaoJQn.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./Layer-DWU20C-K.js";import"./AnimatedItems-dPJnsYL3.js";import"./Label-CGyNRxJa.js";import"./Text-DXGXVj-Q.js";import"./DOMUtils-CSQS_b5b.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./ZIndexLayer-BFtSzcZm.js";import"./useAnimationId-DbYR-C-O.js";import"./types-B5zWJp34.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-l4QrEY0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./tooltipContext-BqHkA-Bu.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./ErrorBarContext-BALmliVb.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getZIndexFromUnknown-CLOLBUIp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IaVESyrB.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
