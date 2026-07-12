import{R as e}from"./iframe-BLfLpZux.js";import{R as i}from"./zIndexSlice-BdrEPl1y.js";import{C as a}from"./ComposedChart-ZvZa43Nr.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-5er2N29_.js";import{X as s}from"./XAxis-CxCuOvko.js";import{Y as c}from"./YAxis-D5k-HM91.js";import{L as d}from"./Line-Bd3C1wrr.js";import{R as g}from"./ReferenceLine-C6WyGzkG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fbWpHloR.js";import"./index-iIj_N3fe.js";import"./index-CK4MQXPT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZWZ2sNL.js";import"./isWellBehavedNumber-D4oOe6S5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTW173I9.js";import"./index-rWKftsTY.js";import"./index-B91Ea_y6.js";import"./renderedTicksSlice-Bmm8hDp0.js";import"./axisSelectors-y8UfcIHb.js";import"./d3-scale-DPpDzINu.js";import"./CartesianChart-DkG-1GT9.js";import"./chartDataContext-DtPI9Rf-.js";import"./CategoricalChart-DDKWOc6b.js";import"./CartesianAxis-BLCGjb7w.js";import"./Layer-Bul18HQO.js";import"./Text-BhOJQRua.js";import"./DOMUtils-CsfQH6x5.js";import"./Label-BjZvH2GY.js";import"./ZIndexLayer-BVA4IMdO.js";import"./types-CXyRetpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-ChFgtFv9.js";import"./step-CGzEtFcj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJFtUIBr.js";import"./useAnimationId-CIoZmDPD.js";import"./ActivePoints-Cj4P9vg0.js";import"./Dot-B6bHrZQI.js";import"./RegisterGraphicalItemId-CYVd3_VS.js";import"./ErrorBarContext-CNNRNaxb.js";import"./GraphicalItemClipPath-DsE8A5bl.js";import"./SetGraphicalItem-DGLUBmAF.js";import"./getRadiusAndStrokeWidthFromDot-gKBfjIX2.js";import"./ActiveShapeUtils-BK3uHCCg.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
