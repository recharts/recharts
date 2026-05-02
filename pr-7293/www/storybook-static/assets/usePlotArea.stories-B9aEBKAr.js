import{e as t}from"./iframe-CPMBPDiW.js";import{P as a}from"./PlotAreaShower-BJ8q8bHN.js";import{c as p}from"./hooks-CZjbEOHJ.js";import{R as s}from"./arrayEqualityCheck-BuDnjzUV.js";import{C as n}from"./ComposedChart-DtpNVTCG.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CLQAlcVC.js";import{X as h}from"./XAxis-CjRYfiQ4.js";import{Y as c}from"./YAxis-Bk6_l7JM.js";import{L as g}from"./Legend-RGy81kPY.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DELo0r0O.js";import"./immer-vUXr1xyy.js";import"./axisSelectors-DS_oX4Yb.js";import"./d3-scale-DxZ452bO.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-x-xJryKY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7X0iTSa.js";import"./index-41kzo7-f.js";import"./zIndexSlice-Dr6oT2qB.js";import"./renderedTicksSlice-BJAXzV77.js";import"./CartesianChart-DH2v7K23.js";import"./chartDataContext-CV0cJvXm.js";import"./CategoricalChart-Cbmwan-l.js";import"./Layer-BU-6_6Kb.js";import"./ReactUtils-CfsI_UnC.js";import"./Label-DxWyVNuC.js";import"./Text-3lL52T9r.js";import"./DOMUtils-DD4Lzq5B.js";import"./ZIndexLayer-D5fxgLpy.js";import"./ActivePoints-wTJjK4Ig.js";import"./Dot-C0mRoZzJ.js";import"./types-BEArBsqN.js";import"./RegisterGraphicalItemId-BB9O0Mjy.js";import"./ErrorBarContext-BfN3k9v-.js";import"./GraphicalItemClipPath-qTNWK1mm.js";import"./SetGraphicalItem-33kMbvyx.js";import"./useAnimationId-B2ugAfTp.js";import"./getRadiusAndStrokeWidthFromDot-DuRb3MXi.js";import"./ActiveShapeUtils-D0GMXNQW.js";import"./isPlainObject-fYFHA2eI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DB5NbiB2.js";import"./Trapezoid-Dxi0_3Ju.js";import"./Sector-BiA4y5xt.js";import"./Symbols-B62UJk0p.js";import"./symbol-CmO941Mh.js";import"./step-CaCTG7D1.js";import"./Curve-JHKdodnE.js";import"./CartesianAxis-FhEMhfrS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BvdSbmtt.js";import"./uniqBy-BfEtNPHY.js";import"./iteratee-ZHRQA0Hg.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
