import{e}from"./iframe-Ch1Isql8.js";import{R as i}from"./arrayEqualityCheck-BCEbDsDx.js";import{C as p}from"./ComposedChart-BG01JFWy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CftF3wqv.js";import{X as s}from"./XAxis-BKww8jIv.js";import{Y as c}from"./YAxis-BZ1lWBvu.js";import{L as d}from"./Line-Cj_RlCcR.js";import{R as g}from"./ReferenceLine-Cs9QaTYH.js";import{R as f}from"./RechartsHookInspector-DbN8VMTu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2WRALEr.js";import"./immer-BTgrVrx0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHlnvpBC.js";import"./index-BQodkfcp.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./zIndexSlice-CfYpWTyk.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./CartesianAxis-BTQibmSQ.js";import"./Layer-BO4GuAqP.js";import"./Text-BVN_POYl.js";import"./DOMUtils-10gf_B-M.js";import"./Label-DD8AaqpA.js";import"./ZIndexLayer-DjVbUmgd.js";import"./types-BJb3G4uR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CsOHi-wi.js";import"./ActivePoints-BoXPQfRa.js";import"./Dot-BiNuTUfQ.js";import"./RegisterGraphicalItemId-B38aETS6.js";import"./ErrorBarContext-B1gBZht8.js";import"./GraphicalItemClipPath-5ic9tQHz.js";import"./SetGraphicalItem-CK5a6DJE.js";import"./useAnimationId-BC-9oBmZ.js";import"./getRadiusAndStrokeWidthFromDot-CEWlgPHm.js";import"./ActiveShapeUtils-Ds4ws-40.js";import"./isPlainObject-CbEMMj1e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcZ1nspL.js";import"./Trapezoid-CyEP7tU2.js";import"./Sector-DNP4xewC.js";import"./Symbols-hNJtZeth.js";import"./symbol-DKQgrSwN.js";import"./step-B9yE4hVt.js";import"./Curve-DgBmrfnw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B9MqbPA_.js";import"./ChartSizeDimensions-Xxd3TXQk.js";import"./OffsetShower-CEfGPMuj.js";import"./PlotAreaShower-BXMcaFZq.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
