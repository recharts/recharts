import{R as t}from"./iframe-Bvdgb1qV.js";import{z as a}from"./RechartsWrapper-Xt6mrXGV.js";import{R as p}from"./zIndexSlice-B01j9Vcs.js";import{C as n}from"./ComposedChart-Buy3_glc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bq9HsgXM.js";import{X as l}from"./XAxis-D59h15hK.js";import{Y as h}from"./YAxis-BeFwt-ht.js";import{L as c}from"./Legend-DI99byP4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B7JYqxaB.js";import"./throttle-BPyPQEAQ.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./polarAxisSelectors-DEav2p-j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AQ3fTkSg.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./Layer-C-2DDjxl.js";import"./Curve-DVUXJ3hw.js";import"./types-BLGnyPc9.js";import"./step-DfpUdPc6.js";import"./path-DyVhHtw_.js";import"./LabelList-BzPq7Pbp.js";import"./Label-DP6vSrfL.js";import"./Text-DPvkSF-G.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./dataEntryStyles-BpvBRnn1.js";import"./ActivePoints-CspnecJX.js";import"./Dot-DtkvzlrW.js";import"./activeStyles-D6UDaEYG.js";import"./useAnimationId-t1eD8fzp.js";import"./Symbols-BbBHtmua.js";import"./symbol-Bt3qNqsz.js";import"./RegisterGraphicalItemId-Drj4gpzK.js";import"./ErrorBarContext-DdyA3erj.js";import"./SetGraphicalItem-CHhflLCy.js";import"./getRadiusAndStrokeWidthFromDot-DNhfP8M9.js";import"./ActiveShapeUtils-qHwMrvBD.js";import"./useEffectiveDataKey-W79tWrXs.js";import"./CartesianAxis-qmdlREsz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D0AH9eMq.js";import"./uniqBy-AZ6L8AlC.js";import"./iteratee-BJJQ9tMD.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
