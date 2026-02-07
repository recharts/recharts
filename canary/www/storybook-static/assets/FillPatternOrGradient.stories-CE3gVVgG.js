import{e as t}from"./iframe-DTmqf-89.js";import{R as s}from"./arrayEqualityCheck-B5lu4Lk9.js";import{C as l}from"./ComposedChart-N22sluFG.js";import{B as r}from"./Bar-CoyBKVvo.js";import{R as m}from"./RechartsHookInspector-1827yCK6.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C00TVibV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-COXu3P-w.js";import"./hooks-BU_yGiYF.js";import"./axisSelectors-C7PUT4HW.js";import"./zIndexSlice-Vv1FeqCv.js";import"./CartesianChart-BS9lWtNm.js";import"./chartDataContext-DSwc8Xm3.js";import"./CategoricalChart-D6K3dQ4i.js";import"./Layer-BTS4uGxy.js";import"./tooltipContext-DWeHrq8C.js";import"./ReactUtils-byYmdu0g.js";import"./Label-egeGTsC3.js";import"./Text-CUOaxD2f.js";import"./DOMUtils-B3KaDt1C.js";import"./ZIndexLayer-DxJNdv8G.js";import"./types-B8nej2n0.js";import"./ActiveShapeUtils-BRF5U1J5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-rgqUccDm.js";import"./useAnimationId-CwTw9zZj.js";import"./Trapezoid-jP0l7-Gz.js";import"./Sector-CGOePyQw.js";import"./Symbols-C_pVSGbd.js";import"./Curve-B7xWVUlS.js";import"./RegisterGraphicalItemId-DzHJgvRB.js";import"./ErrorBarContext-CQrouc6N.js";import"./GraphicalItemClipPath-BMDqk7zi.js";import"./SetGraphicalItem-BFlL7NjP.js";import"./getZIndexFromUnknown-BCgZvKju.js";import"./graphicalItemSelectors-B4vCRplq.js";import"./index-Csnv4pYo.js";import"./ChartSizeDimensions-DGu1LvxE.js";import"./OffsetShower-BXOIobIw.js";import"./PlotAreaShower-BatiQcKf.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
