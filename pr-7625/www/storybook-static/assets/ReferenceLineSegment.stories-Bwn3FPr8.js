import{R as e}from"./iframe-zxb33ZNc.js";import{R as i}from"./zIndexSlice-D-761Vg8.js";import{C as a}from"./ComposedChart-D9F-_u2o.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BbAkmeDL.js";import{X as s}from"./XAxis-DyyrbnA7.js";import{Y as c}from"./YAxis-1uMHWvAC.js";import{L as d}from"./Line-DVclB8_O.js";import{R as g}from"./ReferenceLine-wxH1Op3U.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFGr8cJA.js";import"./index-NFdtXm63.js";import"./index-Dy7fskO8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B762IN2m.js";import"./isWellBehavedNumber-C-R_UlW0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnDLnjyJ.js";import"./index-C-3okO3A.js";import"./index-qRk_YJlx.js";import"./axisSelectors-Dv7CZoVg.js";import"./d3-scale-BDbFjNBn.js";import"./renderedTicksSlice-DRIJDHkm.js";import"./CartesianChart-DKaHYTMw.js";import"./chartDataContext-c74vlS-l.js";import"./CategoricalChart-ZwmRaYFc.js";import"./CartesianAxis-DX_ZohL1.js";import"./Layer-C3L05uBE.js";import"./Text-KHBAPEp1.js";import"./DOMUtils-Dz-vbmjU.js";import"./Label-DU6Rr4ia.js";import"./ZIndexLayer-DbePcZGA.js";import"./types-Dolw0ENN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DJQOtdEl.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BFfco-WU.js";import"./step-Bi5jdybT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMGgkPL-.js";import"./useAnimationId-SEMOU1a_.js";import"./ActivePoints-rNpF2i82.js";import"./Dot-aKbZPoCq.js";import"./RegisterGraphicalItemId-BHi56vMH.js";import"./ErrorBarContext-Cv-hFLv9.js";import"./GraphicalItemClipPath-dZEprd-F.js";import"./SetGraphicalItem-DyIKS88p.js";import"./getRadiusAndStrokeWidthFromDot-BBU-nePS.js";import"./ActiveShapeUtils-B0CCDTVh.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
