import{R as e}from"./iframe-C2PRwgnl.js";import{R as i}from"./zIndexSlice-weNxwEm8.js";import{C as n}from"./ComposedChart-BLjSf-Hf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CFW3p9Hb.js";import{X as s}from"./XAxis-BncsxFZ4.js";import{Y as c}from"./YAxis-CAHeoama.js";import{L as d}from"./Line-D8_px741.js";import{R as g}from"./ReferenceLine-DwM3TSUg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-aJLviuy-.js";import"./throttle-CVlDdGyC.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./RechartsWrapper-BOct7ur6.js";import"./axisSelectors-nSy-fV9M.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIUnlP6Z.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./CartesianAxis-DaiAwxt0.js";import"./Layer-botuDyHz.js";import"./Text-D4lV4Imp.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./Label-DdFUcTtW.js";import"./types-CHq7dG9p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CQnefVPR.js";import"./step-Dw_YruiA.js";import"./path-DyVhHtw_.js";import"./LabelList-Deq7UXnp.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./activeStyles-a6dnVtfT.js";import"./useAnimationId-Dx5Gkjhg.js";import"./dataEntryStyles-BHwXjzhI.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./ErrorBarContext-C59RBxai.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./useEffectiveDataKey-lRQnp3q-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
