import{R as e}from"./iframe-CLlZb5WL.js";import{R as i}from"./zIndexSlice-C-cLRtN4.js";import{C as n}from"./ComposedChart-S27VwcuA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BNeijhUJ.js";import{X as s}from"./XAxis-DBuW-REH.js";import{Y as c}from"./YAxis-BLqAl2VU.js";import{L as d}from"./Line-D7zCIp9R.js";import{R as g}from"./ReferenceLine-DXJ-Yy0e.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle--RnCkAem.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUiHCny8.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEo8N9ka.js";import"./axisSelectors-CGMVEYME.js";import"./d3-scale-ehl80MUm.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BIUIHb15.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./Text-B9EUqwyc.js";import"./pageBackground-2CAg07jP.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./Label-yyQZOpZ1.js";import"./ZIndexLayer-Buoz0PG0.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ByIUmGlM.js";import"./step-CBmZmkcc.js";import"./path-DyVhHtw_.js";import"./activeStyles-BadvgHow.js";import"./useAnimationId-DDy-DT0X.js";import"./dataEntryStyles-DY-TrJ76.js";import"./ActivePoints-2Ikh-s4p.js";import"./Dot-6T6__7vw.js";import"./ErrorBarContext-Bdt01u1A.js";import"./GraphicalItemClipPath-DZFjU2Jb.js";import"./SetGraphicalItem-B9oKhYwJ.js";import"./getRadiusAndStrokeWidthFromDot-DNx2I_LV.js";import"./ActiveShapeUtils-_yNwwF4x.js";import"./useEffectiveDataKey-DITcK2E7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
