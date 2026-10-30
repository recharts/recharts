import{R as e}from"./iframe-3XHGwrzY.js";import{R as i}from"./zIndexSlice-Brmhs58T.js";import{C as n}from"./ComposedChart-3w0CXkas.js";import{p}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-BrEtg7AT.js";import{X as s}from"./XAxis-DAbWxmV3.js";import{Y as c}from"./YAxis-BDE7drTG.js";import{L as d}from"./Line-CZeg6v99.js";import{R as g}from"./ReferenceLine-CAnJ0f83.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./throttle-CcufCSOD.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./RechartsWrapper-DFT9i2CK.js";import"./axisSelectors-0sscf7qw.js";import"./polarAxisSelectors-DX_jscyS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC4T9Y5K.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./CartesianAxis-rPfnZIs4.js";import"./Layer-Cs_-jK6s.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./Label-DV0q5jx7.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BM4c2Gyu.js";import"./fillDefinitions-Czp8LH37.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./path-DyVhHtw_.js";import"./LabelList-KPZxqPb8.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./activeStyles-Pcudkpr-.js";import"./useAnimationId-9M90yRIF.js";import"./dataEntryStyles-DQz1PP-z.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./ErrorBarContext-N4SBTIIF.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const he={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},le=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,le as __namedExportsOrder,he as default};
