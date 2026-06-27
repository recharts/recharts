import{R as e}from"./iframe-D4-JHLuy.js";import{R as i}from"./zIndexSlice-Bl2qFY1A.js";import{C as a}from"./ComposedChart-mEpO2gCy.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-QY_EBeYm.js";import{X as s}from"./XAxis-N0htLXAu.js";import{Y as c}from"./YAxis-CC97e3o5.js";import{L as d}from"./Line-BkdrkySx.js";import{R as g}from"./ReferenceLine-DcYj0yKF.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-M-cM6uYj.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./get-Bi1X6SaN.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./isWellBehavedNumber-c1UrbL-U.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./CartesianAxis-Da1hp6ds.js";import"./Layer-DnbVmNuk.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./Label-Dbayb2l5.js";import"./ZIndexLayer-BIs2Zanq.js";import"./types-B4cCoOJo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CDHj8CQ7.js";import"./step-DP0d975A.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BaefG7CY.js";import"./useAnimationId-v_oz9FgZ.js";import"./ActivePoints-CUhH8-xa.js";import"./Dot-ColQ7WFS.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./ErrorBarContext-eSnspfxP.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getRadiusAndStrokeWidthFromDot-5SFlDmNV.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
