import{R as t}from"./iframe-DfTkQmXX.js";import{R as s}from"./zIndexSlice-CK1KsdwK.js";import{C as m}from"./ComposedChart-DiyxxUr9.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CsWWZj8O.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxAPF2hj.js";import"./axisSelectors-BlOH_04s.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./Layer-B_W6fsjz.js";import"./activeStyles-BILREjwj.js";import"./Label-SXOQPAQ7.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./ZIndexLayer-DPEED4Hn.js";import"./useAnimationId-BR_dOTuF.js";import"./dataEntryStyles-U8DJYbqc.js";import"./types-D3zQeAKc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ct4TwQSW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CGTBxphT.js";import"./tooltipContext-woF_zInE.js";import"./ErrorBarContext-CN6zyEVc.js";import"./GraphicalItemClipPath-xajKPwIx.js";import"./SetGraphicalItem-CbFA-TWr.js";import"./getZIndexFromUnknown-C9lvVoUu.js";import"./useGraphicalItemIdentity-C9Z0QIkA.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
