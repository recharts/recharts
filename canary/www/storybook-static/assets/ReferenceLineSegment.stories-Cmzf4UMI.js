import{e}from"./iframe-BD1KoWK2.js";import{R as i}from"./arrayEqualityCheck-Cde7DPwP.js";import{C as a}from"./ComposedChart-CpHM8O-c.js";import{C as p}from"./CartesianGrid-BcU30g3K.js";import{X as n}from"./XAxis-DnAqFIqk.js";import{Y as s}from"./YAxis-Ck4AhIst.js";import{L as c}from"./Line-CGYyis5f.js";import{R as d}from"./ReferenceLine-CF4JyUI3.js";import{R as g}from"./RechartsHookInspector-D7IHkHn9.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyX5gEfk.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./CartesianAxis-le_A4Q3P.js";import"./Layer-CRI4mTHm.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./Label-DKDP8eG9.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./types-CvLbK4WM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Z9JD7jXO.js";import"./ActivePoints-BVAo8tZZ.js";import"./Dot-CM29upss.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./ErrorBarContext-DDBG_BG0.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./useAnimationId-C52_k4XW.js";import"./getRadiusAndStrokeWidthFromDot-DUli-5VF.js";import"./ActiveShapeUtils-D4Tjr80H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dqzy-26l.js";import"./Trapezoid-Ce1Zpmiv.js";import"./Sector-BVsQ6t1D.js";import"./Symbols-Cd74flzx.js";import"./Curve-CTi9DAae.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-G9AZeeqA.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
