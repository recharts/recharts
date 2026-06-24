import{R as e}from"./iframe-NH2HoEvn.js";import{R as i}from"./zIndexSlice-CCMkrqvp.js";import{C as a}from"./ComposedChart-BnMLy3JL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DREgyLbK.js";import{X as s}from"./XAxis-CWamoSoZ.js";import{Y as c}from"./YAxis-DayohGi9.js";import{L as d}from"./Line-B-WZkr-r.js";import{R as g}from"./ReferenceLine-BTVWVSJU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-SVzhbtzF.js";import"./index-C8dhIkrl.js";import"./index-B6meFPDo.js";import"./get-Bo5cNVvp.js";import"./resolveDefaultProps-BGihd8_H.js";import"./isWellBehavedNumber-DL2i4yQU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYZBcomz.js";import"./index-DwDUEQ_a.js";import"./index-KEn5cK9h.js";import"./renderedTicksSlice-C1ge3ajN.js";import"./axisSelectors-BVEg60Nu.js";import"./d3-scale-BOfgX5mI.js";import"./CartesianChart-n5KlOJWr.js";import"./chartDataContext-DOG-KHg0.js";import"./CategoricalChart-r18o97_M.js";import"./CartesianAxis-BKNqtnIf.js";import"./Layer-CmQSLVxb.js";import"./Text-Dxh69SU_.js";import"./DOMUtils-DIF_Gs9K.js";import"./Label-DT7zDdgZ.js";import"./ZIndexLayer-4vtT6ix2.js";import"./types-CyGlxecW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-7UCJoGzD.js";import"./step-D8rYwkpZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-GETRY_YP.js";import"./useAnimationId-BkMnFoWD.js";import"./ActivePoints-DP4Q2WUd.js";import"./Dot-4iBWGC61.js";import"./RegisterGraphicalItemId-QTMlMqrn.js";import"./ErrorBarContext-DlMVuBVO.js";import"./GraphicalItemClipPath-C94rECFA.js";import"./SetGraphicalItem-DpdjJmMm.js";import"./getRadiusAndStrokeWidthFromDot-DfNtTuJE.js";import"./ActiveShapeUtils-C_uRJL3Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
