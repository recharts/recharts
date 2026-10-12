import{R as t}from"./iframe-B2Q_Qgm0.js";import{R as s}from"./zIndexSlice-lJSwut70.js";import{C as m}from"./ComposedChart-k0KfFloC.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D0HR7G-A.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bfct0QsM.js";import"./index-D0I5UczE.js";import"./index-CRJ1kynM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEmHyBTe.js";import"./isWellBehavedNumber-CTjozt9e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GYxDJl.js";import"./axisSelectors-DGf_3ZFA.js";import"./d3-scale-E67z2Ey2.js";import"./index-t1Y9-LeO.js";import"./index-BmNUC2xp.js";import"./renderedTicksSlice-lf8jbds5.js";import"./index-Zw4_MUHC.js";import"./CartesianChart-CVDOe7y_.js";import"./chartDataContext-B5bxwzwP.js";import"./CategoricalChart-BC5WuIRL.js";import"./Layer-BV6rSg6M.js";import"./activeStyles-C4EynwUE.js";import"./Label-BGi8ZrBi.js";import"./Text-0iD6BYPe.js";import"./pageBackground-ufzNbkAg.js";import"./useId-BUg3av0m.js";import"./useBackwardsCompatibleTheme-CHG3CyzU.js";import"./ZIndexLayer-BL2VuU0B.js";import"./useAnimationId-L9mW9rF6.js";import"./dataEntryStyles-BZP5jTPc.js";import"./types-Ck2mmBqf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZSjMbdp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DztkhC9X.js";import"./tooltipContext-B0sUWVAK.js";import"./ErrorBarContext-v_vPPXxo.js";import"./GraphicalItemClipPath-D_eZ4vKD.js";import"./SetGraphicalItem-C_s7gSpu.js";import"./getZIndexFromUnknown-GC8jswXs.js";import"./useEffectiveDataKey-FHRr8rA1.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
