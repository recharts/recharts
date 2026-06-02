import{c as e}from"./iframe-BRX46Ivk.js";import{g as i}from"./zIndexSlice-DWdWmCIF.js";import{C as a}from"./ComposedChart-CDM_AzxP.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-D0aJguyw.js";import{X as s}from"./XAxis-BCLXDtwM.js";import{Y as c}from"./YAxis-DQxr8HwE.js";import{L as d}from"./Line-DersmD4z.js";import{R as g}from"./ReferenceLine-p8pOa6gG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B8PXb0jM.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./get-Co_O7Bis.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./isWellBehavedNumber-CB_DAa3f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2N_lXXj.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./axisSelectors-CxAtIunO.js";import"./d3-scale--l5c2rdM.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./CartesianAxis-D25s55eU.js";import"./Layer-CnAnt2-w.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./Label-BF8y58w-.js";import"./ZIndexLayer-CPddneQ7.js";import"./types-BPLmhp3x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DevGF9dB.js";import"./step-DohD2rXx.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CZBp5YIk.js";import"./ActivePoints-zyPb8mdq.js";import"./Dot-DrpVqpH-.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./ErrorBarContext-OAvmaR3P.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./useAnimationId-HcldwJQz.js";import"./getRadiusAndStrokeWidthFromDot-CjA9U0Zs.js";import"./ActiveShapeUtils-DpAig7qv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
