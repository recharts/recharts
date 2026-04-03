import{e as t}from"./iframe-C3UZ-t_V.js";import{P as a}from"./PlotAreaShower-B5C3jvki.js";import{c as p}from"./hooks-DPl2sBv5.js";import{R as s}from"./arrayEqualityCheck-DIL50JWa.js";import{C as n}from"./ComposedChart-C4m1Eygp.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-gDEmZD-v.js";import{X as h}from"./XAxis-DMAObJwa.js";import{Y as c}from"./YAxis-B5LKtkqe.js";import{L as g}from"./Legend-BAX1K06t.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./immer-Bf7Gcqi0.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./Layer-CI6sC4Pl.js";import"./ReactUtils-BnJyydkM.js";import"./Label-BrcoQVek.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./ZIndexLayer-D78RDR2e.js";import"./ActivePoints-Donj28kx.js";import"./Dot-CQmFG6vz.js";import"./types-5hKD9RW5.js";import"./RegisterGraphicalItemId-CRHVW6BC.js";import"./ErrorBarContext-D1tpAEu1.js";import"./GraphicalItemClipPath-CM4WNw68.js";import"./SetGraphicalItem-aZjM1KWs.js";import"./useAnimationId-DB48Qg13.js";import"./getRadiusAndStrokeWidthFromDot-Cj9gBiC7.js";import"./ActiveShapeUtils-faJHcahZ.js";import"./isPlainObject-CwlSp2ia.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGuVg7wO.js";import"./Trapezoid-VJ5gUEBt.js";import"./Sector-BhwWS5u1.js";import"./Symbols-DCi2amY7.js";import"./symbol-DGgXQDAi.js";import"./step-mUeGDqfh.js";import"./Curve-C7Xh0Uh3.js";import"./CartesianAxis-CYGD0r1r.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Ck5QmzIm.js";import"./uniqBy-Bm8Zesxj.js";import"./iteratee-tmynXvCY.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
