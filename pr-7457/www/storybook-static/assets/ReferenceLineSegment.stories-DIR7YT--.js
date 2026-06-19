import{R as e}from"./iframe-DDa7m_LV.js";import{R as i}from"./zIndexSlice-BGDMq11w.js";import{C as a}from"./ComposedChart-DbnPvwSg.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CdszM2Fl.js";import{X as s}from"./XAxis-C_90q5ur.js";import{Y as c}from"./YAxis-BVn2_RdR.js";import{L as d}from"./Line-CgnFp_Ki.js";import{R as g}from"./ReferenceLine-D8QnFEVW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CDcbaTsx.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./get-BkRD0rv1.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./index-Dqdzi7xh.js";import"./renderedTicksSlice-BldZtaeN.js";import"./axisSelectors-B-E6faSk.js";import"./d3-scale-lQF3DEYD.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CategoricalChart-B4hxnAvN.js";import"./CartesianAxis-BYwyVqNa.js";import"./Layer-DzM6lalT.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./Label-CwmoSFs2.js";import"./ZIndexLayer-DErURTRW.js";import"./types-BQpkl3V-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-1MKNX4lJ.js";import"./step-xwmEGnAg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B4Or3-X4.js";import"./useAnimationId-DndzYlXq.js";import"./ActivePoints-2d86kPF5.js";import"./Dot-CTvLKOFz.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./ErrorBarContext-Cme-vC5F.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";import"./getRadiusAndStrokeWidthFromDot-CcrjGEgC.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
