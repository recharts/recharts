import{R as e}from"./iframe-C60CeSr1.js";import{R as i}from"./zIndexSlice-OJv_DQrU.js";import{C as a}from"./ComposedChart-BzAN8QDH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Dbjuy-le.js";import{X as s}from"./XAxis-BvEbbPhK.js";import{Y as c}from"./YAxis-BsYuPRXA.js";import{L as d}from"./Line-CMs-Gd4q.js";import{R as g}from"./ReferenceLine-DYtMbw62.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4y-zsF2K.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./CartesianAxis-CFb2o3L1.js";import"./Layer-BkafIlY5.js";import"./Text-DbOMyqnY.js";import"./DOMUtils-DGbVIUY3.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./Label-D00_RuVZ.js";import"./ZIndexLayer-DZjPHzll.js";import"./types-Bt5cyCk_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Dnnwa-VF.js";import"./step-7U-QL9rs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BorEvTXc.js";import"./useAnimationId-SZ0HilGc.js";import"./ActivePoints-5H7EYI7d.js";import"./Dot-DqDbCkrn.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getRadiusAndStrokeWidthFromDot-1touBkwt.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
