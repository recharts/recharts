import{e as t}from"./iframe-DkoPPqoz.js";import{P as a}from"./PlotAreaShower-BlqZdS3t.js";import{c as p}from"./hooks-kkIG_obm.js";import{R as s}from"./arrayEqualityCheck-ConoiXxh.js";import{C as n}from"./ComposedChart-BDGpBivc.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ch8ZpIZ6.js";import{X as h}from"./XAxis-TP4nil4a.js";import{Y as c}from"./YAxis-BYjsEyTB.js";import{L as g}from"./Legend-ESjSEemE.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DJpvKh-u.js";import"./immer-h70EVoAC.js";import"./axisSelectors-DrsKaFAE.js";import"./d3-scale-DMaSDVSj.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-rTEBizGM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7r7vnZw.js";import"./index-avHK6rAb.js";import"./zIndexSlice-DRo4EBFA.js";import"./renderedTicksSlice-C3i94H6-.js";import"./CartesianChart-FkpJPUOg.js";import"./chartDataContext-RI6mXRe4.js";import"./CategoricalChart-BVNqzoUx.js";import"./Layer-zW4foO2t.js";import"./ReactUtils-t--G_5qe.js";import"./Label-bvaOdScm.js";import"./Text-Czgex7sv.js";import"./DOMUtils-BK7Rx0Uu.js";import"./ZIndexLayer-DkIqpuZB.js";import"./ActivePoints-CofuFEcX.js";import"./Dot-C9hCbkHm.js";import"./types-BY9uJX-K.js";import"./RegisterGraphicalItemId-DO3T0gKQ.js";import"./ErrorBarContext-D8jzUn2M.js";import"./GraphicalItemClipPath-DPMqkNK-.js";import"./SetGraphicalItem-Dy_UcRx-.js";import"./useAnimationId-BkaDppf2.js";import"./getRadiusAndStrokeWidthFromDot-DA4yVcY7.js";import"./ActiveShapeUtils-DVJC97NJ.js";import"./isPlainObject-gasvROJA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0hnRgW6.js";import"./Trapezoid-BJDCCDSe.js";import"./Sector-hs2Rz1EN.js";import"./Symbols-riOWWUH2.js";import"./symbol-Mw7pfSpK.js";import"./step-BXtSxhKs.js";import"./Curve-Ue3PdtjH.js";import"./CartesianAxis-DqLKklwY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CaDAE_vK.js";import"./uniqBy-Dp6QPwT2.js";import"./iteratee-DHJJjjdJ.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
