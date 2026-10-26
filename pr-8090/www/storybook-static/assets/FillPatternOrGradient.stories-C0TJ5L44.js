import{R as t}from"./iframe-Dop2FCJV.js";import{R as s}from"./zIndexSlice-nsfMN2si.js";import{C as m}from"./ComposedChart-Om7t0Gx9.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-B8eYyFxS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./throttle-D7xfBLch.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./RechartsWrapper-ziCTvKBS.js";import"./axisSelectors-CeHIB0K5.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cxj7JE2J.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./Layer-B-MIuFUl.js";import"./LabelList-DYliLjPH.js";import"./Label-BDgfZPfI.js";import"./Text-umIfGz-9.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./dataEntryStyles-DYOt2-v1.js";import"./types-BszWz-w9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLrutJrV.js";import"./useAnimationId-CQv1eLqe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./tooltipContext-e4TcJLsg.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./ErrorBarContext-DG2LKBNq.js";import"./activeStyles-DnOLUEXC.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getZIndexFromUnknown-BWAlY1HO.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./omit-BkqaImpn.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},ot=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
