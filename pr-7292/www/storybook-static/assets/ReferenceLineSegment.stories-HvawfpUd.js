import{e}from"./iframe-CG0qDtBl.js";import{R as i}from"./arrayEqualityCheck-nJzMu5L8.js";import{C as p}from"./ComposedChart-D_9c7I0x.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D5faMACC.js";import{X as s}from"./XAxis-DN51EeVs.js";import{Y as c}from"./YAxis-BFtNCWGe.js";import{L as d}from"./Line-DFOB5IU8.js";import{R as g}from"./ReferenceLine-BCIya0YD.js";import{R as f}from"./RechartsHookInspector-BhrhKqGk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-68SeDKrz.js";import"./immer-BaG7xZes.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B645yxTo.js";import"./index-LX72MUsT.js";import"./hooks-DK5-oMyB.js";import"./axisSelectors-Cs152sBG.js";import"./d3-scale-BKHwRxJ5.js";import"./zIndexSlice-DlNAFrb6.js";import"./renderedTicksSlice-BjAt54f-.js";import"./CartesianChart-BOM1G1ij.js";import"./chartDataContext-BK7b2xjO.js";import"./CategoricalChart-gdykgj2P.js";import"./CartesianAxis-CFrXRlKT.js";import"./Layer-C6aCRlIK.js";import"./Text-D5ILnTXV.js";import"./DOMUtils-2oBG8NIz.js";import"./Label-xzQt__ei.js";import"./ZIndexLayer-_OpZUWnc.js";import"./types--uSAtEO5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B6bmemMx.js";import"./ActivePoints-2-a50J1l.js";import"./Dot-rS4fPZDW.js";import"./RegisterGraphicalItemId-CznzVPtc.js";import"./ErrorBarContext-BZfLXdZw.js";import"./GraphicalItemClipPath-BUh3FPdj.js";import"./SetGraphicalItem-IaY6gKdE.js";import"./useAnimationId-CKL_PQXN.js";import"./getRadiusAndStrokeWidthFromDot-BIESFlMm.js";import"./ActiveShapeUtils-5FEmW25K.js";import"./isPlainObject-BUIBTXtZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_mXRa_P4.js";import"./Trapezoid-DlYu-bjE.js";import"./Sector-D2vf8wF7.js";import"./Symbols-BbHBglZG.js";import"./symbol-BC68W8wa.js";import"./step-CYBADRl-.js";import"./Curve--tzE_BoT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DjPC5fQL.js";import"./ChartSizeDimensions-BGpNAELR.js";import"./OffsetShower-D2nsT2yB.js";import"./PlotAreaShower-CPUgyAdx.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
