import{e as t}from"./iframe-Dx3F1CSe.js";import{P as a}from"./PlotAreaShower-jcM5E0P2.js";import{c as p}from"./hooks-aYl0koFW.js";import{R as s}from"./arrayEqualityCheck-DMaNZfsY.js";import{C as n}from"./ComposedChart-CNQE5BNL.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CbeJ4161.js";import{X as h}from"./XAxis-DSoOfFVG.js";import{Y as c}from"./YAxis-XfxcBWOr.js";import{L as g}from"./Legend-BtEklw2c.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CO9342qd.js";import"./immer-CPegyDWk.js";import"./axisSelectors-DmW2duOw.js";import"./d3-scale-BnGwHyKU.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CXoJrQ_A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_B5nhKu.js";import"./index-BeZ_ypUT.js";import"./zIndexSlice-CPXQUw6s.js";import"./renderedTicksSlice-S30Bo7Xq.js";import"./CartesianChart-2VGagNAy.js";import"./chartDataContext-CVXqCkfR.js";import"./CategoricalChart-ByIQfQbt.js";import"./Layer-BatgHwMu.js";import"./ReactUtils-Cd33UQfd.js";import"./Label-B3UU_HSI.js";import"./Text-ClY5nVeB.js";import"./DOMUtils-Bny8fRsV.js";import"./ZIndexLayer-BTGGDCgU.js";import"./ActivePoints-DBEXRMMQ.js";import"./Dot-DyEp_Y2i.js";import"./types-Fk51O_d2.js";import"./RegisterGraphicalItemId--5sq17ZQ.js";import"./ErrorBarContext-D8MNVbSR.js";import"./GraphicalItemClipPath-CgpTlQpM.js";import"./SetGraphicalItem-z01-aQ6e.js";import"./useAnimationId-CaQxO-lU.js";import"./getRadiusAndStrokeWidthFromDot-CIhR-EWT.js";import"./ActiveShapeUtils-LKLEmdOo.js";import"./isPlainObject-CvDuL2Db.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aVXlBDAg.js";import"./Trapezoid-mG7ZoGF8.js";import"./Sector-CxmPGBJY.js";import"./Symbols-BjVmMqrI.js";import"./symbol-Tg8V4fLu.js";import"./step-BGsv1v0H.js";import"./Curve-ZDUjen4G.js";import"./CartesianAxis-CgkE7jBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C4FOoao2.js";import"./uniqBy-Db_oWzmt.js";import"./iteratee-DJk2bC48.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
