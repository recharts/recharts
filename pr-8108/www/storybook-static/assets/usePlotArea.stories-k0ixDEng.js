import{R as t}from"./iframe-D0jufW3D.js";import{z as a}from"./RechartsWrapper-DTMB1NV8.js";import{R as p}from"./zIndexSlice-BoierTw-.js";import{C as n}from"./ComposedChart-CHSW6wo4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-RjAMMhdd.js";import{X as l}from"./XAxis-DbxDHf11.js";import{Y as h}from"./YAxis-D7roMtR7.js";import{L as c}from"./Legend-BS3Q5f_P.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwNNBflB.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dx__qMJ7.js";import"./throttle-BRaHJfbv.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./polarAxisSelectors-eVHebS17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK6BpS5A.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./Layer-D5IjCwFP.js";import"./Curve-CbdawudC.js";import"./types-KyGzz8Fo.js";import"./step-ClRjxL_f.js";import"./path-DyVhHtw_.js";import"./LabelList-BSqidkx_.js";import"./Label-L5bBHry2.js";import"./Text-CJ7ZV5G-.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./ActivePoints-BXYidu17.js";import"./Dot-CcvERK0Y.js";import"./activeStyles-CKVoF1Mf.js";import"./useAnimationId-BckzpxH4.js";import"./dataEntryStyles-L1JX3I7t.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./ErrorBarContext-DD4Me9w9.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getRadiusAndStrokeWidthFromDot-DIU63BSP.js";import"./ActiveShapeUtils-dLVute71.js";import"./useEffectiveDataKey-D47_79bJ.js";import"./CartesianAxis-xT0IlJ0n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cmh5XwmF.js";import"./uniqBy-Dx1aoyhy.js";import"./iteratee-CPaJ8F08.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
