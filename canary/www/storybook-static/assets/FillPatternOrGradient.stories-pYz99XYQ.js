import{e as t}from"./iframe-CgO1MpLR.js";import{R as s}from"./arrayEqualityCheck-u-i53ess.js";import{C as m}from"./ComposedChart-_NVVn82o.js";import{B as e}from"./Bar-DeLzYozS.js";import{R as l}from"./RechartsHookInspector-CDDYORWo.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhOBRlG4.js";import"./immer-CbOoSQee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDt2FmMO.js";import"./index-DXMTaf8u.js";import"./hooks-2os6LPs1.js";import"./axisSelectors-GgUYtUsd.js";import"./d3-scale-DrxfQAZk.js";import"./zIndexSlice-Bk7fG6-8.js";import"./renderedTicksSlice-BCt2n75F.js";import"./CartesianChart-9rc0WcRq.js";import"./chartDataContext-BsDrumof.js";import"./CategoricalChart-B51A2DYk.js";import"./Layer-BnKx9soM.js";import"./tooltipContext-C7kTWSUc.js";import"./ReactUtils-aHtS1QKc.js";import"./Label-DuKpvZQ2.js";import"./Text-BsiCf19y.js";import"./DOMUtils-ClzY_4R6.js";import"./ZIndexLayer-GawZf7gt.js";import"./types-CR8KEC21.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B380zvEd.js";import"./isPlainObject-BwngMX5y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-By3Xy3Xn.js";import"./useAnimationId-DCzIcKnG.js";import"./Trapezoid-CIGdjkmu.js";import"./Sector-D7mFZfC7.js";import"./Symbols-gxmwBdwn.js";import"./symbol-BbAFTquJ.js";import"./step-Do923Rg0.js";import"./Curve-DQA1Id8x.js";import"./RegisterGraphicalItemId-DbAYEj3z.js";import"./ErrorBarContext-CuzIsVL-.js";import"./GraphicalItemClipPath-Kfq1Q5v1.js";import"./SetGraphicalItem-BLM5KnkQ.js";import"./getZIndexFromUnknown-DLj5W9D_.js";import"./graphicalItemSelectors-D-J503vA.js";import"./index-Co6Xoctr.js";import"./ChartSizeDimensions-BHD_hXk_.js";import"./OffsetShower-DcNg8xR5.js";import"./PlotAreaShower-Dqalehnj.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
