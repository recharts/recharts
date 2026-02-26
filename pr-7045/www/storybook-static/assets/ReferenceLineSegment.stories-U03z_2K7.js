import{e}from"./iframe-DUQ2rD4k.js";import{R as i}from"./arrayEqualityCheck-BBPGZIUg.js";import{C as p}from"./ComposedChart-BTcaBYEi.js";import{C as a}from"./CartesianGrid-CrLNpTgd.js";import{X as n}from"./XAxis-Dj-mbvwT.js";import{Y as s}from"./YAxis-CeQ3Mvu1.js";import{L as c}from"./Line-DqtbRix_.js";import{R as d}from"./ReferenceLine-CVr8eixQ.js";import{R as g}from"./RechartsHookInspector-EoCZS-ly.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./immer-CXKbBCwk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-rIHkV1_R.js";import"./index-B0EPCnDB.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./d3-scale-PQ3Jd5dr.js";import"./zIndexSlice-D6ARQVQn.js";import"./renderedTicksSlice-CW_OarVn.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./CartesianAxis-CJmVZJSG.js";import"./Layer-7WkqLLbY.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./Label-C0FJwtOT.js";import"./ZIndexLayer-59Hqjxa2.js";import"./types-SmO60qvE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BJlu3yfQ.js";import"./ActivePoints-CO4Xi39k.js";import"./Dot-DZAiuKz5.js";import"./RegisterGraphicalItemId-rMFg-mKG.js";import"./ErrorBarContext-Clyukq3z.js";import"./GraphicalItemClipPath-Bn8yfwfV.js";import"./SetGraphicalItem-DM9xQ_4_.js";import"./useAnimationId-yl6yHjaO.js";import"./getRadiusAndStrokeWidthFromDot-Dds1z6ov.js";import"./ActiveShapeUtils-D6xDWETw.js";import"./isPlainObject-B0Jm4UnE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bo_Jblzr.js";import"./Trapezoid-C7HKi7wc.js";import"./Sector-CmPACNI3.js";import"./Symbols-B9RWw_WA.js";import"./symbol-BY9-nPyZ.js";import"./step-DYxjvIwM.js";import"./Curve-CF17Mcfw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-mcEQG0VX.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./OffsetShower-ndNiLHUj.js";import"./PlotAreaShower-Y-PU9931.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
