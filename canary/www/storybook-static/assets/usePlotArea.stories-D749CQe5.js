import{e as t}from"./iframe-BoQTj_5t.js";import{P as a}from"./PlotAreaShower-d-TVNynX.js";import{c as p}from"./hooks-CxCFhuYH.js";import{R as s}from"./arrayEqualityCheck-h4HF4x_W.js";import{C as n}from"./ComposedChart-CC2uFk3W.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BLk097ix.js";import{X as h}from"./XAxis-Bw8NdzWJ.js";import{Y as c}from"./YAxis-C-30AhxJ.js";import{L as g}from"./Legend-D65q0N6L.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BZhCWEAS.js";import"./immer-LK4juX8g.js";import"./axisSelectors-vijQZibc.js";import"./d3-scale-Dvc-KAkv.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cuq7Ey8b.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJottPx3.js";import"./index-BJ1s4j4a.js";import"./zIndexSlice-CJZLZTJ5.js";import"./renderedTicksSlice-js0QwYAy.js";import"./CartesianChart-DLPrj-Eg.js";import"./chartDataContext-BrW6BV92.js";import"./CategoricalChart-CT1UCyKb.js";import"./Layer-D7Wm7_P-.js";import"./ReactUtils-lu7EU6Kj.js";import"./Label-_o7tKgSJ.js";import"./Text-BztroWIo.js";import"./DOMUtils-DmRwSly6.js";import"./ZIndexLayer-BO_vi_Q6.js";import"./ActivePoints-Dc2MnlRg.js";import"./Dot-D0_1FxKW.js";import"./types-DLJuN5NY.js";import"./RegisterGraphicalItemId-DvNGZwGO.js";import"./ErrorBarContext-pL12W9Rt.js";import"./GraphicalItemClipPath-BjwS4X8D.js";import"./SetGraphicalItem-Ce9evxpu.js";import"./useAnimationId-DbFh8KcE.js";import"./getRadiusAndStrokeWidthFromDot-CwRGrakx.js";import"./ActiveShapeUtils-7MZP2Iwm.js";import"./isPlainObject-cxYRvyg9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA5R7yHr.js";import"./Trapezoid-D4ZIub8Z.js";import"./Sector-Bxrfj806.js";import"./Symbols-DDT-2ywb.js";import"./symbol-DzG-jnmU.js";import"./step-BjXHarJ0.js";import"./Curve-CKkto3Op.js";import"./CartesianAxis-B91cAptM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset--tEPFjW1.js";import"./uniqBy-BitKiS8o.js";import"./iteratee-Cs4_s7eF.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
