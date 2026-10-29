import{R as t}from"./iframe-C2PRwgnl.js";import{z as a}from"./RechartsWrapper-BOct7ur6.js";import{R as p}from"./zIndexSlice-weNxwEm8.js";import{C as n}from"./ComposedChart-BLjSf-Hf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D8_px741.js";import{X as l}from"./XAxis-BncsxFZ4.js";import{Y as h}from"./YAxis-CAHeoama.js";import{L as c}from"./Legend-BvJGkDvQ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-aJLviuy-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-nSy-fV9M.js";import"./throttle-CVlDdGyC.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIUnlP6Z.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./Layer-botuDyHz.js";import"./Curve-CQnefVPR.js";import"./types-CHq7dG9p.js";import"./step-Dw_YruiA.js";import"./path-DyVhHtw_.js";import"./LabelList-Deq7UXnp.js";import"./Label-DdFUcTtW.js";import"./Text-D4lV4Imp.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./activeStyles-a6dnVtfT.js";import"./useAnimationId-Dx5Gkjhg.js";import"./dataEntryStyles-BHwXjzhI.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./ErrorBarContext-C59RBxai.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./useEffectiveDataKey-lRQnp3q-.js";import"./CartesianAxis-DaiAwxt0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cm5L0n6p.js";import"./uniqBy-B3CDwPKv.js";import"./iteratee-BrcMUC4D.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
