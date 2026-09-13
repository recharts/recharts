import{R as t}from"./iframe-Ds6TFLkC.js";import{R as s}from"./zIndexSlice-BKrqz3Xt.js";import{C as m}from"./ComposedChart-BETzNKL8.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D9rrb2qc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5Eq1kaaq.js";import"./index-ClPOgP6S.js";import"./index-C9niY2XO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7a2m4Ka.js";import"./isWellBehavedNumber-LBH0mcE-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJwlXMvA.js";import"./axisSelectors-CNkxeY96.js";import"./d3-scale-CUyqRA-V.js";import"./index-CVuBNUrf.js";import"./index-BuCwMnJX.js";import"./renderedTicksSlice-F4QCvYob.js";import"./index-BK5RQvEH.js";import"./CartesianChart-CQ_Lc8CK.js";import"./chartDataContext-8-sBB6AR.js";import"./CategoricalChart-mnoE3YYU.js";import"./Layer-DsMiZb8_.js";import"./AnimatedItems-Bite-60b.js";import"./Label-2c4G7wLB.js";import"./Text-CQENvntP.js";import"./DOMUtils-CAtVF91U.js";import"./useId-DhelI0MM.js";import"./useBackwardsCompatibleTheme-eHtj-G5x.js";import"./ZIndexLayer-BVTJP5jP.js";import"./useAnimationId-wJ9zl-lu.js";import"./types-DqUBeAy_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd2BLFBG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJP1sGvV.js";import"./tooltipContext-Fe8JrluY.js";import"./RegisterGraphicalItemId-B4xTnp7Z.js";import"./ErrorBarContext-CEkkj6v_.js";import"./GraphicalItemClipPath-C-q0-wOK.js";import"./SetGraphicalItem-A2_dyvg9.js";import"./getZIndexFromUnknown-Cf_oPZt1.js";import"./useGraphicalItemIdentity-onk1vmff.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
