import{e as t}from"./iframe-BuJLGa6N.js";import{P as a}from"./PlotAreaShower-BBiCyrXZ.js";import{c as p}from"./hooks-Bfg6Hj5B.js";import{R as s}from"./arrayEqualityCheck-CfOAsDPD.js";import{C as n}from"./ComposedChart-BqBphd5X.js";import{L as l}from"./Line-DDBsSeKz.js";import{X as d}from"./XAxis-DPYriBmx.js";import{Y as h}from"./YAxis-BN83cofH.js";import{L as c}from"./Legend-DgAWWeDp.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DBM4r-MV.js";import"./immer-Cs2StgEe.js";import"./axisSelectors-vZNfkK00.js";import"./d3-scale-C2CClwD1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PPT4dvVD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zGeEQO-1.js";import"./index-CNZpMZb7.js";import"./zIndexSlice-CtkE_I8o.js";import"./renderedTicksSlice-DMmH3DTh.js";import"./CartesianChart-DcpXVgwl.js";import"./chartDataContext-DXuqrhw-.js";import"./CategoricalChart-DkSrZf16.js";import"./Layer-CLRnIkGN.js";import"./ReactUtils-Di8J4KTy.js";import"./Label-DCa5EEbs.js";import"./Text-OPrfWidj.js";import"./DOMUtils-DdVykUsy.js";import"./ZIndexLayer-BMsw-0Pa.js";import"./ActivePoints-Czt_wSo-.js";import"./Dot-B4FiKnl2.js";import"./types-DMmD0s4W.js";import"./RegisterGraphicalItemId-CZEhY4ID.js";import"./ErrorBarContext-DcDtiioO.js";import"./GraphicalItemClipPath-D_CU0iam.js";import"./SetGraphicalItem-DGBCZizG.js";import"./useAnimationId-CMTxjP3y.js";import"./getRadiusAndStrokeWidthFromDot-DYi0rXYC.js";import"./ActiveShapeUtils-CXfOhm2i.js";import"./isPlainObject-Crq8bwtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cp8-G3K2.js";import"./Trapezoid-3-ecroEI.js";import"./Sector-CuxgId53.js";import"./Symbols-BJaoORbT.js";import"./symbol-SMqn5J9_.js";import"./step-8Y20vsos.js";import"./Curve-D9cP6KBy.js";import"./CartesianAxis-C6pdCV3P.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BrFb8VVi.js";import"./uniqBy-iRT60m2x.js";import"./iteratee-BDAL2q7w.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
