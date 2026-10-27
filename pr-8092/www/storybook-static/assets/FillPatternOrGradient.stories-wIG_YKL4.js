import{R as t}from"./iframe-DloB-Tup.js";import{R as s}from"./zIndexSlice-DkoSoypq.js";import{C as m}from"./ComposedChart-gu5T_l93.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BtPLVNqe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./throttle-DHxiFtgA.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./axisSelectors-5JufQAoG.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cp_uhw02.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./Layer-S6G7_nQD.js";import"./LabelList-B_3Vas12.js";import"./Label-BCZcSJT3.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./dataEntryStyles-DO0_QeZe.js";import"./types-BVm9IbXw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DT8WiWUe.js";import"./useAnimationId-B4JCM27x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./tooltipContext-FzzNO4aG.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./activeStyles-B8TQJkxp.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./getZIndexFromUnknown-BkAWXdMt.js";import"./useEffectiveDataKey-B7m-hO1Q.js";import"./omit-BH-HEWqG.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},ot=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
