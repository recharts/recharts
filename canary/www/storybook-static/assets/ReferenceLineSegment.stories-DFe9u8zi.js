import{e}from"./iframe-DDewu6bn.js";import{R as i}from"./arrayEqualityCheck-DXTExga0.js";import{C as a}from"./ComposedChart-A2O41DUS.js";import{C as p}from"./CartesianGrid-Bh2qCtop.js";import{X as n}from"./XAxis-8FAWklv8.js";import{Y as s}from"./YAxis-D9vEUw1w.js";import{L as c}from"./Line-Bn8-TD5I.js";import{R as d}from"./ReferenceLine-DtzVk_TD.js";import{R as g}from"./RechartsHookInspector-CD3vvvGL.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./CartesianAxis-D7kXIk58.js";import"./Layer-DqLbE6Uv.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./Label-J4ZfWAib.js";import"./ZIndexLayer-mUyPWZcK.js";import"./types-BJyKbQEz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DtjzxdpY.js";import"./ActivePoints-6rWUYf_F.js";import"./Dot-CCTp0i8d.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./ErrorBarContext-CZxFfXpJ.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./useAnimationId-CjgQOJMR.js";import"./getRadiusAndStrokeWidthFromDot-dhATJ_xE.js";import"./ActiveShapeUtils-uXTIH56O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Don_yAtF.js";import"./Trapezoid-Bbc_2Q2m.js";import"./Sector-efCwWuY6.js";import"./Symbols-DzJjx9Jp.js";import"./Curve-BBC21-sm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
