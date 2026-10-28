import{R as t}from"./iframe-D0jufW3D.js";import{R as p}from"./zIndexSlice-BoierTw-.js";import{C as m}from"./ComposedChart-CHSW6wo4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BqxBj55b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CwNNBflB.js";import"./throttle-BRaHJfbv.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./RechartsWrapper-DTMB1NV8.js";import"./axisSelectors-Dx__qMJ7.js";import"./polarAxisSelectors-eVHebS17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK6BpS5A.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./Layer-D5IjCwFP.js";import"./LabelList-BSqidkx_.js";import"./Label-L5bBHry2.js";import"./Text-CJ7ZV5G-.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./ActivePoints-BXYidu17.js";import"./Dot-CcvERK0Y.js";import"./types-KyGzz8Fo.js";import"./activeStyles-CKVoF1Mf.js";import"./useAnimationId-BckzpxH4.js";import"./dataEntryStyles-L1JX3I7t.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getRadiusAndStrokeWidthFromDot-DIU63BSP.js";import"./ActiveShapeUtils-dLVute71.js";import"./Curve-CbdawudC.js";import"./step-ClRjxL_f.js";import"./useEffectiveDataKey-D47_79bJ.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
