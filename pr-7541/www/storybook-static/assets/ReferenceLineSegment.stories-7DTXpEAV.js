import{R as e}from"./iframe-B_vrQl8R.js";import{R as i}from"./zIndexSlice-Cxwz8Tl-.js";import{C as a}from"./ComposedChart-yc7O9hvj.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-2-NeYVAl.js";import{X as s}from"./XAxis-Ci68TUER.js";import{Y as c}from"./YAxis-BnsZeISF.js";import{L as d}from"./Line-DxooT10C.js";import{R as g}from"./ReferenceLine-B-ZI9YUB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dyk5owXH.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./CartesianAxis-BAwOMXAP.js";import"./Layer-Gd_R9sAX.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./Label-CvVA6TIG.js";import"./ZIndexLayer-DUE9jsMX.js";import"./types-B9Larr1k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-4ICuXbwR.js";import"./step-Ct9Ha3sC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CSL9mSPk.js";import"./useAnimationId-DAjnsWww.js";import"./ActivePoints-DphU-K4M.js";import"./Dot-D8Lfcwc2.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./ErrorBarContext-DjPqL-MC.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./getRadiusAndStrokeWidthFromDot-BJX3V8Wn.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
