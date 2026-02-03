import{e}from"./iframe-DPPC5LCd.js";import{R as i}from"./arrayEqualityCheck-Dvk8KT0D.js";import{C as a}from"./ComposedChart-Ds3ekokY.js";import{C as p}from"./CartesianGrid-CvB-qYbV.js";import{X as n}from"./XAxis-BG2Y_xwU.js";import{Y as s}from"./YAxis-BkVN0NTj.js";import{L as c}from"./Line-Df8hhM8R.js";import{R as d}from"./ReferenceLine-CFgt3SN-.js";import{R as g}from"./RechartsHookInspector-Blp8PL-4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-PEDxF674.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./zIndexSlice-Cyke5ZAj.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./CartesianAxis-CbeAAhwj.js";import"./Layer-l1Ju_rpU.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./Label-CyOEca1T.js";import"./ZIndexLayer-BYs5zm3k.js";import"./types-BtZeuRvc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dpo3QY29.js";import"./ActivePoints-bzJzis_r.js";import"./Dot-DGBsmHFR.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./ErrorBarContext-DOTmmgqX.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./useAnimationId-BL1JszpL.js";import"./getRadiusAndStrokeWidthFromDot-r3LToZRM.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdGsT6u6.js";import"./Trapezoid-BQbcDxOL.js";import"./Sector-6q_tG2Nj.js";import"./Symbols-BVjVO6PI.js";import"./Curve-Bys-PvMV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
