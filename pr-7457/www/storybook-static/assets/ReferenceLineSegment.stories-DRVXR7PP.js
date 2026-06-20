import{R as e}from"./iframe-CFGBW6xJ.js";import{R as i}from"./zIndexSlice-XhnqXoNc.js";import{C as a}from"./ComposedChart-CKhdd1T_.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-1FrMU2EN.js";import{X as s}from"./XAxis-B5InI_Kd.js";import{Y as c}from"./YAxis-DzdfuxTR.js";import{L as d}from"./Line-2oU_qbEN.js";import{R as g}from"./ReferenceLine-BqBZlA5_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DtmFdOpm.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./get-mKIhZXA3.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./CartesianAxis-B6GxQRPi.js";import"./Layer-DZ-_1tbp.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./Label-Dw9n6-WD.js";import"./ZIndexLayer-DWvdc9Et.js";import"./types-CFb2awxA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CuTnLBXp.js";import"./step-Bu8chpKv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-SqXWEHcu.js";import"./useAnimationId-nIrPYsqA.js";import"./ActivePoints-Ci_EruSJ.js";import"./Dot-6sp_j_Uz.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./ErrorBarContext-qfoo4UXw.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./getRadiusAndStrokeWidthFromDot-BxgONI-A.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
