import{e as t}from"./iframe-DUQ2rD4k.js";import{R as s}from"./arrayEqualityCheck-BBPGZIUg.js";import{C as m}from"./ComposedChart-BTcaBYEi.js";import{B as e}from"./Bar-0I1MFcsf.js";import{R as l}from"./RechartsHookInspector-EoCZS-ly.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./immer-CXKbBCwk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-rIHkV1_R.js";import"./index-B0EPCnDB.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./d3-scale-PQ3Jd5dr.js";import"./zIndexSlice-D6ARQVQn.js";import"./renderedTicksSlice-CW_OarVn.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./Layer-7WkqLLbY.js";import"./tooltipContext-k7gZluVX.js";import"./ReactUtils-BJlu3yfQ.js";import"./Label-C0FJwtOT.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./ZIndexLayer-59Hqjxa2.js";import"./types-SmO60qvE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D6xDWETw.js";import"./isPlainObject-B0Jm4UnE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bo_Jblzr.js";import"./useAnimationId-yl6yHjaO.js";import"./Trapezoid-C7HKi7wc.js";import"./Sector-CmPACNI3.js";import"./Symbols-B9RWw_WA.js";import"./symbol-BY9-nPyZ.js";import"./step-DYxjvIwM.js";import"./Curve-CF17Mcfw.js";import"./RegisterGraphicalItemId-rMFg-mKG.js";import"./ErrorBarContext-Clyukq3z.js";import"./GraphicalItemClipPath-Bn8yfwfV.js";import"./SetGraphicalItem-DM9xQ_4_.js";import"./getZIndexFromUnknown-Cwxb5aOJ.js";import"./graphicalItemSelectors--wPYtbjL.js";import"./index-mcEQG0VX.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./OffsetShower-ndNiLHUj.js";import"./PlotAreaShower-Y-PU9931.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
