import{e as t}from"./iframe-BSb16JoR.js";import{R as s}from"./arrayEqualityCheck-CKi6Epe4.js";import{C as m}from"./ComposedChart-BAoNDz5r.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-DUt68D_Y.js";import{R as c}from"./RechartsHookInspector-DGV6Ct7j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./immer-BeuBwnCt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./Layer-DZYtcC2w.js";import"./tooltipContext-CkcxG-eO.js";import"./ReactUtils-v-8YVmpF.js";import"./Label-tcp5Z6P8.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./ZIndexLayer-8dStJwlU.js";import"./types-BvVKlSL_.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CQZggNZ2.js";import"./isPlainObject-BiZ1xmFL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6I9faxi.js";import"./useAnimationId-BRGMijHA.js";import"./Trapezoid-BRhFJlA0.js";import"./Sector-C6wRPjnp.js";import"./Symbols-SIMNkJGH.js";import"./symbol-CgA8__kL.js";import"./step-g_dGXwfI.js";import"./Curve-CJKywfJT.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./ErrorBarContext-D0q4JY8z.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./getZIndexFromUnknown-Bt9tAT23.js";import"./graphicalItemSelectors-BxDLltGA.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
