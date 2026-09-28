import{R as t}from"./iframe-Hl-NyIui.js";import{j as a}from"./RechartsWrapper-6h9C2k7P.js";import{R as p}from"./zIndexSlice-CfmJ5m3S.js";import{C as n}from"./ComposedChart-BDadpkQJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Do1DfpvA.js";import{X as l}from"./XAxis-dvgP8Xa0.js";import{Y as h}from"./YAxis-aV4oz1qa.js";import{L as c}from"./Legend-DATPhy6E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cef9-W_0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUNPrG5h.js";import"./throttle-BbfdAojm.js";import"./index--xPFvF8G.js";import"./index-BDqTEc2Q.js";import"./isWellBehavedNumber-DkDVf3J3.js";import"./d3-scale-jS5aGAiZ.js";import"./index-DBpjU2SQ.js";import"./index-BofEEBUS.js";import"./renderedTicksSlice-CNE8P8TP.js";import"./index-D2iNSRAe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ci5OoGHz.js";import"./chartDataContext-C-VJeLBh.js";import"./CategoricalChart-CArj-fEw.js";import"./Layer-CFBs8Wel.js";import"./Curve-DylS8_W7.js";import"./types-B1K9SbcX.js";import"./step-DpF6rbyV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ChX6uVrd.js";import"./Label-B3PtgVX6.js";import"./Text-BrVNMlzX.js";import"./DOMUtils-CG6HmAln.js";import"./useId-DW-27Lrg.js";import"./useBackwardsCompatibleTheme-gSrU4sF5.js";import"./ZIndexLayer-C3i-HdBs.js";import"./useAnimationId-DLNOJTSV.js";import"./ActivePoints-CVfZawzl.js";import"./Dot-DSN5jlp-.js";import"./RegisterGraphicalItemId-D1BMc2l2.js";import"./ErrorBarContext-D2c9lRCZ.js";import"./GraphicalItemClipPath-CzquVpfg.js";import"./SetGraphicalItem-BgE77ea4.js";import"./getRadiusAndStrokeWidthFromDot-Bo-OkCM4.js";import"./ActiveShapeUtils-D9ea8jTE.js";import"./useGraphicalItemIdentity-uh3z32K3.js";import"./CartesianAxis-B_3pRXW9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BWF6xm86.js";import"./symbol-DhzuOEcy.js";import"./useElementOffset-BfRtNT8-.js";import"./uniqBy-ByQGoswD.js";import"./iteratee-BqIuCNzZ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
