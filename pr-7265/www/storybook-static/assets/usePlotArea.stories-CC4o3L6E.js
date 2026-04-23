import{e as t}from"./iframe-CUdKgdkG.js";import{P as a}from"./PlotAreaShower-CBo6UyYv.js";import{c as p}from"./hooks-CQ9pmujM.js";import{R as s}from"./arrayEqualityCheck-BSmSVrdu.js";import{C as n}from"./ComposedChart-B_srWo8L.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CSFYD9Tk.js";import{X as h}from"./XAxis-mAd7Kpdc.js";import{Y as c}from"./YAxis-Na-JXGDj.js";import{L as g}from"./Legend-ByTJOEs1.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./immer-Cj2VbGf6.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./zIndexSlice-R-FfD4BY.js";import"./renderedTicksSlice-CKVu5O47.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./Layer-DmKN-F8X.js";import"./ReactUtils-C73Q90p0.js";import"./Label-DglRGLXy.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./ZIndexLayer-CDgenCRH.js";import"./ActivePoints-a6uvGFsO.js";import"./Dot-BZIhq4qY.js";import"./types-Du7cRNSr.js";import"./RegisterGraphicalItemId-MhTEXlyY.js";import"./ErrorBarContext-PwkZe7K2.js";import"./GraphicalItemClipPath-doETQzOU.js";import"./SetGraphicalItem-D9_vCp7v.js";import"./useAnimationId-AqfbREG9.js";import"./getRadiusAndStrokeWidthFromDot-D4zfOBB4.js";import"./ActiveShapeUtils-BTsbslWJ.js";import"./isPlainObject-rQI65vsh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfZJm5g2.js";import"./Trapezoid-CeXt5ImY.js";import"./Sector-Criwg8Ev.js";import"./Symbols-DVxfPYYz.js";import"./symbol-CtsFoFGk.js";import"./step-DvWhuTZk.js";import"./Curve-CaswtT1y.js";import"./CartesianAxis-IOZxWSIl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BW58k6Dr.js";import"./uniqBy-CxeABOap.js";import"./iteratee-9POT8SS0.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
