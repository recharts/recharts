import{R as e}from"./iframe-o9H8KOy9.js";import{R as i}from"./zIndexSlice-CsgZI5yp.js";import{C as n}from"./ComposedChart-CKiAGi27.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D6cAtsQg.js";import{X as s}from"./XAxis-BS32pGnO.js";import{Y as c}from"./YAxis-ULho8m9m.js";import{L as d}from"./Line-Ci_p0EPQ.js";import{R as g}from"./ReferenceLine-D0jaZ89F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hW6vudhT.js";import"./index-UCkqSDpm.js";import"./index-DST8VIu0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyRSpMie.js";import"./isWellBehavedNumber-Dwj2svK3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ0mtC1D.js";import"./axisSelectors-Cs0jtKkZ.js";import"./d3-scale-DTDNfzi3.js";import"./index-EzgePqD6.js";import"./index-CnuR4GUo.js";import"./renderedTicksSlice-BmkiUxUd.js";import"./index-jpFEenpG.js";import"./CartesianChart-Gd4WSf--.js";import"./chartDataContext-up-x_HqN.js";import"./CategoricalChart-PL_s45W5.js";import"./CartesianAxis-oj3Fjdb5.js";import"./Layer-C1DHBl04.js";import"./Text-CYZhXiJD.js";import"./DOMUtils-S1dn3EjE.js";import"./useId-C6JRG-LM.js";import"./useBackwardsCompatibleTheme-BxxjaG6R.js";import"./Label-nsqVjfiI.js";import"./ZIndexLayer-DKFjfMYd.js";import"./types-Df3MXzgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-3cnVmCNd.js";import"./step-UNDjkb8Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-eAjckEIy.js";import"./useAnimationId-BkEDLLv5.js";import"./ActivePoints-DgEMzgoZ.js";import"./Dot-CCkur9hD.js";import"./RegisterGraphicalItemId-C9q20zyT.js";import"./ErrorBarContext-CLeU9z0V.js";import"./GraphicalItemClipPath-DTZX6fHd.js";import"./SetGraphicalItem-obUYvC56.js";import"./getRadiusAndStrokeWidthFromDot-_fRFOmw4.js";import"./ActiveShapeUtils-DCctTHnp.js";import"./useGraphicalItemIdentity-CagZ9rA9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
