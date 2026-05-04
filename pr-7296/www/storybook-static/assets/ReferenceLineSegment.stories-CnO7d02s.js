import{e}from"./iframe-BIeRAvIs.js";import{R as i}from"./arrayEqualityCheck-Bo5lKgUH.js";import{C as p}from"./ComposedChart-Bm_hB9iQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-C9tgilzn.js";import{X as s}from"./XAxis-Bz_wbRMX.js";import{Y as c}from"./YAxis-ChIFeHGD.js";import{L as d}from"./Line-CNyBQv9K.js";import{R as g}from"./ReferenceLine-CQ_8Xeia.js";import{R as f}from"./RechartsHookInspector-ZnpsfR9f.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7afBTwD.js";import"./immer-5-lHdrEI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./hooks-DF9hzSyO.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./zIndexSlice-C0VSrdrd.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./CartesianAxis-2__l5TP8.js";import"./Layer-BzoHvM-S.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./Label-B1v8zCXy.js";import"./ZIndexLayer-BTjArk6I.js";import"./types-DQojIKJi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-hS7xEmGS.js";import"./ActivePoints-efPNJuTS.js";import"./Dot-pi2zX1oI.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./ErrorBarContext-BHrSsU01.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./useAnimationId-C9Uv8ueb.js";import"./getRadiusAndStrokeWidthFromDot-D7Vs4ffU.js";import"./ActiveShapeUtils-Bps_BZs-.js";import"./isPlainObject-l3KiUXnf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYSY3nrg.js";import"./Trapezoid-C_yuwcEm.js";import"./Sector-EPL29HSF.js";import"./Symbols-BeXKfzK2.js";import"./symbol-CFCWUA3z.js";import"./step-CNOKEUU2.js";import"./Curve-BwmaiqIM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CG5u5SYH.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./OffsetShower-VB1mbOI0.js";import"./PlotAreaShower-Dt-mgpmA.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
