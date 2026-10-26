import{R as t}from"./iframe-BzJSp-Lb.js";import{z as a}from"./RechartsWrapper-LKbuKCMS.js";import{R as p}from"./zIndexSlice-CpY4G_41.js";import{C as n}from"./ComposedChart-BGxC8J4N.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BVjDL0Y0.js";import{X as l}from"./XAxis-CLk9ccVg.js";import{Y as h}from"./YAxis-DH3wuMUO.js";import{L as c}from"./Legend-V6chc68W.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dmo5ac34.js";import"./throttle-BdS6UYxD.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BS7oaQgh.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./Layer-Ci5AF7LX.js";import"./Curve-DdA-p64w.js";import"./types-DTueBMDQ.js";import"./step-CKjxAWSD.js";import"./path-DyVhHtw_.js";import"./activeStyles-B_Yk1DNA.js";import"./Label-CXAJ70oq.js";import"./Text-Di-RptE9.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./dataEntryStyles-eQjR1qV2.js";import"./useAnimationId-vzOulJcL.js";import"./ActivePoints-gL4Smrft.js";import"./Dot-Bedwt1R7.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./ErrorBarContext-CPvXKihC.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getRadiusAndStrokeWidthFromDot-DI7kq6ii.js";import"./ActiveShapeUtils-CPEFsget.js";import"./useEffectiveDataKey-Dlkdw6F3.js";import"./CartesianAxis-ImLT1R94.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DR9OLuHh.js";import"./uniqBy-CSQkScZ5.js";import"./iteratee-xpgxqzFE.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
