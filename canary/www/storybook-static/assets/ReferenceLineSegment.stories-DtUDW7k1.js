import{R as e}from"./iframe-r3x3_yf4.js";import{R as i}from"./zIndexSlice-NMb2vrpT.js";import{C as n}from"./ComposedChart-mqslB1oF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C_6RJk7q.js";import{X as s}from"./XAxis-CR4ARCer.js";import{Y as c}from"./YAxis-DqWMDxyr.js";import{L as d}from"./Line-DTsRfFau.js";import{R as g}from"./ReferenceLine-BtOvFT-1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./throttle-8hacI6eE.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./RechartsWrapper-_voIQt-f.js";import"./axisSelectors-vmwSvweQ.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dyg5lSMz.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./CartesianAxis-D0GcJHV6.js";import"./Layer-Bgw_1AH_.js";import"./Text-BJw7R8d_.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./Label-C--_kXjw.js";import"./types-C8JZdNIX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-D6X3Km74.js";import"./step-iF2C6urg.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./ActivePoints-Cjc4G9GK.js";import"./Dot-CLqyjgQR.js";import"./activeStyles-TIYUw2JD.js";import"./useAnimationId-EE0FjekO.js";import"./Symbols-C3Jeo7wF.js";import"./symbol-BJuLtVcg.js";import"./ErrorBarContext-U5wRur_B.js";import"./SetGraphicalItem-C13buv2r.js";import"./getRadiusAndStrokeWidthFromDot-Bt8N-NmA.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./useEffectiveDataKey-CUQD41kZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
