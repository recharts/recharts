import{e as t}from"./iframe-CgD2l6ll.js";import{P as a}from"./PlotAreaShower-DDf_tE0M.js";import{c as p}from"./hooks-Bpy6m5AM.js";import{R as s}from"./arrayEqualityCheck-Ce8ToQce.js";import{C as n}from"./ComposedChart-BtEXXQiL.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CWagXAtR.js";import{X as h}from"./XAxis-Dwv3lvMC.js";import{Y as c}from"./YAxis-B1mR4R6T.js";import{L as g}from"./Legend-B8culLxq.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-D4uuPom-.js";import"./immer-CSa9Hlzz.js";import"./axisSelectors-odqRCvmi.js";import"./d3-scale-BuJMnYaW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcwZVjgI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Csl_cz9v.js";import"./index-CiRw8P2v.js";import"./zIndexSlice-CWeG0hvl.js";import"./renderedTicksSlice-BTs2Zr2I.js";import"./CartesianChart-Dnb9hNXP.js";import"./chartDataContext-CpiPBezf.js";import"./CategoricalChart-CrkBWVhR.js";import"./Layer-xPACpCXS.js";import"./ReactUtils-DT-vzjkJ.js";import"./Label-D_DKdnsr.js";import"./Text-B-yzB-LI.js";import"./DOMUtils-CLb0DfXc.js";import"./ZIndexLayer-8FhZChLk.js";import"./ActivePoints-CfIeRm58.js";import"./Dot-CmUBOjxz.js";import"./types-CO3nSITq.js";import"./RegisterGraphicalItemId-DQH7cQCp.js";import"./ErrorBarContext-eq28NwTt.js";import"./GraphicalItemClipPath-oqYXxjvR.js";import"./SetGraphicalItem-Be8y5kPC.js";import"./useAnimationId-DgqiEA4Q.js";import"./getRadiusAndStrokeWidthFromDot-BIOm4JA6.js";import"./ActiveShapeUtils-BuoidUZn.js";import"./isPlainObject-BR2GQDLn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdyxrGVo.js";import"./Trapezoid-G-FN5Gcg.js";import"./Sector-DgCnGScK.js";import"./Symbols-KXE8aVcl.js";import"./symbol-CDbbQw2g.js";import"./step-DpdY8Awj.js";import"./Curve-CvT7tHbE.js";import"./CartesianAxis-CFnaMpqS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DNzlmXmU.js";import"./uniqBy-CqSCdlOS.js";import"./iteratee-Cf9bYLPC.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
