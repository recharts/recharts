import{R as t}from"./iframe-6ekSSt-5.js";import{R as s}from"./zIndexSlice-R_KvTYBp.js";import{C as m}from"./ComposedChart-D9BCUJr7.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DAYEmab6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JjZtg2oI.js";import"./index-DAO7DwMJ.js";import"./index-CsVDbkb5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DA4rmZEN.js";import"./isWellBehavedNumber-CkJkZDTh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJruUjAs.js";import"./index-Lx5OR-Dl.js";import"./index-CgnFSl-7.js";import"./axisSelectors-CsclQRZu.js";import"./d3-scale-DlyN1fPO.js";import"./renderedTicksSlice-CnpgwNhL.js";import"./CartesianChart-zH-5NwZD.js";import"./chartDataContext-DyyXPF9l.js";import"./CategoricalChart-DlA58TNH.js";import"./Layer-Caxtj8I7.js";import"./AnimatedItems-BWGnpjqe.js";import"./Label-CehMIv0c.js";import"./Text-9v-pfzjR.js";import"./DOMUtils-Crf9cx0d.js";import"./useId-BG9tPgK7.js";import"./useBackwardsCompatibleTheme-KnGuWCfH.js";import"./ZIndexLayer-CpjFLORN.js";import"./useAnimationId-C9PEopr_.js";import"./types-Bt2KWWGx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-K4g02Igp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BiTIzsLo.js";import"./tooltipContext-mB6OrZpW.js";import"./RegisterGraphicalItemId-CARor3cI.js";import"./ErrorBarContext-bczhAX9Q.js";import"./GraphicalItemClipPath-Bt-KQwU_.js";import"./SetGraphicalItem-BztnRzJW.js";import"./getZIndexFromUnknown-BVm17RCq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DWfDvKAL.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
