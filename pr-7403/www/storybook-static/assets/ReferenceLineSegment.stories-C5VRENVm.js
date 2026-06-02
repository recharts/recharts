import{c as e}from"./iframe-CaARQ0s4.js";import{g as i}from"./zIndexSlice-CT6cs3HE.js";import{C as a}from"./ComposedChart-0hkFxU0y.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DdGXK1fO.js";import{X as s}from"./XAxis-CMZlUJn9.js";import{Y as c}from"./YAxis-Cf1zna9j.js";import{L as d}from"./Line-o1PwIiWS.js";import{R as g}from"./ReferenceLine-i5H5bx3Z.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DoZyPWPm.js";import"./index-BPXM-FiZ.js";import"./index-BihqodT2.js";import"./get-CO6N6w1L.js";import"./resolveDefaultProps-B52lcPQI.js";import"./isWellBehavedNumber-D2fOOboq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BhQjrq0m.js";import"./index-B_8hMxBA.js";import"./index-DNa9UEyx.js";import"./renderedTicksSlice-MMq6D890.js";import"./axisSelectors-BR_tDNDG.js";import"./d3-scale-BQLIct9Q.js";import"./CartesianChart-CtVi6KY7.js";import"./chartDataContext-B9lvWDA4.js";import"./CategoricalChart-CAffiMXn.js";import"./CartesianAxis-CKiY6dqA.js";import"./Layer-CrNDeidH.js";import"./Text-V5D_mpos.js";import"./DOMUtils-_DsZOp5Z.js";import"./Label-COAzSUqp.js";import"./ZIndexLayer-BSRcolRF.js";import"./types-v4PqfPoB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-aG6LIP1X.js";import"./step-Oxw9Oqwn.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BDfejln-.js";import"./ActivePoints-Bo3chioo.js";import"./Dot-FinFGek5.js";import"./RegisterGraphicalItemId-s6qV58ed.js";import"./ErrorBarContext-B2OH1xFp.js";import"./GraphicalItemClipPath-ZB8y26XE.js";import"./SetGraphicalItem-CLCCJcFS.js";import"./useAnimationId-9oP4gOjo.js";import"./getRadiusAndStrokeWidthFromDot-BM_DPlIN.js";import"./ActiveShapeUtils-DYy5kA1Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
