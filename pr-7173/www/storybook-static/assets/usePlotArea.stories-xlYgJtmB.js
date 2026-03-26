import{e as t}from"./iframe-BnJtTsiG.js";import{P as a}from"./PlotAreaShower-B5YeOyEN.js";import{c as p}from"./hooks-DgbcPaC5.js";import{R as s}from"./arrayEqualityCheck-JqF9arvj.js";import{C as n}from"./ComposedChart-Wvhceelx.js";import{L as l}from"./Line-Cxdeapqx.js";import{X as d}from"./XAxis-DNI9rGLu.js";import{Y as h}from"./YAxis-2aBmaGwM.js";import{L as c}from"./Legend-DTHSX-ax.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DdW7v9MQ.js";import"./immer-BilgQS7Z.js";import"./axisSelectors-_uj0cu9d.js";import"./d3-scale-RH1gCsj4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNKXDHIv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnFeqk-S.js";import"./index-BR9ucj69.js";import"./zIndexSlice-u5N52emx.js";import"./renderedTicksSlice-C2Lx4sh9.js";import"./CartesianChart-yY9oGGmK.js";import"./chartDataContext-Br9_d6ie.js";import"./CategoricalChart-CVrJtZ9b.js";import"./Layer-CZajLfJ2.js";import"./ReactUtils-CGCbFUwc.js";import"./Label-C079WU8o.js";import"./Text-8iVX3WBp.js";import"./DOMUtils-u57yL_f_.js";import"./ZIndexLayer-MihbceXQ.js";import"./ActivePoints-AmnsL1mA.js";import"./Dot-BFdVk3ol.js";import"./types-Dgf_4DYj.js";import"./RegisterGraphicalItemId-Cp9jZ34F.js";import"./ErrorBarContext-DLm5F4wp.js";import"./GraphicalItemClipPath-BqLiE-Qj.js";import"./SetGraphicalItem-DTmYNChn.js";import"./useAnimationId-BlSLZQPR.js";import"./getRadiusAndStrokeWidthFromDot-C7HKOHBW.js";import"./ActiveShapeUtils-CiETt0z1.js";import"./isPlainObject-DWBUHdsc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-38-vQMAB.js";import"./Trapezoid-CcsFZinE.js";import"./Sector-DPWQhCCR.js";import"./Symbols-kj3svvPH.js";import"./symbol-Y2fv4Hlp.js";import"./step-Dk-_s7iR.js";import"./Curve-Dms99yFp.js";import"./CartesianAxis-BY9ve2Nt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D1u0B1Cx.js";import"./uniqBy-CH72kEBn.js";import"./iteratee-Bfor77rc.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
