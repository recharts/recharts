import{R as e}from"./iframe-Cr7yvMyR.js";import{R as i}from"./zIndexSlice-CsHxFK6N.js";import{C as n}from"./ComposedChart-Br0t_Hun.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-qOjoXZ7o.js";import{X as s}from"./XAxis-6YWl141g.js";import{Y as c}from"./YAxis-CzA9LN6m.js";import{L as d}from"./Line-BPy1KVNT.js";import{R as g}from"./ReferenceLine-CfUPNyU6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7XokfeB_.js";import"./throttle-RI9qCIcF.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./RechartsWrapper-DtToZ6Qn.js";import"./axisSelectors-BefgmR9V.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DsBZl9Yj.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./CartesianAxis-CEqebLVd.js";import"./Layer-Dr_Plb3q.js";import"./Text-Bgk62K3n.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./Label-Bde3ooKp.js";import"./types-NTnKzXXZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BMeJMEVZ.js";import"./step-C7lw2IuE.js";import"./path-DyVhHtw_.js";import"./LabelList-DKDyf66o.js";import"./ActivePoints-CeFLQPPR.js";import"./Dot-C8oJPXZf.js";import"./activeStyles-4Qukhfp5.js";import"./useAnimationId-CrRcWCxT.js";import"./dataEntryStyles-Df9giDaD.js";import"./Symbols-BTpF-zfb.js";import"./symbol-AnQJSsJ7.js";import"./ErrorBarContext-DICVo2af.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getRadiusAndStrokeWidthFromDot-BmiuMj8w.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
