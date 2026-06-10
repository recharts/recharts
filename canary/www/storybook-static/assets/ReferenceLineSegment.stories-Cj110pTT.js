import{R as e}from"./iframe-R4QFQ0mF.js";import{R as i}from"./zIndexSlice-BTkVJube.js";import{C as a}from"./ComposedChart-CPp9Pcna.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Cfb_rZdp.js";import{X as s}from"./XAxis-ByHGiOU3.js";import{Y as c}from"./YAxis-D-mO_MPY.js";import{L as d}from"./Line-DLAu7BAy.js";import{R as g}from"./ReferenceLine-Ct6SWrO1.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C5zbr-FM.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./get-CX1Ejt3V.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./axisSelectors-CP1mQpG7.js";import"./d3-scale-CmSi9of_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./CategoricalChart-19q5KTev.js";import"./CartesianAxis-DvCYtJ7x.js";import"./Layer-C8zF3tZM.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./Label-gFQEPWtd.js";import"./ZIndexLayer-D26CDD8U.js";import"./types-CyqiaD7e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-NcOFJc9S.js";import"./step-E1t4k1kh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-yF_BXiw0.js";import"./useAnimationId-QtK1xgnL.js";import"./ActivePoints-CIJh5p82.js";import"./Dot-Yljeb2kx.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./ErrorBarContext-lGs_n3Xc.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getRadiusAndStrokeWidthFromDot-DLeAaRBg.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
