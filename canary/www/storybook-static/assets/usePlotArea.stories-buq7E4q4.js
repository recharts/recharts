import{e as t}from"./iframe-CNlB-yu6.js";import{P as a}from"./PlotAreaShower-peVTKEtW.js";import{Y as p}from"./hooks-CzETKye0.js";import{g as s}from"./arrayEqualityCheck-lQwJ1fam.js";import{C as n}from"./ComposedChart-CFG01hB_.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-CD6wlHNc.js";import{X as h}from"./XAxis-BuwdDhSN.js";import{Y as c}from"./YAxis-BWbQlW4z.js";import{L as g}from"./Legend-CJ8D0E-I.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CofMKbAb.js";import"./immer-awn-juYO.js";import"./axisSelectors-Sb3f1ocW.js";import"./d3-scale-DgLwc5xh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uksPlQVK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAvxe-5M.js";import"./index-FVVlmF5D.js";import"./zIndexSlice-BueUxKyz.js";import"./renderedTicksSlice-BhtQt-EH.js";import"./CartesianChart-BAbFLAD3.js";import"./chartDataContext-B8Bgp5-9.js";import"./CategoricalChart-CCKvkIcs.js";import"./Layer-DZ6C1Fsa.js";import"./ReactUtils-CZXZiRZU.js";import"./Label-Bi7SkSuM.js";import"./Text-BkgbSJBB.js";import"./DOMUtils--5Ctvvni.js";import"./ZIndexLayer-DBrFOYBh.js";import"./ActivePoints-BJcxAugH.js";import"./Dot-Be-ydJG6.js";import"./types-CPecuUPI.js";import"./RegisterGraphicalItemId-BYNQWvmg.js";import"./ErrorBarContext-B0g5HTrn.js";import"./GraphicalItemClipPath-D754deXs.js";import"./SetGraphicalItem-DVSS-M3K.js";import"./useAnimationId-PuhsBKnu.js";import"./getRadiusAndStrokeWidthFromDot-YVqudBJv.js";import"./ActiveShapeUtils-BIq2I243.js";import"./isPlainObject-BpzaTaPh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8_swSm0.js";import"./Trapezoid-C-zzOAzy.js";import"./Sector-LS-_W5nP.js";import"./Symbols-C5zVtj1R.js";import"./symbol-DsMOupFF.js";import"./step-D1tlFFQW.js";import"./Curve-tmuRXssi.js";import"./CartesianAxis-Ci2q_-V4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Dg1zYIZB.js";import"./uniqBy-CQC1nGrz.js";import"./iteratee-D3JKVA7C.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
