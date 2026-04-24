import{e as t}from"./iframe-jbS-E__g.js";import{P as a}from"./PlotAreaShower-CIgqmqyc.js";import{c as p}from"./hooks-BJbsnZ8W.js";import{R as s}from"./arrayEqualityCheck-Bc6HaNgk.js";import{C as n}from"./ComposedChart-CltpXdcI.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Etl43fu5.js";import{X as h}from"./XAxis-D2ruk6hB.js";import{Y as c}from"./YAxis-pXEMWudQ.js";import{L as g}from"./Legend-arlg7icL.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BpE-Gxiy.js";import"./immer-1JIHG1sP.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./Layer-D3-cQotP.js";import"./ReactUtils-CmIIaVE7.js";import"./Label-CqNEB3cA.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./ZIndexLayer-C0UmvjN1.js";import"./ActivePoints-BAygIn8R.js";import"./Dot-B5SXOt0E.js";import"./types-KpzOghRu.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./ErrorBarContext-BTnDLWKc.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./useAnimationId-Dl-7lH7S.js";import"./getRadiusAndStrokeWidthFromDot-BQh-5tcv.js";import"./ActiveShapeUtils-BRRS2IIP.js";import"./isPlainObject-CVxhLbCo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CttT3kPR.js";import"./Trapezoid-BNwixCzS.js";import"./Sector-C7-FdoJb.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";import"./step-CRkklqfM.js";import"./Curve-BHonL5AG.js";import"./CartesianAxis-DVvLgkRy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CiRQlEhg.js";import"./uniqBy-CPO7hTdl.js";import"./iteratee-BUzB0L-p.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
