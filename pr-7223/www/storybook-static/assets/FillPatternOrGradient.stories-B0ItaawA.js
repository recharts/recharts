import{e as t}from"./iframe-DCw0tqQR.js";import{R as s}from"./arrayEqualityCheck-C2tBZ1Qy.js";import{C as m}from"./ComposedChart-wlPyi7zj.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-gyHwn_4k.js";import{R as c}from"./RechartsHookInspector-Da0J_Xb_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCiQMHzG.js";import"./immer-DgwGzr0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKHRd-Jp.js";import"./index-kR5_0WmK.js";import"./hooks-BPO7V1JU.js";import"./axisSelectors-CtQi-3sb.js";import"./d3-scale-BoxOwXVD.js";import"./zIndexSlice-pEXw6d_M.js";import"./renderedTicksSlice-Bz3CfhIT.js";import"./CartesianChart-ARcHu8Al.js";import"./chartDataContext-DTKyXvOp.js";import"./CategoricalChart-2d0K-n2g.js";import"./Layer-DecK4sAB.js";import"./tooltipContext-Yd0dkIj1.js";import"./ReactUtils-ByaRZgWA.js";import"./Label-CVZgdgXC.js";import"./Text-DQrSc9C-.js";import"./DOMUtils-xep50AIj.js";import"./ZIndexLayer-BYzXZQRZ.js";import"./types-DB1MifHz.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fUwPie4c.js";import"./isPlainObject-CI4Edtk9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CriYIqhs.js";import"./useAnimationId-S3q8t8Nn.js";import"./Trapezoid-C7C4G9Uc.js";import"./Sector-CZ4caSpO.js";import"./Symbols-Ox381-HO.js";import"./symbol-Bs1LM99d.js";import"./step-C_4-RC3B.js";import"./Curve-BWU1MAzM.js";import"./RegisterGraphicalItemId-DNtaubKm.js";import"./ErrorBarContext-B44IbcKq.js";import"./GraphicalItemClipPath-DLhSizGK.js";import"./SetGraphicalItem-D17tmuod.js";import"./getZIndexFromUnknown-DDU6-irb.js";import"./graphicalItemSelectors-Cv1vjDoD.js";import"./index-CbS5rSne.js";import"./ChartSizeDimensions-DnWIR9Zc.js";import"./OffsetShower-DCtIXei-.js";import"./PlotAreaShower-AaZ9KRHa.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
