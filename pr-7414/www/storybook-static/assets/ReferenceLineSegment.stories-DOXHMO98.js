import{R as e}from"./iframe-ZPRKoU1G.js";import{R as i}from"./zIndexSlice-BsSz6rnO.js";import{C as a}from"./ComposedChart-BHINqNhm.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D_0MrnMU.js";import{X as s}from"./XAxis-C6ITfnkV.js";import{Y as c}from"./YAxis-CL1cp1D0.js";import{L as d}from"./Line-B1M2NTAD.js";import{R as g}from"./ReferenceLine-DOj5aIKa.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dqh26iK6.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./get-CGa3_Ok6.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./isWellBehavedNumber-C1VSg6lY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./axisSelectors-B6X9oFFj.js";import"./d3-scale-YZIwu0YS.js";import"./string-B6fdYHAA.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./CategoricalChart-C8cl1dv9.js";import"./CartesianAxis-BoMdju9k.js";import"./Layer-Cw8ar51S.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./Label-BBlujwtM.js";import"./ZIndexLayer-C_hsauba.js";import"./types-BUDAoUUu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-ePYEilGq.js";import"./step-BGVwbWHg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D4M5eO1p.js";import"./useAnimationId-CZUjtEje.js";import"./ActivePoints-BkkgePC3.js";import"./Dot-DfLTDUuc.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getRadiusAndStrokeWidthFromDot-BJaZ3V1E.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
