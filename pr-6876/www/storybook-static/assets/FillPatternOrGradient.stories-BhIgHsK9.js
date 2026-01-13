import{e as t}from"./iframe-CUnLgpW-.js";import{R as s}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as l}from"./ComposedChart-dHSji5Me.js";import{B as r}from"./Bar-_0n3XGuT.js";import{R as m}from"./RechartsHookInspector-Bx_AeU2-.js";import{p as c}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3A21IoT3.js";import"./PolarUtils-B2H8NKZh.js";import"./RechartsWrapper-DlEqFuyr.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./zIndexSlice-COAwGY7D.js";import"./CartesianChart-BId6Bjz9.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./Layer-DqDgkHbR.js";import"./tooltipContext-J2Mqx9dW.js";import"./ReactUtils-ubByZwRx.js";import"./Label-BFTmbefL.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./ZIndexLayer-CIJpz3dT.js";import"./types-Cya9OZ_P.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./useAnimationId-DVbvIVcC.js";import"./Trapezoid-D3rvFnZU.js";import"./Sector-CCBcQdor.js";import"./Symbols-B7Txi7cb.js";import"./Curve-BFHPlIj0.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./ErrorBarContext-cEGm4-dJ.js";import"./GraphicalItemClipPath-DI1arc73.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./getZIndexFromUnknown-C1iZLaZo.js";import"./graphicalItemSelectors-BoTLxpYp.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
