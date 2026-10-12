import{R as e}from"./iframe-B2Q_Qgm0.js";import{R as i}from"./zIndexSlice-lJSwut70.js";import{C as n}from"./ComposedChart-k0KfFloC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DpujAXbJ.js";import{X as s}from"./XAxis-BDkGAuXm.js";import{Y as c}from"./YAxis-BJcew9Oa.js";import{L as d}from"./Line-Bl5efQSj.js";import{R as g}from"./ReferenceLine-Djkyz1Xe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bfct0QsM.js";import"./index-D0I5UczE.js";import"./index-CRJ1kynM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEmHyBTe.js";import"./isWellBehavedNumber-CTjozt9e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GYxDJl.js";import"./axisSelectors-DGf_3ZFA.js";import"./d3-scale-E67z2Ey2.js";import"./index-t1Y9-LeO.js";import"./index-BmNUC2xp.js";import"./renderedTicksSlice-lf8jbds5.js";import"./index-Zw4_MUHC.js";import"./CartesianChart-CVDOe7y_.js";import"./chartDataContext-B5bxwzwP.js";import"./CategoricalChart-BC5WuIRL.js";import"./CartesianAxis-C0j9EsZJ.js";import"./Layer-BV6rSg6M.js";import"./Text-0iD6BYPe.js";import"./pageBackground-ufzNbkAg.js";import"./useId-BUg3av0m.js";import"./useBackwardsCompatibleTheme-CHG3CyzU.js";import"./Label-BGi8ZrBi.js";import"./ZIndexLayer-BL2VuU0B.js";import"./types-Ck2mmBqf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-wGV3RYR_.js";import"./step-BCJ1q1Uw.js";import"./path-DyVhHtw_.js";import"./activeStyles-C4EynwUE.js";import"./useAnimationId-L9mW9rF6.js";import"./dataEntryStyles-BZP5jTPc.js";import"./ActivePoints-BDe5iXRm.js";import"./Dot-CMzQjqPY.js";import"./ErrorBarContext-v_vPPXxo.js";import"./GraphicalItemClipPath-D_eZ4vKD.js";import"./SetGraphicalItem-C_s7gSpu.js";import"./getRadiusAndStrokeWidthFromDot-CP7Jrqg5.js";import"./ActiveShapeUtils-DztkhC9X.js";import"./useEffectiveDataKey-FHRr8rA1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
