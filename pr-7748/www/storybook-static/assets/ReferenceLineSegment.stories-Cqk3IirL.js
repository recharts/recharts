import{R as e}from"./iframe-BRuR_Aem.js";import{R as i}from"./zIndexSlice-Bj7VXWF6.js";import{C as n}from"./ComposedChart-BfbWwovc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C2jaiA8O.js";import{X as s}from"./XAxis-DkgTjfQy.js";import{Y as c}from"./YAxis-CTNE1Ach.js";import{L as d}from"./Line-CIteCgCI.js";import{R as g}from"./ReferenceLine-BgB-UOKW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CB_4huk8.js";import"./throttle-Bze-tpN5.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./RechartsWrapper-Bn4G8r7u.js";import"./axisSelectors-vJ_QG27E.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D-1jLUlb.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./CartesianAxis-khCvplyM.js";import"./Layer-DH8vqzA_.js";import"./Text-DCSoJ6K5.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./Label-BRU8Jowp.js";import"./types-LyIymARE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-COuDjPMk.js";import"./Curve-2VjViydv.js";import"./step-DSV5xix0.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D3durKHg.js";import"./ActivePoints-DjHxL6MU.js";import"./Dot-BB75ixWu.js";import"./activeStyles-ddHtcBjm.js";import"./useAnimationId-CqnKfWIo.js";import"./Symbols-TJS8yyiq.js";import"./symbol-DRudrdJt.js";import"./ErrorBarContext-BSmlh0M0.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./useEffectiveDataKey-CJ_E1q2F.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
