import{e}from"./iframe-m4iUvHHE.js";import{R as i}from"./arrayEqualityCheck-h_ZmhyNH.js";import{C as p}from"./ComposedChart-C6EOsY3Y.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Cyz0CANa.js";import{X as s}from"./XAxis-D0aRIGij.js";import{Y as c}from"./YAxis-CCDUaJX1.js";import{L as d}from"./Line-B2TAto9y.js";import{R as g}from"./ReferenceLine-CVia9s4H.js";import{R as f}from"./RechartsHookInspector-DquHYSn_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./immer-g1bGLmSg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-F72CiqvA.js";import"./index-CrxMp6gE.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./CartesianAxis-CqSuAZnU.js";import"./Layer-CcrS99IB.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./Label-BCusTt26.js";import"./ZIndexLayer-DebxKBww.js";import"./types-ipm49NW_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BGxD9cqm.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./ErrorBarContext-CisfXBtR.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./ActiveShapeUtils-DWhLewKE.js";import"./isPlainObject-BVIwbHuq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNlZhouO.js";import"./Trapezoid-BQrLMZHr.js";import"./Sector-0LK2YG6H.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";import"./step-BaU1N5Sx.js";import"./Curve-lACOSqJl.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
