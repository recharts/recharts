import{R as t}from"./iframe-B-iIRDdh.js";import{R as s}from"./zIndexSlice-xTQiy-H7.js";import{C as m}from"./ComposedChart-aKLJJf8H.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DadnPNFg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./Layer-Dt4jm0MX.js";import"./AnimatedItems-WEAzzrlF.js";import"./Label-CwIrwy70.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./ZIndexLayer-CbH1OgN0.js";import"./useAnimationId-CcMpnWIs.js";import"./types-zJ8KfHt8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOjsrKl9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./tooltipContext-CHGhmnyK.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getZIndexFromUnknown-D7L5xpEb.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./dataEntryStyles-CRmBcoXI.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
