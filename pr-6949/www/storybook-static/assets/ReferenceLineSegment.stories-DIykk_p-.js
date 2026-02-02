import{e}from"./iframe-CehQ8xFj.js";import{R as i}from"./arrayEqualityCheck-CJf3kznu.js";import{C as a}from"./ComposedChart-Db5HmFmR.js";import{C as p}from"./CartesianGrid-BqtWDT0T.js";import{X as n}from"./XAxis-Dibf-8ej.js";import{Y as s}from"./YAxis-D-v27uKG.js";import{L as c}from"./Line-7p-G_wDt.js";import{R as d}from"./ReferenceLine-BkqR8slB.js";import{R as g}from"./RechartsHookInspector-C9Dv8rR_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1y00WFc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./zIndexSlice-39s27tLx.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./CartesianAxis-CZCa0md7.js";import"./Layer-6nj2T2Rl.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./Label-Dw6m4C0Z.js";import"./ZIndexLayer-DeWQbK55.js";import"./types-CYKcJHFL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-tMfbrahw.js";import"./ActivePoints-BwDt8lt_.js";import"./Dot-BD7d-X5L.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./ErrorBarContext-CUQfGU6Y.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./useAnimationId-D1z7wJlQ.js";import"./getRadiusAndStrokeWidthFromDot-BvetFLdH.js";import"./ActiveShapeUtils-DjjpZslN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5fxMoAB.js";import"./Trapezoid-Cym11nDl.js";import"./Sector-mF7w8-S5.js";import"./Symbols-D-9teC2q.js";import"./Curve-D1ENGCAK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-jUFHLVIb.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
