import{e as t}from"./iframe-DDDnlj5f.js";import{P as a}from"./PlotAreaShower-DDwsWzkY.js";import{c as p}from"./hooks-Dv-UaG4_.js";import{R as s}from"./arrayEqualityCheck-CJpSjh_E.js";import{C as n}from"./ComposedChart-Ce7krGfK.js";import{L as l}from"./Line-X_BIU_ye.js";import{X as d}from"./XAxis-CWnYqww0.js";import{Y as h}from"./YAxis-BsKc4EC-.js";import{L as c}from"./Legend-BN3eH4xq.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CGFO1lez.js";import"./immer-aj6qr0b6.js";import"./axisSelectors-CDHzLZeD.js";import"./d3-scale-pmFb8TKN.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DYeysdtP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CrpiHev6.js";import"./index-CMSlVVpG.js";import"./zIndexSlice-DoI0yJNb.js";import"./renderedTicksSlice-k6HnSAnM.js";import"./CartesianChart-D5sDgHmv.js";import"./chartDataContext-ib7DGGK_.js";import"./CategoricalChart-h2VJliXU.js";import"./Layer-BtE1IS0j.js";import"./ReactUtils-CjPSIKmy.js";import"./Label-VNLDkr3Z.js";import"./Text-C-kvncvF.js";import"./DOMUtils-DDovTr1I.js";import"./ZIndexLayer-DkrOw8iH.js";import"./ActivePoints-IhqFWUPQ.js";import"./Dot-BEStURxK.js";import"./types-BPe_V6d-.js";import"./RegisterGraphicalItemId-D4tYqbmw.js";import"./ErrorBarContext-E3Vm-e-r.js";import"./GraphicalItemClipPath-CuDHFuAP.js";import"./SetGraphicalItem-CHHuJTp3.js";import"./useAnimationId-Dkj4_Bqz.js";import"./getRadiusAndStrokeWidthFromDot-BWHQ3Uig.js";import"./ActiveShapeUtils-BfdtDxL7.js";import"./isPlainObject-CJH28dtQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cb4jcIHL.js";import"./Trapezoid-DeNT7-hb.js";import"./Sector-BQbNJdDe.js";import"./Symbols-9n4DXsSp.js";import"./symbol-B5WodTQ6.js";import"./step-BKhUoFo2.js";import"./Curve-SLwfiusm.js";import"./CartesianAxis-CMW5fm9o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-03RznBD_.js";import"./uniqBy-CE60lU9f.js";import"./iteratee-BZMdZ1c9.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
