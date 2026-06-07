import{R as t}from"./iframe-BppzjNnb.js";import{R as s}from"./zIndexSlice-Bz25ueAP.js";import{C as l}from"./ComposedChart-DhR9pH6Q.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-C0Zr2hdZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BMUlrvOK.js";import"./index-C65TBMtY.js";import"./index-G9uqktgG.js";import"./get-BADN9FM0.js";import"./resolveDefaultProps-DWEEC0T7.js";import"./isWellBehavedNumber-C8JMlk1c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BctTvK_s.js";import"./index-BbKylj6c.js";import"./index-e2oR9ZSK.js";import"./renderedTicksSlice-DTii-kcm.js";import"./axisSelectors-W078EOTn.js";import"./d3-scale-CWnXAf3z.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DAZ3YXd0.js";import"./chartDataContext-C-pJrkOs.js";import"./CategoricalChart-CXNjM0Ue.js";import"./Layer-InP7nrar.js";import"./tooltipContext-ycv3szzX.js";import"./AnimatedItems-ClsYQppB.js";import"./Label-mqH-rpXP.js";import"./Text-YWAIgGvz.js";import"./DOMUtils-CKoiYbaH.js";import"./ZIndexLayer-vT85rwTx.js";import"./useAnimationId-CFK7zTSZ.js";import"./types-CY6jhn9K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFXd9BK5.js";import"./ActiveShapeUtils-BLIRe5G7.js";import"./RegisterGraphicalItemId-B42PFFZO.js";import"./ErrorBarContext-DT0m-eV5.js";import"./GraphicalItemClipPath-C_3x93JD.js";import"./SetGraphicalItem-DoX9EqUs.js";import"./getZIndexFromUnknown-CkpPg-9d.js";import"./graphicalItemSelectors-BOPKrx09.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
