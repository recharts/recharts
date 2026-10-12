import{R as t}from"./iframe-D1Pqp3X7.js";import{R as s}from"./zIndexSlice-CC0vixK0.js";import{C as m}from"./ComposedChart-BLkMIV9V.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DiosrxrU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ukQujWSR.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./axisSelectors-D2uT0zOX.js";import"./d3-scale-BBX2CRCX.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./index-C4H2qa0s.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./Layer-Bv1Fmb_W.js";import"./activeStyles-Bni41BPX.js";import"./Label-CD1DJmaw.js";import"./Text-B3gTwU4t.js";import"./pageBackground-BD-8uHz0.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./types-CpySGoie.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPXhboaf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./tooltipContext-Bfi59ks3.js";import"./ErrorBarContext-CR6eW5Ea.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getZIndexFromUnknown-66XFS-A6.js";import"./useEffectiveDataKey-D04u3iKL.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
