import{R as e}from"./iframe-Dop2FCJV.js";import{R as i}from"./zIndexSlice-nsfMN2si.js";import{C as n}from"./ComposedChart-Om7t0Gx9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-mIBlq79R.js";import{X as s}from"./XAxis-BotDK1s5.js";import{Y as c}from"./YAxis-B3k634-q.js";import{L as d}from"./Line-D5imx7T5.js";import{R as g}from"./ReferenceLine-BGboGHCE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./throttle-D7xfBLch.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./RechartsWrapper-ziCTvKBS.js";import"./axisSelectors-CeHIB0K5.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cxj7JE2J.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./CartesianAxis-DU3QwiMj.js";import"./Layer-B-MIuFUl.js";import"./Text-umIfGz-9.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./Label-BDgfZPfI.js";import"./dataEntryStyles-DYOt2-v1.js";import"./types-BszWz-w9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-0Qnio8ZJ.js";import"./step-CV2mnDR5.js";import"./path-DyVhHtw_.js";import"./LabelList-DYliLjPH.js";import"./ActivePoints-BOSFqPiQ.js";import"./Dot-CHpl-5cF.js";import"./activeStyles-DnOLUEXC.js";import"./useAnimationId-CQv1eLqe.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./ErrorBarContext-DG2LKBNq.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getRadiusAndStrokeWidthFromDot-CybZPC8K.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
