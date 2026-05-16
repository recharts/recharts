import{e as t}from"./iframe-pel8cYCN.js";import{P as a}from"./PlotAreaShower-BJPLXysn.js";import{Y as p}from"./hooks-D-fRP47Y.js";import{g as s}from"./arrayEqualityCheck-C_lOmCrI.js";import{C as n}from"./ComposedChart-BXIuO7D7.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-BwrWq8g2.js";import{X as h}from"./XAxis-B599S9Vu.js";import{Y as c}from"./YAxis-BDsVqKg4.js";import{L as g}from"./Legend-BLh_lLO9.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-KFbSwMPV.js";import"./immer-BJQdivTr.js";import"./axisSelectors-Bb4Kms9I.js";import"./d3-scale-CX31JByl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YrDhwYNk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSDFgvQ-.js";import"./index-BtBEICN3.js";import"./zIndexSlice-ymPJrgdD.js";import"./renderedTicksSlice-DOQ_XGYo.js";import"./CartesianChart-BlzYSjsM.js";import"./chartDataContext-Edg6lPwK.js";import"./CategoricalChart-B61I782z.js";import"./Layer-CNeytfD9.js";import"./ReactUtils-MkRs3AIp.js";import"./Label-LVsFLhHv.js";import"./Text-CYIA95SW.js";import"./DOMUtils-ctqdh0oB.js";import"./ZIndexLayer-BvzXDAda.js";import"./ActivePoints-DvhKq6eb.js";import"./Dot-CC60-gqd.js";import"./types-Xh1xXsKt.js";import"./RegisterGraphicalItemId-DwjBwfbK.js";import"./ErrorBarContext-DJfRhZLU.js";import"./GraphicalItemClipPath-BGEnX0Xy.js";import"./SetGraphicalItem-fB0iJna-.js";import"./useAnimationId-v_N6QXXH.js";import"./getRadiusAndStrokeWidthFromDot-Co4GzyJq.js";import"./ActiveShapeUtils-DNJLSjTo.js";import"./isPlainObject-CZCkl5XT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwHhsTLl.js";import"./Trapezoid-B96cM-TC.js";import"./Sector-CNApQaS1.js";import"./Symbols-DxzOQiX8.js";import"./symbol-D7iNy2hw.js";import"./step-DDfuaYno.js";import"./Curve-DUNlDEm2.js";import"./CartesianAxis-CHS0WdpC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DnweuCUb.js";import"./uniqBy-VTopnPt7.js";import"./iteratee-B40Sj4cN.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
