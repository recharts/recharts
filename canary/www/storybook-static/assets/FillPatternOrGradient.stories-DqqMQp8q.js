import{R as t}from"./iframe-CEnpMkUD.js";import{R as s}from"./zIndexSlice-05A266o9.js";import{C as m}from"./ComposedChart-Dl56oWTM.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CRuJ9KPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dmrqe0jJ.js";import"./index-BLMKt3XR.js";import"./index-CJbnSVQD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfNWPFnd.js";import"./isWellBehavedNumber-DR4aYfcx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0XuY0pKu.js";import"./index-D3euSQxt.js";import"./index-By9AGPbV.js";import"./axisSelectors-DC8u1mMs.js";import"./d3-scale-Dz-RCPbg.js";import"./renderedTicksSlice-CMfBipfM.js";import"./CartesianChart-RDTjk-Mf.js";import"./chartDataContext-fs3yspT4.js";import"./CategoricalChart-BbjRWCL9.js";import"./Layer-tgou8wwH.js";import"./AnimatedItems-BBWAA05W.js";import"./Label-keTZMkCE.js";import"./Text-BovGSesW.js";import"./DOMUtils-Bq__MZjJ.js";import"./useId-DkQeXuoN.js";import"./useBackwardsCompatibleTheme-Cl8wy0Yl.js";import"./ZIndexLayer--32eJAmt.js";import"./useAnimationId-CAXeIAhh.js";import"./types-Y-jxBs1c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwQubN_8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUkWWRfj.js";import"./tooltipContext-uIua17wn.js";import"./RegisterGraphicalItemId-CbjDoXD2.js";import"./ErrorBarContext-COjMx0cf.js";import"./GraphicalItemClipPath-CisBO3GG.js";import"./SetGraphicalItem-WHlYrVZg.js";import"./getZIndexFromUnknown-BbxTe_0t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dzh6Njpd.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
