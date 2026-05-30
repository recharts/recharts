import{c as e}from"./iframe-CFdw7OF0.js";import{g as i}from"./zIndexSlice-D5FBk225.js";import{C as a}from"./ComposedChart-Z--IS1CR.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-CObU4swe.js";import{X as s}from"./XAxis-oGl6YnV0.js";import{Y as c}from"./YAxis-BAT_0iNE.js";import{L as d}from"./Line-cOG-eLoA.js";import{R as g}from"./ReferenceLine-CYKA61lq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-3q52nOMc.js";import"./index-CM5vwHXM.js";import"./index-RIEQ7tnC.js";import"./get-i3QN0OCy.js";import"./resolveDefaultProps-T_Ifm--9.js";import"./isWellBehavedNumber-Bx2m4Paj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-pofiw2Fq.js";import"./index-DM95XG_1.js";import"./index-C5nAfqWm.js";import"./renderedTicksSlice-CvMrYJlr.js";import"./axisSelectors-CDxqGeGZ.js";import"./d3-scale-B-4cH8vj.js";import"./CartesianChart-DSPLLrgp.js";import"./chartDataContext-zA7-YeX3.js";import"./CategoricalChart-AW1pE9Yw.js";import"./CartesianAxis-DvetSxxI.js";import"./Layer-DVYMAObc.js";import"./Text-Cow_E4O9.js";import"./DOMUtils-BavBrzJ4.js";import"./Label-2Qw5xNff.js";import"./ZIndexLayer-K1WjLJ6s.js";import"./types-DRUeCAti.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CMXh5glG.js";import"./step-Crajo5M3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CaBU1i2i.js";import"./ActivePoints-BRiCC5vc.js";import"./Dot-BIcdqveY.js";import"./RegisterGraphicalItemId-BaAIN_Bd.js";import"./ErrorBarContext-B3ComckR.js";import"./GraphicalItemClipPath-DcU2KTuM.js";import"./SetGraphicalItem-D0G49xVf.js";import"./useAnimationId-opl2QVve.js";import"./getRadiusAndStrokeWidthFromDot-DulN0eDG.js";import"./ActiveShapeUtils-CucidJwG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
