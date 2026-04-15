import{e}from"./iframe-2KzY7SZI.js";import{R as i}from"./arrayEqualityCheck-C_KFC4aG.js";import{C as p}from"./ComposedChart-BTJVM0N_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CUnnjTY-.js";import{X as s}from"./XAxis-IZqHvSRM.js";import{Y as c}from"./YAxis-BdZCTlTT.js";import{L as d}from"./Line-B_bmc7jI.js";import{R as g}from"./ReferenceLine-IoHH_j2z.js";import{R as f}from"./RechartsHookInspector-BfBUolA6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCkyn-XH.js";import"./immer-BbCSCUWa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6FLOJafv.js";import"./index-DWwY0oag.js";import"./hooks-D41MmbXB.js";import"./axisSelectors-btICR-6o.js";import"./d3-scale-YB1UXNlF.js";import"./zIndexSlice-DkD_gkVE.js";import"./renderedTicksSlice-DkyMgPSK.js";import"./CartesianChart-BjELWt2X.js";import"./chartDataContext-Cd81LqCh.js";import"./CategoricalChart-XS_rytPK.js";import"./CartesianAxis-iQKBE-lF.js";import"./Layer-CDY6haxt.js";import"./Text-D9eiSsSq.js";import"./DOMUtils-qhd3ut3X.js";import"./Label-30J3b0Tu.js";import"./ZIndexLayer-CjxdKwx6.js";import"./types-C82LLnNR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CP-aoZRs.js";import"./ActivePoints-A9eI8SQH.js";import"./Dot-D6GzpgpC.js";import"./RegisterGraphicalItemId-vClWkM0Z.js";import"./ErrorBarContext-CYcgyRmM.js";import"./GraphicalItemClipPath-D6n4jgua.js";import"./SetGraphicalItem-BxWbQ_06.js";import"./useAnimationId-DwCOtHiA.js";import"./getRadiusAndStrokeWidthFromDot-PInnfI7S.js";import"./ActiveShapeUtils-CWrruK-s.js";import"./isPlainObject-k6awtQUp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CQd-B1Q8.js";import"./Trapezoid-BF_TMfHF.js";import"./Sector-Bhzm6McX.js";import"./Symbols-BgWJ7GGh.js";import"./symbol-D5FcbSZZ.js";import"./step-B9r6R9dH.js";import"./Curve-D8MF2fMv.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DuC9ckfX.js";import"./ChartSizeDimensions-OFKXx0KH.js";import"./OffsetShower-C_p34O5g.js";import"./PlotAreaShower-BviaC-V-.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
