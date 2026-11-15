import{R as e}from"./iframe-CywB74O-.js";import{R as i}from"./zIndexSlice-CuZ12U6x.js";import{C as n}from"./ComposedChart-DnMaCTiC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-FTvt7RrC.js";import{X as s}from"./XAxis-BnyIc3dE.js";import{Y as c}from"./YAxis-BQxfFMOH.js";import{L as d}from"./Line-CuUolajC.js";import{R as g}from"./ReferenceLine-DtdRGjka.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Gc3kbVEc.js";import"./throttle-Cdx6aCwi.js";import"./index-B71Ze7LN.js";import"./index-DBD4vW62.js";import"./RechartsWrapper-DNXYBwim.js";import"./axisSelectors-BlSjRH8p.js";import"./polarAxisSelectors-CHx-smd7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6sMKT8T.js";import"./index-DPjYOBE8.js";import"./index-CmTmClEE.js";import"./renderedTicksSlice-s1l-mRnQ.js";import"./index-DwB73Oyx.js";import"./fillDefinitions-CMU9craw.js";import"./CartesianChart-CiFd4vci.js";import"./chartDataContext-C42Xk_ee.js";import"./CategoricalChart-CByovhBV.js";import"./CartesianAxis-BkY9x357.js";import"./Layer-BeaWmaSV.js";import"./Text-D8_iVJPC.js";import"./ZIndexLayer-CHuGvNnR.js";import"./Label-DQEyyaka.js";import"./types-DUxXs5Ud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BR2e6dhB.js";import"./step-DvAd1GMT.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BnKQuw5H.js";import"./ActivePoints-CULdSp3M.js";import"./Dot-CZ266pMm.js";import"./activeStyles-yKq-qtiq.js";import"./useAnimationId-DiaU742M.js";import"./Symbols-CkA0fnmK.js";import"./symbol-Bymi0eF-.js";import"./ErrorBarContext-BRsViJuO.js";import"./SetGraphicalItem-CWyrJmam.js";import"./getRadiusAndStrokeWidthFromDot-Dx2mkX1A.js";import"./ActiveShapeUtils-DRieSTBH.js";import"./useEffectiveDataKey-CjiZk5NG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
