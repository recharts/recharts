import{R as t}from"./iframe-B3isOhIl.js";import{R as s}from"./zIndexSlice-B54EHMmU.js";import{C as m}from"./ComposedChart-DAKT1lAu.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-BesC-7Hq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-twRdBhxV.js";import"./index-l8cQaZi5.js";import"./index-BCE7BcH7.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CDjD_Xww.js";import"./isWellBehavedNumber-BqtgSWx4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMqUbMYB.js";import"./axisSelectors-DsO3f3GY.js";import"./d3-scale-C7hQHBL4.js";import"./index-DTYhzia9.js";import"./index-DD7K-mQd.js";import"./renderedTicksSlice-RPn9Fn_C.js";import"./index-CTz2_SJP.js";import"./CartesianChart-B6c5jQVZ.js";import"./chartDataContext-CzVXhMmy.js";import"./CategoricalChart-BlqE1d7Y.js";import"./Layer-DDNmqfG8.js";import"./activeStyles-D2IXZFhG.js";import"./Label-CVF_BzUf.js";import"./Text-BQG2REj-.js";import"./pageBackground-DLA1FFDB.js";import"./useId-BSb_3vlL.js";import"./useBackwardsCompatibleTheme-BnO74GVQ.js";import"./ZIndexLayer-DVIMR7Fc.js";import"./useAnimationId-BArccDj7.js";import"./dataEntryStyles-COQULstw.js";import"./types-BQEZ_W3y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbypY_BX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_L17MSu.js";import"./tooltipContext-DPnQxXAI.js";import"./ErrorBarContext-C1S_4TWD.js";import"./GraphicalItemClipPath-CFeguTu_.js";import"./SetGraphicalItem-4H3JYgxm.js";import"./getZIndexFromUnknown-B9vBvZ3z.js";import"./useEffectiveDataKey-_8Y1huCA.js";import"./omit-K7thEirw.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const ot={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},at=["Fill"];var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{r as Fill,at as __namedExportsOrder,ot as default};
