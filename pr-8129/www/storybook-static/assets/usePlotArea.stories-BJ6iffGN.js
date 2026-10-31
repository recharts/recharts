import{R as t}from"./iframe-CDpmIgQT.js";import{z as p}from"./RechartsWrapper-CVUl_Te9.js";import{R as a}from"./zIndexSlice-BfaxD0dh.js";import{C as n}from"./ComposedChart-BJALrnW1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-0hIul04-.js";import{X as l}from"./XAxis-3XA4-bKe.js";import{Y as h}from"./YAxis-Ogt9or7H.js";import{L as c}from"./Legend-MQRSYMdg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CxEn2HHB.js";import"./throttle-aImz7VVk.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8Pupn_R.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./Layer-mHCkFu2a.js";import"./Curve-D7wdedao.js";import"./fillDefinitions-os6E-iMi.js";import"./pageBackground-JqsHu2De.js";import"./types-C_7I-XQd.js";import"./step-CbLfzlrV.js";import"./path-DyVhHtw_.js";import"./LabelList-IVU2RGL-.js";import"./Label-PB9tCobP.js";import"./Text-BSIquxO3.js";import"./DOMUtils-Cs7FGDH8.js";import"./ZIndexLayer-DJsGHloM.js";import"./ActivePoints-BB-NTxO3.js";import"./Dot-BEctbnXU.js";import"./activeStyles-BpeBFXJT.js";import"./useAnimationId-LIn9B9pI.js";import"./dataEntryStyles-tenSUrif.js";import"./Symbols-DArBJCV3.js";import"./symbol-MYiWw4z2.js";import"./ErrorBarContext-Bqx6IufA.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./getRadiusAndStrokeWidthFromDot-DBydaLHm.js";import"./ActiveShapeUtils-CinHd9se.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./CartesianAxis-f-wQfyV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-QH7GmGID.js";import"./uniqBy-DQsH6j_y.js";import"./iteratee-BSoVQiX1.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
