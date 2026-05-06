import{e as t}from"./iframe-6KIzFwNo.js";import{P as a}from"./PlotAreaShower-BdnS3yQL.js";import{c as p}from"./hooks-DBLrG0Zs.js";import{R as s}from"./arrayEqualityCheck-CGqQmqAs.js";import{C as n}from"./ComposedChart-CFeB8Qm9.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BsmGvey2.js";import{X as h}from"./XAxis-D1NIlvkv.js";import{Y as c}from"./YAxis-BQuCUfzU.js";import{L as g}from"./Legend-BxMxi4eG.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Cv_HNug1.js";import"./immer-ql4DR2MT.js";import"./axisSelectors-IZ0_1Z0f.js";import"./d3-scale-CbScBmFc.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCemV21k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BS52G--d.js";import"./index-CsYEUaZR.js";import"./zIndexSlice-NyQa_NDp.js";import"./renderedTicksSlice-Bre3xjAe.js";import"./CartesianChart-BlXPw11X.js";import"./chartDataContext-BRQTC3wB.js";import"./CategoricalChart-C7SCseXA.js";import"./Layer-qh1dFQeJ.js";import"./ReactUtils-6iymp8WO.js";import"./Label-LIb90dQ2.js";import"./Text-EuDfZQJr.js";import"./DOMUtils-CF_DubJK.js";import"./ZIndexLayer-oU3hoYkX.js";import"./ActivePoints-DJj1zq0e.js";import"./Dot-CqmXJMhg.js";import"./types-Bw6Zsg7c.js";import"./RegisterGraphicalItemId-BJjNu8aV.js";import"./ErrorBarContext-BCQYaQUJ.js";import"./GraphicalItemClipPath-BiTFGdna.js";import"./SetGraphicalItem-B20_5yrQ.js";import"./useAnimationId-sBKnBvXo.js";import"./getRadiusAndStrokeWidthFromDot-Df503nhX.js";import"./ActiveShapeUtils-DmtFxvwi.js";import"./isPlainObject-CESm1hTz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSMfk7Q.js";import"./Trapezoid-R4CEZFO4.js";import"./Sector-BUTYQkfs.js";import"./Symbols-MySoeztG.js";import"./symbol-9PvFUqwr.js";import"./step-CIIfuNim.js";import"./Curve-BHLjwYFi.js";import"./CartesianAxis-ByaVWi8_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BgX62E1v.js";import"./uniqBy-DVX4SdIc.js";import"./iteratee-BVIhKU_O.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
