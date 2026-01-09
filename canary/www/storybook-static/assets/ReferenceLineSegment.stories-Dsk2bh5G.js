import{e}from"./iframe-cTJex_Gl.js";import{R as i}from"./arrayEqualityCheck-D0_WBn0Z.js";import{C as a}from"./ComposedChart-vrFxLduB.js";import{C as p}from"./CartesianGrid-DEYU9QKY.js";import{X as n}from"./XAxis-KlGsegds.js";import{Y as s}from"./YAxis-e82ZV-al.js";import{L as c}from"./Line-CvV577lQ.js";import{R as d}from"./ReferenceLine-BPSvVY_b.js";import{R as g}from"./RechartsHookInspector-BIilfS59.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-GZGysWVv.js";import"./PolarUtils-B2tM_qUT.js";import"./RechartsWrapper-Bm4mCVnL.js";import"./hooks-JY4JcvJg.js";import"./axisSelectors-DKP4jhQb.js";import"./zIndexSlice-o0TZ72x9.js";import"./CartesianChart-sbYYv-2G.js";import"./chartDataContext-CUgM-3fT.js";import"./CategoricalChart-czES7GN9.js";import"./CartesianAxis-BrBc_oiZ.js";import"./Layer-BMdqJaf7.js";import"./Text-BHjkvtN0.js";import"./DOMUtils-CszyQhOM.js";import"./Label-BuzFvabn.js";import"./ZIndexLayer-H4Ow-AJr.js";import"./types-Gt1xRz9Z.js";import"./ReactUtils-BpjLVHCA.js";import"./ActivePoints-WYLnnU_j.js";import"./Dot-DR5Pj5g1.js";import"./RegisterGraphicalItemId-aixP5EwM.js";import"./ErrorBarContext-BLazH71_.js";import"./GraphicalItemClipPath-CJqMx8GZ.js";import"./SetGraphicalItem-H24PzumZ.js";import"./useAnimationId-DmLtCxti.js";import"./getRadiusAndStrokeWidthFromDot-TSbsRtbT.js";import"./ActiveShapeUtils-Bs6rxUQM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D12YpzZT.js";import"./Trapezoid-Cffv8lrQ.js";import"./Sector-D24ZdNmK.js";import"./Symbols-DkoAz0u2.js";import"./Curve-Lpz0qnxX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DuBUoeGC.js";import"./ChartSizeDimensions-tHZb_dEK.js";import"./OffsetShower-DB87M8KV.js";import"./PlotAreaShower-D22yshvn.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
