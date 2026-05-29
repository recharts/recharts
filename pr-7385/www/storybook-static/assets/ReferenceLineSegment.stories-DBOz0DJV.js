import{c as e}from"./iframe-CmE1Gw1b.js";import{g as i}from"./zIndexSlice-CPvazyt5.js";import{C as a}from"./ComposedChart-B0hkf2v7.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-BqmKPhec.js";import{X as s}from"./XAxis-CsAE-1wy.js";import{Y as c}from"./YAxis-sLz07qff.js";import{L as d}from"./Line-iL4IvS3b.js";import{R as g}from"./ReferenceLine-ClxZP5V9.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D0ucvycs.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./get-Xs9eC5t9.js";import"./resolveDefaultProps-DMnLPor7.js";import"./isWellBehavedNumber-iiy358B8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";import"./CartesianAxis-CAtPdKeh.js";import"./Layer-abY4Fjir.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./Label-Cvukc7WC.js";import"./ZIndexLayer-DHcHf456.js";import"./types-DmTRT5mp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DNUM0bVP.js";import"./step-CCTJ90gO.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BAXLe4Ge.js";import"./ActivePoints-BZYNmVQi.js";import"./Dot-mUoWRWq3.js";import"./RegisterGraphicalItemId-B-oWQNZS.js";import"./ErrorBarContext-BpCSl48G.js";import"./GraphicalItemClipPath-BhaC-7pi.js";import"./SetGraphicalItem-DE9GuFyM.js";import"./useAnimationId-D3nuvCaK.js";import"./getRadiusAndStrokeWidthFromDot-DrN6QQp7.js";import"./ActiveShapeUtils-C_GLb3KM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
