import{R as e}from"./iframe-DU9JCgt3.js";import{R as i}from"./zIndexSlice-CxGcNVtb.js";import{C as n}from"./ComposedChart-CdeuUBYe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BIs6mNFY.js";import{X as s}from"./XAxis-aQms9ffh.js";import{Y as c}from"./YAxis-BhPAk-qT.js";import{L as d}from"./Line--t4nfpf_.js";import{R as g}from"./ReferenceLine-C-4-NsL4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./throttle-BSvWgvBy.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./RechartsWrapper-EGU-JwYV.js";import"./axisSelectors-Ba1wHviL.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D71t0tOP.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./CartesianAxis-CbM1zHQj.js";import"./Layer-8TmRCycn.js";import"./Text-CxPCVLsv.js";import"./ZIndexLayer-DyKyG2im.js";import"./Label-TtbmFLuu.js";import"./types-BRIT5d70.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DhmVJFDn.js";import"./Curve-CiFPjJzw.js";import"./step-CSLjLb0b.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BKp-1fzi.js";import"./ActivePoints-BMENxG1Z.js";import"./Dot-Cq9hKL4h.js";import"./activeStyles-DjdKzu9Y.js";import"./useAnimationId-CMFzH8KV.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./ErrorBarContext-Cf3Qd7xR.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./useEffectiveDataKey-9kbdNBk-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
