import{R as e}from"./iframe-D0jufW3D.js";import{R as i}from"./zIndexSlice-BoierTw-.js";import{C as n}from"./ComposedChart-CHSW6wo4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DPChzump.js";import{X as s}from"./XAxis-DbxDHf11.js";import{Y as c}from"./YAxis-D7roMtR7.js";import{L as d}from"./Line-RjAMMhdd.js";import{R as g}from"./ReferenceLine-BxVe325w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CwNNBflB.js";import"./throttle-BRaHJfbv.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./RechartsWrapper-DTMB1NV8.js";import"./axisSelectors-Dx__qMJ7.js";import"./polarAxisSelectors-eVHebS17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK6BpS5A.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./CartesianAxis-xT0IlJ0n.js";import"./Layer-D5IjCwFP.js";import"./Text-CJ7ZV5G-.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./Label-L5bBHry2.js";import"./types-KyGzz8Fo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CbdawudC.js";import"./step-ClRjxL_f.js";import"./path-DyVhHtw_.js";import"./LabelList-BSqidkx_.js";import"./ActivePoints-BXYidu17.js";import"./Dot-CcvERK0Y.js";import"./activeStyles-CKVoF1Mf.js";import"./useAnimationId-BckzpxH4.js";import"./dataEntryStyles-L1JX3I7t.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./ErrorBarContext-DD4Me9w9.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getRadiusAndStrokeWidthFromDot-DIU63BSP.js";import"./ActiveShapeUtils-dLVute71.js";import"./useEffectiveDataKey-D47_79bJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
