import{R as e}from"./iframe-D_P_Mvdh.js";import{R as i}from"./zIndexSlice-DWG8bKuL.js";import{C as a}from"./ComposedChart-C2CR4N0a.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CXlIILXr.js";import{X as s}from"./XAxis-qMeue6_L.js";import{Y as c}from"./YAxis-DVaDEIZb.js";import{L as d}from"./Line-CWgXDn5v.js";import{R as g}from"./ReferenceLine-Dw438WSG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-zUUuTuVf.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./get-B4It9gJG.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./CartesianAxis-CFHvtBrK.js";import"./Layer-DPlEhKnR.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./Label-XikFYvD7.js";import"./ZIndexLayer-B_lVTO01.js";import"./types-BEWgGyLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CAkixkLO.js";import"./step-DWwWZa2n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TOHLuZU5.js";import"./useAnimationId-B85ZSEKA.js";import"./ActivePoints-1kyrVvID.js";import"./Dot-BAS0IQWR.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./ErrorBarContext-CuQjxX0z.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getRadiusAndStrokeWidthFromDot-BQbb3rIK.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
