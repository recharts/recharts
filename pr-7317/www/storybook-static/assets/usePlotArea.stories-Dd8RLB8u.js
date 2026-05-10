import{e as t}from"./iframe-Cl35quqC.js";import{P as a}from"./PlotAreaShower-D3XS0cIi.js";import{c as p}from"./hooks-CNddY0Tb.js";import{R as s}from"./arrayEqualityCheck-D9UIghxi.js";import{C as n}from"./ComposedChart-uUijpKq4.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B6cjKV0J.js";import{X as h}from"./XAxis-FVKRUr2k.js";import{Y as c}from"./YAxis-WP2I3lgo.js";import{L as g}from"./Legend-t--SO07f.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dc6hCc8f.js";import"./immer-CY0Lk3WW.js";import"./axisSelectors-DeCbtXoM.js";import"./d3-scale-BkxfZ9aI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhrqjrLa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jOGgq2Y2.js";import"./index-_ky2ePMv.js";import"./zIndexSlice-DkkJQXQO.js";import"./renderedTicksSlice-BLU8jnqb.js";import"./CartesianChart-CGp9HSBf.js";import"./chartDataContext-ZINcULtA.js";import"./CategoricalChart-0NzQu1bM.js";import"./Layer-CeD-uJbZ.js";import"./ReactUtils-DZzHwFX5.js";import"./Label-DLz8rNT7.js";import"./Text-DNnOYqaK.js";import"./DOMUtils-DIh1PeI4.js";import"./ZIndexLayer-H1bn9xe9.js";import"./ActivePoints-B4P09zpr.js";import"./Dot-BR2Bc69w.js";import"./types-D677_BtS.js";import"./RegisterGraphicalItemId-BLnqRJKY.js";import"./ErrorBarContext-BQ7AUjVv.js";import"./GraphicalItemClipPath-Dk-2dIcR.js";import"./SetGraphicalItem-CECI28wk.js";import"./useAnimationId-BL2H4qbR.js";import"./getRadiusAndStrokeWidthFromDot-BWrVeHgV.js";import"./ActiveShapeUtils-DPlGMvpt.js";import"./isPlainObject-DrB0XJwF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZCtg9qm.js";import"./Trapezoid-CB0ArsDb.js";import"./Sector-HEQQPb1w.js";import"./Symbols-oEtpWgQJ.js";import"./symbol-BZKabVvR.js";import"./step-BlMx9OF4.js";import"./Curve-hm8tQy1x.js";import"./CartesianAxis-Dg85fGZU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-OUPok0mW.js";import"./uniqBy-Do32wBRQ.js";import"./iteratee-BgC_x1g5.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
