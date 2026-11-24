import{R as e}from"./iframe-3nQ-xZag.js";import{R as i}from"./zIndexSlice-Dm-AMY-R.js";import{C as n}from"./ComposedChart-BTAIT8TE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DvPQp3Ii.js";import{X as s}from"./XAxis-DaNCZ6NZ.js";import{Y as c}from"./YAxis-D3gPtNIE.js";import{L as d}from"./Line-BaS7SehX.js";import{R as g}from"./ReferenceLine-FK9Y--d6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./throttle-VgoIbkK-.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./RechartsWrapper-CLBNIVU_.js";import"./axisSelectors-fNaznWMp.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Nv905U8s.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./CartesianAxis-Bro405i1.js";import"./Layer-B7hf8wrq.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./Label-CjKwBg5w.js";import"./types-CveBZAlv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DqipViX9.js";import"./Curve-D3218arp.js";import"./step-nf1yL9aW.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-31cxgZsa.js";import"./ActivePoints-Ba3qB0HE.js";import"./Dot-B0shGOFT.js";import"./activeStyles-BALJdcO7.js";import"./useAnimationId-JHyqMuIo.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./ErrorBarContext-BrChGa93.js";import"./SetGraphicalItem-CcSizHOA.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./useEffectiveDataKey-DHnfGJ84.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
