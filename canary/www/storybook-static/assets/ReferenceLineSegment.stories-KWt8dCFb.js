import{e}from"./iframe-DrZHGfnp.js";import{g as i}from"./arrayEqualityCheck-BU1FgpAp.js";import{C as a}from"./ComposedChart-DxmmuLi3.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-CyZhB5js.js";import{X as s}from"./XAxis-CfPxufGn.js";import{Y as c}from"./YAxis-BDktYU23.js";import{L as d}from"./Line-CIA-i1-C.js";import{R as g}from"./ReferenceLine-DKqxOs1v.js";import{R as f}from"./RechartsHookInspector-C7Iml_JQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DYZAgT61.js";import"./immer-D0UXwCcn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./d3-scale-txqkfOII.js";import"./zIndexSlice-D-dyI62l.js";import"./renderedTicksSlice-7FEKlWww.js";import"./CartesianChart-DJW3KXl1.js";import"./chartDataContext-C7FGjj0C.js";import"./CategoricalChart-iLXWxvTy.js";import"./CartesianAxis-DI4oFfLH.js";import"./Layer-ClTbBP2Y.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./Label-BqIF3DzG.js";import"./ZIndexLayer-BfJNfeY9.js";import"./types-6QYLxKbI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BOI2pjPZ.js";import"./step-BToukfgR.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DDlt2sQ2.js";import"./ActivePoints-Ef6nRbul.js";import"./Dot-DoeZby35.js";import"./RegisterGraphicalItemId-BFqXK8dS.js";import"./ErrorBarContext-RFgpZOgG.js";import"./GraphicalItemClipPath-DRJNib_j.js";import"./SetGraphicalItem-BQUpenlh.js";import"./useAnimationId-BQVYm0pl.js";import"./getRadiusAndStrokeWidthFromDot-DUr3gs5u.js";import"./ActiveShapeUtils-Dr-kHcGB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BaPlyvUD.js";import"./ChartSizeDimensions-y6v6hFmg.js";import"./OffsetShower-BQ-We3NI.js";import"./PlotAreaShower-DUTHK_JT.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
