import{R as e}from"./iframe-D-W27Aye.js";import{R as i}from"./zIndexSlice-DGQfYPGt.js";import{C as a}from"./ComposedChart-DJkZQXCm.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CWrSllAz.js";import{X as s}from"./XAxis-gk42ZI-1.js";import{Y as c}from"./YAxis-1JyMBgNW.js";import{L as d}from"./Line-DtGbdsRs.js";import{R as g}from"./ReferenceLine-BR71VRud.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CbhGTgvn.js";import"./index-CWu2xMKi.js";import"./index-DLfEBe63.js";import"./get-BDQ-VaUY.js";import"./resolveDefaultProps-BroczFsN.js";import"./isWellBehavedNumber-Du_dam65.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3NlvT8L.js";import"./index-DE37ce3k.js";import"./index-Cnxyq0Mm.js";import"./renderedTicksSlice-CN4MtC-5.js";import"./axisSelectors-BvFrWOiO.js";import"./d3-scale-BQjrtTI1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPw6EL6m.js";import"./chartDataContext-mE2SEo_G.js";import"./CategoricalChart-CsqvwlsS.js";import"./CartesianAxis-zyf7i4Uk.js";import"./Layer-BBvq20uw.js";import"./Text-Ch5M4wnL.js";import"./DOMUtils-ClafKG0n.js";import"./Label-xP0TYJi-.js";import"./ZIndexLayer-g9kGWnPX.js";import"./types-DQNR05Kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CDWlC7vY.js";import"./step-e-ZH1_z5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DVypXaLh.js";import"./useAnimationId-Bs22yXlG.js";import"./ActivePoints-DIioQ5_v.js";import"./Dot-BRpnxUKp.js";import"./RegisterGraphicalItemId-EzN9TJ6u.js";import"./ErrorBarContext-CUSYqY7l.js";import"./GraphicalItemClipPath-C_UztI7f.js";import"./SetGraphicalItem-50FO49Qg.js";import"./getRadiusAndStrokeWidthFromDot-DqIa6S6d.js";import"./ActiveShapeUtils-D1Ceary0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
