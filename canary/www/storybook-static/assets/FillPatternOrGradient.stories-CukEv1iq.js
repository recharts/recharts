import{e as t}from"./iframe-Dt4aI4cx.js";import{R as s}from"./arrayEqualityCheck-Cy9OM50o.js";import{C as m}from"./ComposedChart-Dj62jzJB.js";import{B as e}from"./Bar-BJCAdLCr.js";import{R as l}from"./RechartsHookInspector-DwUwNTd-.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnBFDAwN.js";import"./immer-yH4a-Hlo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQTEnB61.js";import"./index-DfJHLdb0.js";import"./hooks-Dm9h8rk1.js";import"./axisSelectors-gtHn-lFq.js";import"./d3-scale-BYMZZ-q_.js";import"./zIndexSlice-w9XFtOqX.js";import"./renderedTicksSlice-DE3C--Q6.js";import"./CartesianChart-vzcLi1ES.js";import"./chartDataContext-F8MoEuAy.js";import"./CategoricalChart-yI3i5yFY.js";import"./Layer-XX14EpjR.js";import"./tooltipContext-DNo4zVkm.js";import"./ReactUtils-As56lGLj.js";import"./Label-Dmj78U1Q.js";import"./Text-LG7Y1Qb6.js";import"./DOMUtils-5HA3g2TS.js";import"./ZIndexLayer-GPk988Ay.js";import"./types-CrM7aEhh.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CylnP5Yt.js";import"./isPlainObject-CAtbLXkb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDlQaAI4.js";import"./useAnimationId-Bl7aTw__.js";import"./Trapezoid-DzQkp94u.js";import"./Sector-CDC7yo8h.js";import"./Symbols-QnBNzaPT.js";import"./symbol-BLeS_YRk.js";import"./step-BxKH8omU.js";import"./Curve-ZdoQmbTm.js";import"./RegisterGraphicalItemId-BZJpY04p.js";import"./ErrorBarContext-DF-ZGRah.js";import"./GraphicalItemClipPath-CzTif6uL.js";import"./SetGraphicalItem-ByAuxD-G.js";import"./getZIndexFromUnknown-tPFQVhGj.js";import"./graphicalItemSelectors-DHqk5KA6.js";import"./index-D9ndWW50.js";import"./ChartSizeDimensions-DFLxu7GA.js";import"./OffsetShower-BVHtCcND.js";import"./PlotAreaShower-BLT7b5XW.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
