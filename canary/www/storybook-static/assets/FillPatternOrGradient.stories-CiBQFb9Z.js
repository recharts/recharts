import{R as t}from"./iframe-BuTq1GDI.js";import{R as s}from"./zIndexSlice-nFeNXjL9.js";import{C as m}from"./ComposedChart-DnSJfh-P.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CZIcjIp7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BvjC40ji.js";import"./throttle-Bg_wxbeM.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./RechartsWrapper-tdUtbdK0.js";import"./axisSelectors-C8SZQKCy.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B-VNUnVY.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CvYG7xEe.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./Layer-BRqC8U5C.js";import"./activeStyles-CQul6riI.js";import"./Label-DQJj2wvU.js";import"./Text-CBEIE7g5.js";import"./pageBackground-BebQB_1W.js";import"./useId-haS85Qmm.js";import"./ZIndexLayer-eqYDQc0b.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./useAnimationId-PmZ8IQYc.js";import"./types-CybiymHT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nbayO8Mj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./tooltipContext-DQPd87t6.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./ErrorBarContext-DxkrfkAD.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./getZIndexFromUnknown-Bk9fUZU7.js";import"./useEffectiveDataKey-BAtZCpA-.js";import"./omit-CRLPKLD5.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},ot=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
