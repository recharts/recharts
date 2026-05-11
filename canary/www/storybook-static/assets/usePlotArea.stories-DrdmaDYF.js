import{e as t}from"./iframe-DHSCsAdF.js";import{P as a}from"./PlotAreaShower-BF-kz2CC.js";import{c as p}from"./hooks-Ed4LhnTQ.js";import{R as s}from"./arrayEqualityCheck-DejELsrN.js";import{C as n}from"./ComposedChart-ClPTZor6.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-xRKz7Lqu.js";import{X as h}from"./XAxis-rIWvyQc_.js";import{Y as c}from"./YAxis-B3RnLl7T.js";import{L as g}from"./Legend-wGf0l-XN.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-na2CXaMS.js";import"./immer-B7vO4s3P.js";import"./axisSelectors-CI0vprku.js";import"./d3-scale-m9dtnhXI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DdBt44A0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DegZicoB.js";import"./index-CpBtaSsl.js";import"./zIndexSlice-CsWdvizj.js";import"./renderedTicksSlice-BJJo2R47.js";import"./CartesianChart-OvkPOyqJ.js";import"./chartDataContext-CG3f3Y43.js";import"./CategoricalChart-DOIkqHpB.js";import"./Layer-CgIzBpZ9.js";import"./ReactUtils-CI0cWBwW.js";import"./Label-C3rJ2_4a.js";import"./Text-BU_Eo4vH.js";import"./DOMUtils-DnRUdIba.js";import"./ZIndexLayer-NxKSFRC9.js";import"./ActivePoints-BU40hces.js";import"./Dot-BKOJ7ZOA.js";import"./types-BJ3oAoHr.js";import"./RegisterGraphicalItemId-Co8itO9h.js";import"./ErrorBarContext-BnFLkwS3.js";import"./GraphicalItemClipPath-7TaZPKiL.js";import"./SetGraphicalItem-CGPj629n.js";import"./useAnimationId-DdH8uK_v.js";import"./getRadiusAndStrokeWidthFromDot-C6SN24Cr.js";import"./ActiveShapeUtils-D-9eavqk.js";import"./isPlainObject-DIsRAxNl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-nZJBYK.js";import"./Trapezoid-DaZMlX5v.js";import"./Sector-DwAaS_QE.js";import"./Symbols-ChUxQx2e.js";import"./symbol-Dw26CW2u.js";import"./step-BXBXLUST.js";import"./Curve-DdDf1hH6.js";import"./CartesianAxis-BCj8T9-Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DK8TM0kx.js";import"./uniqBy-BXsrqUuV.js";import"./iteratee-RqtmE6ui.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
