import{R as t}from"./iframe-B33Y4kOs.js";import{R as s}from"./zIndexSlice-BV8vqz-A.js";import{C as m}from"./ComposedChart-C6iXQW_F.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DPrRDsS0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dx9BFaqt.js";import"./index-D1w13u3d.js";import"./index-CqFL6s1V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bx3AGNLv.js";import"./isWellBehavedNumber-B7wXqJ9C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4BmCMdI.js";import"./axisSelectors-CPTmOT_R.js";import"./d3-scale-BRwhKw_2.js";import"./index-BM_y8xA7.js";import"./index-BLcaxlXW.js";import"./renderedTicksSlice-C0XiR0Pe.js";import"./index--PM34IXj.js";import"./CartesianChart-BgWqiAzR.js";import"./chartDataContext-CCe5PXsU.js";import"./CategoricalChart-Dg0sKqob.js";import"./Layer-DI-mGCka.js";import"./activeStyles-VptiM0EE.js";import"./Label-DQnbTFco.js";import"./Text-CnUdOxIr.js";import"./pageBackground-CmnWJfG9.js";import"./useId-CRYD77s2.js";import"./useBackwardsCompatibleTheme-df6TzhQ0.js";import"./ZIndexLayer-Dm3QzWrT.js";import"./useAnimationId-B0LKL5_Y.js";import"./dataEntryStyles-C0yw4w94.js";import"./types-cCXzDmUf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9nqQ6MB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZNSeBf4.js";import"./tooltipContext-CYhba1Wa.js";import"./ErrorBarContext-CHVe4J2J.js";import"./GraphicalItemClipPath-C_VqIcXn.js";import"./SetGraphicalItem-B6sh6hag.js";import"./getZIndexFromUnknown-uqVHwP5u.js";import"./useEffectiveDataKey-BxhkF0gV.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
