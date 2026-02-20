import{e}from"./iframe-DhupoOg_.js";import{R as i}from"./arrayEqualityCheck-1a2j5A1f.js";import{C as a}from"./ComposedChart-mBL9UL86.js";import{C as p}from"./CartesianGrid-CZVdI6-b.js";import{X as n}from"./XAxis-GsEtiJs1.js";import{Y as s}from"./YAxis-Bqh3gjFj.js";import{L as c}from"./Line-JwA_PVGy.js";import{R as d}from"./ReferenceLine-CJ3MKCIT.js";import{R as g}from"./RechartsHookInspector-BRJSRdzz.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTEYvdCP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BO7q4INj.js";import"./hooks-B-j7NBfr.js";import"./axisSelectors-C2OcRccT.js";import"./zIndexSlice-3nE7BOgk.js";import"./renderedTicksSlice-Bj2xHM0I.js";import"./CartesianChart-BeuGUy48.js";import"./chartDataContext-CrqCenWu.js";import"./CategoricalChart-C2IMp10s.js";import"./CartesianAxis-CrD8JHxo.js";import"./Layer-Bu6njlMc.js";import"./Text-ByV2kj0P.js";import"./DOMUtils-gPRAn0h9.js";import"./Label-jW6-M5QE.js";import"./ZIndexLayer-UCgdXbxU.js";import"./types-CAd6nAW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Den_eo7w.js";import"./ActivePoints-CT0rrdoG.js";import"./Dot-h4eiknre.js";import"./RegisterGraphicalItemId-S4zlzp4z.js";import"./ErrorBarContext-DeheRuUe.js";import"./GraphicalItemClipPath-n7T_zXvL.js";import"./SetGraphicalItem-DotNlweO.js";import"./useAnimationId-DwQLM9Vt.js";import"./getRadiusAndStrokeWidthFromDot-CGbuqu4G.js";import"./ActiveShapeUtils-CwO0ADgQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CD_6SwFf.js";import"./Trapezoid-CNwzGgkA.js";import"./Sector-qA3WmdGy.js";import"./Symbols-B_Z7RLio.js";import"./Curve-BbS-sSDe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B1siFWfz.js";import"./ChartSizeDimensions-DQpUS7oV.js";import"./OffsetShower-CF_FCt5b.js";import"./PlotAreaShower-O-owCsXY.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
