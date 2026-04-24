import{e as t}from"./iframe-C3KLAr_X.js";import{P as a}from"./PlotAreaShower-9mAhzD5z.js";import{c as p}from"./hooks-DZuDX4va.js";import{R as s}from"./arrayEqualityCheck-DnI1m1N4.js";import{C as n}from"./ComposedChart-DlW39P_1.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-_AKn2THI.js";import{X as h}from"./XAxis-BBmktT_d.js";import{Y as c}from"./YAxis-BzdeP421.js";import{L as g}from"./Legend-zcFKlEVB.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BUMoLVC9.js";import"./immer-7U5Tji_6.js";import"./axisSelectors-CWLPDJ8I.js";import"./d3-scale-ZNDiiXCQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDRZbdh0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHSmfZwv.js";import"./index-C-7EyPyC.js";import"./zIndexSlice-Cl9Q2qHp.js";import"./renderedTicksSlice-Y_XNygaP.js";import"./CartesianChart-CwI8QMMb.js";import"./chartDataContext-BIjR8iwE.js";import"./CategoricalChart-CWEKSGB2.js";import"./Layer-gez65z60.js";import"./ReactUtils-Dl7XDcr4.js";import"./Label-D03TCqMA.js";import"./Text-CKsAfS2q.js";import"./DOMUtils-BTX_GG3X.js";import"./ZIndexLayer-ZwdT_RoZ.js";import"./ActivePoints-C0SjOUTr.js";import"./Dot-b607mIJy.js";import"./types-CUBBvZMp.js";import"./RegisterGraphicalItemId-uSngcEvn.js";import"./ErrorBarContext-pe48v0HA.js";import"./GraphicalItemClipPath-CrZc4JF3.js";import"./SetGraphicalItem-CgbMvRrw.js";import"./useAnimationId-BHPPVsUk.js";import"./getRadiusAndStrokeWidthFromDot-CfDNziOs.js";import"./ActiveShapeUtils-BDuTGezX.js";import"./isPlainObject-1BlW33tf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNR6RJPB.js";import"./Trapezoid-Bo7unZPt.js";import"./Sector-DDPunuhX.js";import"./Symbols-BpWkyHSI.js";import"./symbol-Bi41egzv.js";import"./step-nMlGD7PS.js";import"./Curve-DuWzArMY.js";import"./CartesianAxis-B4oXNbAG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BzB57i36.js";import"./uniqBy-Cv-Iaane.js";import"./iteratee-Bd1b-YF_.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
