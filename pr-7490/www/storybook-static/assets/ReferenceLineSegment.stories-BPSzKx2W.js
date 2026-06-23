import{R as e}from"./iframe-bG7_G66g.js";import{R as i}from"./zIndexSlice-BYtx9lI3.js";import{C as a}from"./ComposedChart-CgJhKHi6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CehmJiqc.js";import{X as s}from"./XAxis-BJQkDMRF.js";import{Y as c}from"./YAxis-C7HJKNEA.js";import{L as d}from"./Line-B5aT7L1s.js";import{R as g}from"./ReferenceLine-ClmwGxEZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhTjJvAV.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./get-CKlYZxfa.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./CategoricalChart-BHq-0gkK.js";import"./CartesianAxis-Dnx9Ro6b.js";import"./Layer-ky2aT-iX.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./Label-B0PcRW41.js";import"./ZIndexLayer-BRupmzoF.js";import"./types-DAUYWUcJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D0BbINzH.js";import"./step-B_0-Bz-G.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0ftWhjM.js";import"./useAnimationId-NfEwsoHb.js";import"./ActivePoints-CoLkUcGQ.js";import"./Dot-CaSI3883.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./ErrorBarContext-BmWpZ9Bv.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getRadiusAndStrokeWidthFromDot-Bb0n7Rxm.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
