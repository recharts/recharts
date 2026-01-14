import{e}from"./iframe-AMdIPtJ_.js";import{R as i}from"./arrayEqualityCheck-3UyTPjiS.js";import{C as a}from"./ComposedChart-CdZS-7p_.js";import{C as p}from"./CartesianGrid-Cp4flrLp.js";import{X as n}from"./XAxis-CXCVRDkD.js";import{Y as s}from"./YAxis-L1AiUQKA.js";import{L as c}from"./Line-DT_lVAK5.js";import{R as d}from"./ReferenceLine-B225hnET.js";import{R as g}from"./RechartsHookInspector-Bq93gymj.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-eDHOoSb6.js";import"./PolarUtils-KOfaMXsG.js";import"./RechartsWrapper-QBdH5qJC.js";import"./hooks-BddCSC5x.js";import"./axisSelectors-CYvP6yih.js";import"./zIndexSlice-CLEOTtEz.js";import"./CartesianChart-C7nb5Il8.js";import"./chartDataContext-BsDdYGEp.js";import"./CategoricalChart-C39w_Gis.js";import"./CartesianAxis-5YsJLijc.js";import"./Layer-s4o8RnMf.js";import"./Text-Bmd0wKqf.js";import"./DOMUtils-Bw_kQjwH.js";import"./Label-BXNXe9p5.js";import"./ZIndexLayer-DJXgyukI.js";import"./types-CQP6j9X1.js";import"./ReactUtils-BJF5ZjW2.js";import"./ActivePoints-Du82FzFM.js";import"./Dot-BW7Cs_-q.js";import"./RegisterGraphicalItemId-BIrQ-TMI.js";import"./ErrorBarContext-DTL9as4J.js";import"./GraphicalItemClipPath-CU1RZZTa.js";import"./SetGraphicalItem-BrubgrnS.js";import"./useAnimationId-DD0SbbDQ.js";import"./getRadiusAndStrokeWidthFromDot-dgMzj4wl.js";import"./ActiveShapeUtils-CYbAsT4q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXzCN27L.js";import"./Trapezoid-vgj8eyPg.js";import"./Sector-DeLHi04Y.js";import"./Symbols-B091hayX.js";import"./Curve-CXXZiBGe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C1Q9sGQl.js";import"./ChartSizeDimensions-C4K5r_rw.js";import"./OffsetShower-DJsmVlcW.js";import"./PlotAreaShower-poQ332x-.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
