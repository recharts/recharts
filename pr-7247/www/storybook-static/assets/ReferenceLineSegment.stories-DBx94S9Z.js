import{e}from"./iframe-CgD2l6ll.js";import{R as i}from"./arrayEqualityCheck-Ce8ToQce.js";import{C as p}from"./ComposedChart-BtEXXQiL.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CJmhTrC2.js";import{X as s}from"./XAxis-Dwv3lvMC.js";import{Y as c}from"./YAxis-B1mR4R6T.js";import{L as d}from"./Line-CWagXAtR.js";import{R as g}from"./ReferenceLine-BZfwOrgE.js";import{R as f}from"./RechartsHookInspector-wCO4fGuE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcwZVjgI.js";import"./immer-CSa9Hlzz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Csl_cz9v.js";import"./index-CiRw8P2v.js";import"./hooks-Bpy6m5AM.js";import"./axisSelectors-odqRCvmi.js";import"./d3-scale-BuJMnYaW.js";import"./zIndexSlice-CWeG0hvl.js";import"./renderedTicksSlice-BTs2Zr2I.js";import"./CartesianChart-Dnb9hNXP.js";import"./chartDataContext-CpiPBezf.js";import"./CategoricalChart-CrkBWVhR.js";import"./CartesianAxis-CFnaMpqS.js";import"./Layer-xPACpCXS.js";import"./Text-B-yzB-LI.js";import"./DOMUtils-CLb0DfXc.js";import"./Label-D_DKdnsr.js";import"./ZIndexLayer-8FhZChLk.js";import"./types-CO3nSITq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DT-vzjkJ.js";import"./ActivePoints-CfIeRm58.js";import"./Dot-CmUBOjxz.js";import"./RegisterGraphicalItemId-DQH7cQCp.js";import"./ErrorBarContext-eq28NwTt.js";import"./GraphicalItemClipPath-oqYXxjvR.js";import"./SetGraphicalItem-Be8y5kPC.js";import"./useAnimationId-DgqiEA4Q.js";import"./getRadiusAndStrokeWidthFromDot-BIOm4JA6.js";import"./ActiveShapeUtils-BuoidUZn.js";import"./isPlainObject-BR2GQDLn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdyxrGVo.js";import"./Trapezoid-G-FN5Gcg.js";import"./Sector-DgCnGScK.js";import"./Symbols-KXE8aVcl.js";import"./symbol-CDbbQw2g.js";import"./step-DpdY8Awj.js";import"./Curve-CvT7tHbE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dt6lrkA2.js";import"./ChartSizeDimensions-D4uuPom-.js";import"./OffsetShower-Cc0zOxiQ.js";import"./PlotAreaShower-DDf_tE0M.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
