import{R as e}from"./iframe-DSiB0Y2h.js";import{R as i}from"./zIndexSlice-DXbXK2p0.js";import{C as a}from"./ComposedChart-VI9g2q1H.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DhrsCxB3.js";import{X as s}from"./XAxis-DKaEKDyo.js";import{Y as c}from"./YAxis-BvhfxNjy.js";import{L as d}from"./Line-DQiu1uRI.js";import{R as g}from"./ReferenceLine-Dejeoq1B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B3UghvKT.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-dV1CHodA.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CKOYxrgU.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./renderedTicksSlice-BPUsumAR.js";import"./axisSelectors-m-5JnBq3.js";import"./d3-scale-DOzMXTTX.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./CartesianAxis-CTswAcYo.js";import"./Layer-GefPfHKN.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./Label-SBQmZETs.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./types-Ctc34oVc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-CSkrO1uF.js";import"./step-D7_MEDCW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DcXITJ0o.js";import"./useAnimationId-CcRzR4wj.js";import"./ActivePoints-B6ujEarC.js";import"./Dot-h09Lg4V6.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./ErrorBarContext-BQTwLW9q.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./getRadiusAndStrokeWidthFromDot-D73h4AtU.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
