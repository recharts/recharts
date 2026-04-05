import{e}from"./iframe-DRAz-MOV.js";import{R as i}from"./arrayEqualityCheck-C8643F2b.js";import{C as p}from"./ComposedChart-O_-CVA72.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CFynsdgL.js";import{X as s}from"./XAxis-LfLbW5h3.js";import{Y as c}from"./YAxis-Exnm2m07.js";import{L as d}from"./Line-CziVn159.js";import{R as g}from"./ReferenceLine-DXDGMUD2.js";import{R as f}from"./RechartsHookInspector-ZnBZyL4x.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./immer-7dbUwIWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./hooks-DKliz_JR.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./zIndexSlice-QFEsuJ_i.js";import"./renderedTicksSlice-C3sDnISd.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./CartesianAxis-BEMLBmX5.js";import"./Layer-7ou2jnr2.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./Label-BA834Vai.js";import"./ZIndexLayer-BQfiKj8k.js";import"./types-BHj1SP9z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C_AD8QSo.js";import"./ActivePoints-6EKZqhHa.js";import"./Dot-DXpzcep7.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./ErrorBarContext-C2uHiTDW.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./useAnimationId-CSxRZUsd.js";import"./getRadiusAndStrokeWidthFromDot-bTkwdsC0.js";import"./ActiveShapeUtils-BkbmdP_u.js";import"./isPlainObject-CaT7z4Jz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIlVtzFE.js";import"./Trapezoid-i_eTbcia.js";import"./Sector-BFFY6GnN.js";import"./Symbols-BE03y18L.js";import"./symbol-BJNbjT1E.js";import"./step-DsP_EtiA.js";import"./Curve-rCu2vvgU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CJqTRlWb.js";import"./ChartSizeDimensions-B-YSta_X.js";import"./OffsetShower-DVMilrOo.js";import"./PlotAreaShower-B89WvJSc.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
