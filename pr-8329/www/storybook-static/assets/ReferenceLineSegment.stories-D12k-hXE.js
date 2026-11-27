import{R as e}from"./iframe-D4kLWznI.js";import{R as i}from"./zIndexSlice-B28gm5Zj.js";import{C as n}from"./ComposedChart-D5eWF65_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DhEJMMM0.js";import{X as s}from"./XAxis-CIt9BLfr.js";import{Y as c}from"./YAxis-DTOW1dZ3.js";import{L as d}from"./Line-MmZxVnyG.js";import{R as g}from"./ReferenceLine-C_4Qb1Aa.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./throttle-q19G1wYU.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./RechartsWrapper-Brhd5wtn.js";import"./axisSelectors-ByHGSv-T.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-COuExidI.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./CartesianAxis-BbZQB26a.js";import"./Layer-BiQ6tIpf.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./Label-CC2QlraV.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CZtOf2sh.js";import"./Curve-BIpyAZSM.js";import"./step-BWfRSULP.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CQy-JarL.js";import"./ActivePoints-CZBrkmRZ.js";import"./Dot-We9lW2eK.js";import"./activeStyles-B6xOxwnr.js";import"./useAnimationId-Cda-LmXY.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./ErrorBarContext-D-e_coEF.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./useEffectiveDataKey-KQzX-PyK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
