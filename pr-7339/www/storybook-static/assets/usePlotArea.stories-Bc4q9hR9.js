import{e as t}from"./iframe-hEzUtsMW.js";import{P as a}from"./PlotAreaShower-kf7JFG6K.js";import{Y as p}from"./hooks-BpIGMeVK.js";import{g as s}from"./arrayEqualityCheck-x5atMu4i.js";import{C as n}from"./ComposedChart-DIb01qKn.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-Bw4keAE2.js";import{X as h}from"./XAxis-CmasoGgc.js";import{Y as c}from"./YAxis-DogN-io6.js";import{L as g}from"./Legend-L0JleGkh.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BYr3kQiS.js";import"./immer-D2mt-X_3.js";import"./axisSelectors-DpQuKI8d.js";import"./d3-scale-D4Rky8AA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DVL_2ynI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-fdgiBftW.js";import"./index-B2wa4hnc.js";import"./zIndexSlice-C-CqVCIy.js";import"./renderedTicksSlice-Dvxj7DTa.js";import"./CartesianChart-D_wgf81F.js";import"./chartDataContext-CIGqpd_s.js";import"./CategoricalChart-CUEc2NUM.js";import"./Layer-BzjUvoq3.js";import"./ReactUtils-CILnJ9bI.js";import"./Label-DAj1mr9j.js";import"./Text-7nbNQAIW.js";import"./DOMUtils-CHISDaUn.js";import"./ZIndexLayer-D2roQss2.js";import"./ActivePoints-BEj7A802.js";import"./Dot-DjJx9Xmg.js";import"./types-CIvV1oOa.js";import"./RegisterGraphicalItemId-DEIEDShO.js";import"./ErrorBarContext-BKh5vOop.js";import"./GraphicalItemClipPath-DztVjT6a.js";import"./SetGraphicalItem-JFejgF9M.js";import"./useAnimationId-nSTPw_c2.js";import"./getRadiusAndStrokeWidthFromDot-ZgYi_nYk.js";import"./ActiveShapeUtils-CvZRJyk9.js";import"./isPlainObject-XAJ6_CVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrXQ0ZF2.js";import"./Trapezoid-CP7Jy4rV.js";import"./Sector-DZ1bqHIH.js";import"./Symbols-DpJ4BPQH.js";import"./symbol-Bv6t7YtK.js";import"./step-nV8fFjWt.js";import"./Curve-DljUrqTb.js";import"./CartesianAxis-DW2tMO5n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DIirkKhH.js";import"./uniqBy-BMKJIO4n.js";import"./iteratee-HN1CE_6M.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
