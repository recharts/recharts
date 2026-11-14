import{R as t}from"./iframe-ULtY-NVK.js";import{z as a}from"./RechartsWrapper-JXy35Des.js";import{R as p}from"./zIndexSlice-jBtZtiCi.js";import{C as n}from"./ComposedChart-BLU8rp3_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CXxZTyaf.js";import{X as l}from"./XAxis-BxexlvNE.js";import{Y as h}from"./YAxis-BQ0jDyxm.js";import{L as c}from"./Legend-Vbwf_oDe.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DyOG1uRh.js";import"./throttle-CHVCCuLD.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./polarAxisSelectors-DJMQca_o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ZBKsHMes.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./Layer-DhwnXi08.js";import"./Curve-CN39irzx.js";import"./types-YE6r9ekT.js";import"./step-qhW1rf6_.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./Label-RNo0-Kup.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./ActivePoints-DVHPdhuz.js";import"./Dot-D81fGPmQ.js";import"./activeStyles-nNAh6kPS.js";import"./useAnimationId-BnN3bcdg.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./ErrorBarContext-DkSuy-bE.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getRadiusAndStrokeWidthFromDot-DoYvpvg5.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./CartesianAxis-B-ohTpBX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DhIwgz5u.js";import"./uniqBy-DTA7LqR-.js";import"./iteratee-DNbp_EuJ.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
