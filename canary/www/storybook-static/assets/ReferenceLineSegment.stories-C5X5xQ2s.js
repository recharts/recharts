import{R as e}from"./iframe-DLBrGVIL.js";import{R as i}from"./zIndexSlice-D04f94zz.js";import{C as n}from"./ComposedChart-B19GUyoN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-5zdG2eL_.js";import{X as s}from"./XAxis-CeLc4bEQ.js";import{Y as c}from"./YAxis-BYVuK0Yz.js";import{L as d}from"./Line-Dp11xR-K.js";import{R as g}from"./ReferenceLine-BuOpPGuP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./throttle-Csq4RHLA.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./axisSelectors-e5FgB8sH.js";import"./polarAxisSelectors-5dY8QunD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7f23rgt.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./CartesianAxis-DwNRBXKt.js";import"./Layer-fmxJ3YOZ.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./Label-B42eZj7W.js";import"./types-Bhx-lAgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-XT9ud7Ex.js";import"./Curve-COZ7WQ5e.js";import"./step-Rw1feLL3.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C-aMudj3.js";import"./ActivePoints-9q7wkDTC.js";import"./Dot-DOIYCHL9.js";import"./activeStyles-DixW-39S.js";import"./useAnimationId-UzUbsW_e.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./ErrorBarContext-5vBRFIsn.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
