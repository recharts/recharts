import{R as t}from"./iframe-BGOT0UMq.js";import{j as a}from"./RechartsWrapper-CjrWTlpw.js";import{R as p}from"./zIndexSlice-BPU0EfFx.js";import{C as n}from"./ComposedChart-Cn5XstS9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-JD7ySvzw.js";import{X as l}from"./XAxis-Cg--p2uq.js";import{Y as h}from"./YAxis-Ce9ej7bF.js";import{L as c}from"./Legend-C2y0bXsP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Wq_jv7lJ.js";import"./throttle-gIJqAgIK.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./Layer-C_IgQKNN.js";import"./Curve-DVizwtjl.js";import"./types-B69giCR1.js";import"./step-B3HmNN3j.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DLd27jVc.js";import"./Label-BU1lFQ2f.js";import"./Text-D50SBSje.js";import"./DOMUtils-DS3nE711.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./useAnimationId-B8wYOiNY.js";import"./ActivePoints-qLhVMlGM.js";import"./Dot-CUw-BquZ.js";import"./RegisterGraphicalItemId-CDcrkiRG.js";import"./ErrorBarContext-C9R0WBsq.js";import"./GraphicalItemClipPath-CPiocMLU.js";import"./SetGraphicalItem-C3s6q2T3.js";import"./getRadiusAndStrokeWidthFromDot-C5RVjXgj.js";import"./ActiveShapeUtils-DjoIgzDR.js";import"./useGraphicalItemIdentity-NEokAZII.js";import"./CartesianAxis-hSXvCGlw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNcFTM-g.js";import"./symbol-Dx8u4lfS.js";import"./useElementOffset-qq_A2Adc.js";import"./uniqBy-DxQg0KF1.js";import"./iteratee-BjdoCIjK.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
