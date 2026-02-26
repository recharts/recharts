import{e}from"./iframe-Gi8dyZ6e.js";import{R as i}from"./arrayEqualityCheck-DuhG7Z2p.js";import{C as p}from"./ComposedChart-QXz6Q_cE.js";import{C as a}from"./CartesianGrid-B_ujkWpT.js";import{X as n}from"./XAxis-y3nTYyyS.js";import{Y as s}from"./YAxis-CqPjiITk.js";import{L as c}from"./Line-Bi1p01P8.js";import{R as d}from"./ReferenceLine-TO1jAund.js";import{R as g}from"./RechartsHookInspector-xuUFm4Np.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-oYS9lk.js";import"./immer-D5pmFx9i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CB2AOINA.js";import"./index-DFJBHj5i.js";import"./hooks-BTT9-kp9.js";import"./axisSelectors-BVT7Qm3f.js";import"./d3-scale-B9haREcB.js";import"./zIndexSlice-DnlbZmgt.js";import"./renderedTicksSlice-C1sYLHQR.js";import"./CartesianChart-BTWnBU7d.js";import"./chartDataContext-a1u8I7YY.js";import"./CategoricalChart-qcsoPY3x.js";import"./CartesianAxis-Cy_oOLdQ.js";import"./Layer-DeXjDdnZ.js";import"./Text-BcSPYkwi.js";import"./DOMUtils-D2DkSNEb.js";import"./Label-DaPx3_eW.js";import"./ZIndexLayer-gbXEsAYB.js";import"./types-I1HiLSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CMiXbBDc.js";import"./ActivePoints-BT7VY6a-.js";import"./Dot-Bar0xDVX.js";import"./RegisterGraphicalItemId-eSxeD-8T.js";import"./ErrorBarContext-BpvUZnWq.js";import"./GraphicalItemClipPath-Cze4veVF.js";import"./SetGraphicalItem-CtHZzRYw.js";import"./useAnimationId-DlkxhLWt.js";import"./getRadiusAndStrokeWidthFromDot-ruaZLZ0D.js";import"./ActiveShapeUtils-Cw5EPp8e.js";import"./isPlainObject-DlPp7zEZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2pGK9fNN.js";import"./Trapezoid-CjUP9FD5.js";import"./Sector-D2nuXpAg.js";import"./Symbols-CboXRb1J.js";import"./symbol-U_eLqT-N.js";import"./step-fw1t_kgZ.js";import"./Curve-BOJjXgXN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-rE-DaWJc.js";import"./ChartSizeDimensions-zCU3Rmg-.js";import"./OffsetShower-CbBMFbGN.js";import"./PlotAreaShower-BZejz9x4.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
