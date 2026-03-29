import{e as t}from"./iframe-DyjRblV4.js";import{P as a}from"./PlotAreaShower-DD9Xt5FU.js";import{c as p}from"./hooks-CiwwtQbj.js";import{R as s}from"./arrayEqualityCheck-BCBk4eJo.js";import{C as n}from"./ComposedChart-ageMn8L8.js";import{L as l}from"./Line-mAT0SQrf.js";import{X as d}from"./XAxis-3tj5XX5g.js";import{Y as h}from"./YAxis-CV1izHWi.js";import{L as c}from"./Legend-CSK-HtRb.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BWUwefGk.js";import"./immer-DeoYJGCn.js";import"./axisSelectors-C6wd-jHd.js";import"./d3-scale-BncasbBD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4AlTuZQw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFEsmCfM.js";import"./index-OiAZIktC.js";import"./zIndexSlice-D853Na5_.js";import"./renderedTicksSlice-bDrbmMTk.js";import"./CartesianChart-DR7Wyq8A.js";import"./chartDataContext-CG_sj1-6.js";import"./CategoricalChart-DetmSIYy.js";import"./Layer-D5cQtuvM.js";import"./ReactUtils-Q3LPRUl3.js";import"./Label-DnTlQwVU.js";import"./Text-BbnvQ86I.js";import"./DOMUtils-Byght_Oi.js";import"./ZIndexLayer-B-XtZ0gD.js";import"./ActivePoints-GgK6dtPd.js";import"./Dot-DOEX6Lb3.js";import"./types-ffHtiOpO.js";import"./RegisterGraphicalItemId-DvhT43Lq.js";import"./ErrorBarContext-DYFWZfKJ.js";import"./GraphicalItemClipPath-DHsoSQ6I.js";import"./SetGraphicalItem-DjBG-u5C.js";import"./useAnimationId-DZzgYgKg.js";import"./getRadiusAndStrokeWidthFromDot-B3zNGCYt.js";import"./ActiveShapeUtils-DLWy5yPh.js";import"./isPlainObject-B8lTeUZ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-4UGNDp.js";import"./Trapezoid-BpRYxRsm.js";import"./Sector-CxnAykfe.js";import"./Symbols-BQK3uzvy.js";import"./symbol-5KBLnT74.js";import"./step-B9ndRdpI.js";import"./Curve-Cf07iBBR.js";import"./CartesianAxis-D4rKauGt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BrnMwT_8.js";import"./uniqBy-CRPdqXmG.js";import"./iteratee-DQuCOy5T.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
