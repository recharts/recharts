import{e as t}from"./iframe-DzhPvN_j.js";import{P as a}from"./PlotAreaShower-Ch9v7dMV.js";import{c as p}from"./hooks-Cd6CKD6W.js";import{R as s}from"./arrayEqualityCheck-BbmOyD_G.js";import{C as n}from"./ComposedChart-HheWKBIJ.js";import{L as l}from"./Line-BC7PGKux.js";import{X as d}from"./XAxis-DZpORi3T.js";import{Y as h}from"./YAxis-CJCzR98R.js";import{L as c}from"./Legend-uAOOqC4N.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CZzZunh8.js";import"./immer-DMYiXdM8.js";import"./axisSelectors-OzG46XbO.js";import"./d3-scale-Cb1pH4Jp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D5C472LP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRkniHVj.js";import"./index-Cw6ekdu2.js";import"./zIndexSlice-5RAhS0gW.js";import"./renderedTicksSlice-DXS4yQsn.js";import"./CartesianChart-poiqq0Wp.js";import"./chartDataContext-CN9Cvh4X.js";import"./CategoricalChart-CBxLoiN8.js";import"./Layer-Ckqyyj_I.js";import"./ReactUtils-B8wQ0lPM.js";import"./Label-CHDEQY5T.js";import"./Text-BqZmDUPE.js";import"./DOMUtils-vP3gppvy.js";import"./ZIndexLayer-9g5l0O9I.js";import"./ActivePoints-BQliTLi8.js";import"./Dot-CmLP1K6L.js";import"./types-9iuX30XL.js";import"./RegisterGraphicalItemId-Cy7sjBKU.js";import"./ErrorBarContext-BWKSo9NZ.js";import"./GraphicalItemClipPath-Ca8NlFcX.js";import"./SetGraphicalItem-mQIOZYtb.js";import"./useAnimationId-Bm5L9VBy.js";import"./getRadiusAndStrokeWidthFromDot-Dzez4mct.js";import"./ActiveShapeUtils-BGxztl8t.js";import"./isPlainObject-D9nlrq_x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cFF1lzvY.js";import"./Trapezoid-CWsYalEn.js";import"./Sector-CP3wITBk.js";import"./Symbols-D_1r08sf.js";import"./symbol-pZVEj6PC.js";import"./step-DPzB36jn.js";import"./Curve-Bg7OAFiB.js";import"./CartesianAxis-CcEKfal4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-FCvPp8XD.js";import"./uniqBy-Cr1l51kb.js";import"./iteratee-BZcK010Q.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
