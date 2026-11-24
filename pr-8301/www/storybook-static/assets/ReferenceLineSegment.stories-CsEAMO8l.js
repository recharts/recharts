import{R as e}from"./iframe-B6IWu9YI.js";import{R as i}from"./zIndexSlice-CiiKnRRR.js";import{C as n}from"./ComposedChart-7NLEhX0Q.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Fw16Qisq.js";import{X as s}from"./XAxis-Dlj0iAIW.js";import{Y as c}from"./YAxis-MTRfWgoi.js";import{L as d}from"./Line-BZf0NlOt.js";import{R as g}from"./ReferenceLine-D1mRmdbq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5gBkMry.js";import"./throttle-BURJLM__.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./RechartsWrapper-ut8KRm06.js";import"./axisSelectors-DNbDiKxI.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnDY_Nfy.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./Text-BO6nkoy7.js";import"./ZIndexLayer-6PrGVGr8.js";import"./Label-DTgwgIlk.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DmFDmFl9.js";import"./Curve-BwM0kF7u.js";import"./step-CBaC3nOj.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./ActivePoints-CU2VyTBL.js";import"./Dot-Cj5qq7RO.js";import"./activeStyles-BITXl8mO.js";import"./useAnimationId-CU9aT4qK.js";import"./Symbols-BCHMzS19.js";import"./symbol-C2WLAmAq.js";import"./ErrorBarContext-DvofuvtM.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./useEffectiveDataKey-B8xnYYq1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
