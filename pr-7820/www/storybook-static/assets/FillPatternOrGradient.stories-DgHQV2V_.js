import{R as t}from"./iframe-tthEZROf.js";import{R as s}from"./zIndexSlice-x-BIVIBz.js";import{C as m}from"./ComposedChart-DHi0lKW1.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-rK7lnicR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DytOPEyf.js";import"./index-DkFq0gE6.js";import"./index-oZ0OTb3C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps--ww6vB9W.js";import"./isWellBehavedNumber-CJmmz2h5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTnk9UBm.js";import"./axisSelectors-CCMb6f1X.js";import"./d3-scale-De6zhOSb.js";import"./index-BVTzxVB3.js";import"./index-CqetqEae.js";import"./renderedTicksSlice-CpQrC_np.js";import"./index-DkBTTuWT.js";import"./CartesianChart-DQWCoQde.js";import"./chartDataContext-D6MYvejF.js";import"./CategoricalChart-BHtoZx7C.js";import"./Layer-B-lEtj28.js";import"./AnimatedItems-D4IOxZdb.js";import"./Label-43myQ-K3.js";import"./Text-Cxp0AK4z.js";import"./DOMUtils-CUwo8lte.js";import"./useId-5DCloKRu.js";import"./useBackwardsCompatibleTheme-p9GfZJFz.js";import"./ZIndexLayer-3Td9gWAI.js";import"./useAnimationId-DDIADmfd.js";import"./types-DSfbGXGs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1nwJrSX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--TNHR6BT.js";import"./tooltipContext-CV5KqM6S.js";import"./RegisterGraphicalItemId-3Sw_ADlZ.js";import"./ErrorBarContext-DMolzGnE.js";import"./GraphicalItemClipPath-CGwPa5y8.js";import"./SetGraphicalItem-DjBM1G-g.js";import"./getZIndexFromUnknown-BHl4g5dA.js";import"./useGraphicalItemIdentity-C5skwmjT.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
