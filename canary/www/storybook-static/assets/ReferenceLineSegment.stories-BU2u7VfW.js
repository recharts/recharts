import{R as e}from"./iframe-GBGc-iKq.js";import{R as i}from"./zIndexSlice-DP0tLqWW.js";import{C as a}from"./ComposedChart-BAWAmmMR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DwQo35BG.js";import{X as s}from"./XAxis-BBjH0uDR.js";import{Y as c}from"./YAxis-mSAPjc-3.js";import{L as d}from"./Line-BLIZlFIO.js";import{R as g}from"./ReferenceLine-D7UkTgkP.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-9IN4E6VX.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./get-DICUyaHN.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./index-DEGNeWRW.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./axisSelectors-DUsVRTIw.js";import"./d3-scale-Dym64WYU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./CartesianAxis-DQP4bonx.js";import"./Layer-CDGRbd8f.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./Label-DSpdGeyH.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./types-BTPiehg7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B9n6ABfY.js";import"./step-CxLlu8x6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C29R-vhg.js";import"./useAnimationId-BXgA3n2L.js";import"./ActivePoints-CBmfjAqp.js";import"./Dot-Jn68Tyru.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getRadiusAndStrokeWidthFromDot-nN08QDm9.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
