import{e as t}from"./iframe-Cj3nIKoJ.js";import{P as a}from"./PlotAreaShower-BLMgNHzI.js";import{c as p}from"./hooks-CnwONrTD.js";import{R as s}from"./arrayEqualityCheck-v-UGwrho.js";import{C as n}from"./ComposedChart-Dhhe2-Q1.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BC8HKYq6.js";import{X as h}from"./XAxis-BPLVTrG2.js";import{Y as c}from"./YAxis-CPODXTBx.js";import{L as g}from"./Legend-DaMZETRD.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DFfD3d93.js";import"./immer-CXMyIV6A.js";import"./axisSelectors-ih1f_cEF.js";import"./d3-scale--Y87SVPH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYnAxRaf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nuhidKGe.js";import"./index-CtKFKGEW.js";import"./zIndexSlice-8UDJ1IOD.js";import"./renderedTicksSlice-DXSuE5WB.js";import"./CartesianChart-BbEdEZ48.js";import"./chartDataContext-xuwFndC5.js";import"./CategoricalChart-DuiVKTDX.js";import"./Layer-CPT9BEuO.js";import"./ReactUtils-QSjTdxzv.js";import"./Label-DlqlafMm.js";import"./Text-CC8Nd2bY.js";import"./DOMUtils-BfkiDds5.js";import"./ZIndexLayer-Vexd0w0T.js";import"./ActivePoints-C9K5tudt.js";import"./Dot-Dqd07VXK.js";import"./types-DeBW_iJF.js";import"./RegisterGraphicalItemId-BGPBjniu.js";import"./ErrorBarContext-CdybRlBm.js";import"./GraphicalItemClipPath-C9-KmWZG.js";import"./SetGraphicalItem-CBRb4w4Y.js";import"./useAnimationId-CBqAdaPb.js";import"./getRadiusAndStrokeWidthFromDot-ZJxzi4-O.js";import"./ActiveShapeUtils-DJRQdkq0.js";import"./isPlainObject-B3a7_XUu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D63r3ZS1.js";import"./Trapezoid-TdPyTlNd.js";import"./Sector-B0okeuxd.js";import"./Symbols-BXQtgV7c.js";import"./symbol-CzbDhrjP.js";import"./step-D6uncFX6.js";import"./Curve-DYzz3tk1.js";import"./CartesianAxis-C7qHOnR8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CYqRjn-o.js";import"./uniqBy-R0Pjiz5J.js";import"./iteratee-C0_-2Haw.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
