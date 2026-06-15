import{R as e}from"./iframe-BECHMrDZ.js";import{R as i}from"./zIndexSlice-ZZYOt5ZJ.js";import{C as a}from"./ComposedChart-DEoquINt.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BweugEAK.js";import{X as s}from"./XAxis-Dnf9N0V4.js";import{Y as c}from"./YAxis-9bvi17Wq.js";import{L as d}from"./Line-NU5SWiL4.js";import{R as g}from"./ReferenceLine-CwxFFIAA.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DNeblauM.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./get-CPwaVA9l.js";import"./resolveDefaultProps-BtqON1I7.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./CartesianAxis-BTVfzskq.js";import"./Layer-ESOqu-Gc.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./Label-VQOoexxL.js";import"./ZIndexLayer-dzP4UBMr.js";import"./types-n4LQ-b_y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bn_0oI69.js";import"./step-DbGI_ztS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CQmyu7n-.js";import"./useAnimationId-BT4jYtUB.js";import"./ActivePoints-Cmc10X0Q.js";import"./Dot-C7DD26qy.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./ErrorBarContext-D2jpma0H.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getRadiusAndStrokeWidthFromDot-C9KiXcw0.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
