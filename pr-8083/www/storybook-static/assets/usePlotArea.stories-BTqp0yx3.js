import{R as t}from"./iframe-xm0njxpX.js";import{z as a}from"./RechartsWrapper-B8IVe3Ss.js";import{R as p}from"./zIndexSlice-BXJXmFQu.js";import{C as n}from"./ComposedChart-CTFFybCq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-8E3Vc0X3.js";import{X as l}from"./XAxis-BO1QGjPl.js";import{Y as h}from"./YAxis-NECyBpPr.js";import{L as c}from"./Legend-BdswvNJP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B61AogRi.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CvRpVDMX.js";import"./throttle-CQYnjh9B.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRKVpWRJ.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./Layer-BK3cybNP.js";import"./Curve-BAoUkSSw.js";import"./types-dJ8tHIrH.js";import"./step-W8iSilzg.js";import"./path-DyVhHtw_.js";import"./activeStyles-DbHXCiJk.js";import"./Label-S9WiqPCG.js";import"./Text-B0-TExiI.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./dataEntryStyles-6HljWj9B.js";import"./useAnimationId-CEkjnsp2.js";import"./ActivePoints-BjJpQq32.js";import"./Dot-CSz5GuhK.js";import"./Symbols-DCRo0j9j.js";import"./symbol-BSoKxRAd.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./ErrorBarContext-iSnZN3fR.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getRadiusAndStrokeWidthFromDot-C3oN3ytl.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./useEffectiveDataKey-L1KgQlH4.js";import"./CartesianAxis-C-JfYURt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DlepEBex.js";import"./uniqBy-0D-LcbqQ.js";import"./iteratee-IqDasbN4.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
