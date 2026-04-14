import{e as t}from"./iframe-B26tvh8M.js";import{P as a}from"./PlotAreaShower-CWNEjbya.js";import{c as p}from"./hooks-CFGRd7FZ.js";import{R as s}from"./arrayEqualityCheck-MuT8Gq0B.js";import{C as n}from"./ComposedChart-DX9vJdu2.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CTwc6FHC.js";import{X as h}from"./XAxis-DIWBB6UA.js";import{Y as c}from"./YAxis-BtVkQLRb.js";import{L as g}from"./Legend-BwV7X5GL.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-D4w-gUjQ.js";import"./immer-CXuxt10J.js";import"./axisSelectors-znnp0ZTC.js";import"./d3-scale-D8gDHM7P.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DWRHZiFf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCeLN1YR.js";import"./index-Bz4UcQS6.js";import"./zIndexSlice-9WIqVBWy.js";import"./renderedTicksSlice-BdibsHeH.js";import"./CartesianChart-Cyzcm2Bf.js";import"./chartDataContext-DgpnTfq-.js";import"./CategoricalChart-ClHT_DQk.js";import"./Layer-BLXteb37.js";import"./ReactUtils-EalmbCaR.js";import"./Label-CKyHcssN.js";import"./Text-B7apQSTa.js";import"./DOMUtils-Cbj4CypK.js";import"./ZIndexLayer-2hV_wyzX.js";import"./ActivePoints-DDMO3vxb.js";import"./Dot-DJ6U_l3e.js";import"./types-gN1P51X3.js";import"./RegisterGraphicalItemId-z3-LYLAM.js";import"./ErrorBarContext-BV9_6zF2.js";import"./GraphicalItemClipPath-tnHq66M5.js";import"./SetGraphicalItem-D6N-Tuye.js";import"./useAnimationId-C40xd6Et.js";import"./getRadiusAndStrokeWidthFromDot-CX1KMj8W.js";import"./ActiveShapeUtils-C5QwOCv6.js";import"./isPlainObject-DAsoG4ko.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7IYda03.js";import"./Trapezoid-Dj9VILyv.js";import"./Sector-s0RSAPuc.js";import"./Symbols-B7tb4BlZ.js";import"./symbol-M8-_4T55.js";import"./step-DSlKLIZT.js";import"./Curve-CeBurhsE.js";import"./CartesianAxis-wEW14JHd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DFWZQBhd.js";import"./uniqBy-Bl-3PVel.js";import"./iteratee-BAF-yXNd.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
