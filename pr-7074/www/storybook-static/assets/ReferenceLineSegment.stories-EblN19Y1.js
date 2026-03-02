import{e}from"./iframe-DhkZ2o0m.js";import{R as i}from"./arrayEqualityCheck-DiorVL0F.js";import{C as p}from"./ComposedChart-BeMXkwbT.js";import{C as a}from"./CartesianGrid-fnsXYIZE.js";import{X as n}from"./XAxis-C7MynCpy.js";import{Y as s}from"./YAxis-BaziairH.js";import{L as c}from"./Line-DpFataY0.js";import{R as d}from"./ReferenceLine-BabjzhQJ.js";import{R as g}from"./RechartsHookInspector-BuoZ4ObR.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CSGl7VrG.js";import"./immer-Bkx33mOQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CmxS5fzr.js";import"./index-SD_aaOBA.js";import"./hooks-OILl07sr.js";import"./axisSelectors-Cvg0ebzb.js";import"./d3-scale-q2jyLF3t.js";import"./zIndexSlice-DaOHrDE6.js";import"./renderedTicksSlice-D1lm_SFB.js";import"./CartesianChart-aiKFXcKI.js";import"./chartDataContext-B8muVvAS.js";import"./CategoricalChart-BQJMywxR.js";import"./CartesianAxis-Cd-ivPq_.js";import"./Layer-d6_qX3Uw.js";import"./Text-DrfD7ZzH.js";import"./DOMUtils-qE1uPIkW.js";import"./Label-5AtDVNzN.js";import"./ZIndexLayer-CshXapoA.js";import"./types-BTJpC2jO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqOB82pn.js";import"./ActivePoints-DHfGIbeU.js";import"./Dot-IQBfyTf2.js";import"./RegisterGraphicalItemId--Yyxg6pn.js";import"./ErrorBarContext-e2M7C2yw.js";import"./GraphicalItemClipPath-yVVA2tQv.js";import"./SetGraphicalItem-_G_kPX0B.js";import"./useAnimationId-C7zWi5EW.js";import"./getRadiusAndStrokeWidthFromDot-CKsNqEkn.js";import"./ActiveShapeUtils-BaWWvfWL.js";import"./isPlainObject-vBW-S9US.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C8JV8bc4.js";import"./Trapezoid-C1XUw6XG.js";import"./Sector-8SUCxTQC.js";import"./Symbols-BdtXuEdD.js";import"./symbol-DeXXZ1mf.js";import"./step-BPbIkI3w.js";import"./Curve-B6e_2wmJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CflVzEfn.js";import"./ChartSizeDimensions-lGHONQf_.js";import"./OffsetShower-DEQj44LB.js";import"./PlotAreaShower-DvHNujuQ.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
