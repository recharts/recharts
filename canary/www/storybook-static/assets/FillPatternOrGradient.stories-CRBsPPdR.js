import{R as t}from"./iframe-DHiXiYOt.js";import{R as s}from"./zIndexSlice-K2mOff9O.js";import{C as m}from"./ComposedChart-q17tGP41.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Ba51PmND.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZL46Cig.js";import"./throttle-9IxKLS84.js";import"./index-Zkovv_Mu.js";import"./index-D_YreF5U.js";import"./RechartsWrapper-CRTUKx29.js";import"./axisSelectors-BDB90zwk.js";import"./polarAxisSelectors-CfAL7aRK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-mRNKtGCI.js";import"./index-8ZsYbMQX.js";import"./index-coRvk7yp.js";import"./renderedTicksSlice-Bih8KR78.js";import"./index-CvPWQYz_.js";import"./CartesianChart-OeiKzUqX.js";import"./chartDataContext-NYE-dDPb.js";import"./CategoricalChart-Ddy3kJ44.js";import"./Layer-DJ7NPFY5.js";import"./activeStyles-CUDvtf42.js";import"./Label-Gr9qDnB4.js";import"./Text-BC_B-bRG.js";import"./pageBackground-D2gDVXk4.js";import"./useId-C22RmVdj.js";import"./ZIndexLayer-DeVgP8h4.js";import"./dataEntryStyles-CfpC7ekH.js";import"./useAnimationId-Ca9jA2_m.js";import"./types-rgikEiEV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cnk8SPPS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHG_GvWA.js";import"./tooltipContext-D_8qLvLa.js";import"./RegisterGraphicalItemId-BCzoSTNC.js";import"./ErrorBarContext-CZu1Y3hj.js";import"./SetGraphicalItem-BBSXIdI5.js";import"./getZIndexFromUnknown-BDHhJLHc.js";import"./useEffectiveDataKey-Gb-Ai2uq.js";import"./omit-ktetNWuD.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},ot=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,ot as __namedExportsOrder,it as default};
