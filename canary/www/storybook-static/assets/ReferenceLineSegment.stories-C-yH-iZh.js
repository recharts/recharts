import{R as e}from"./iframe-IXBD7Hhe.js";import{R as i}from"./zIndexSlice-Bx8LfIjs.js";import{C as a}from"./ComposedChart-5suY9yzX.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CO0Gigqi.js";import{X as s}from"./XAxis-XUByFPwA.js";import{Y as c}from"./YAxis-BVu4beHD.js";import{L as d}from"./Line-CBDt_Hjf.js";import{R as g}from"./ReferenceLine-B3NS-90v.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cb9pxaut.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./isWellBehavedNumber-DuIg09Ee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./axisSelectors-Cllx2Xbl.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./CategoricalChart-CsZZ-_Ww.js";import"./CartesianAxis-vF0DZ8PI.js";import"./Layer-CznxcDV0.js";import"./Text-CKl7HfzI.js";import"./DOMUtils-CIca5pvR.js";import"./Label-COpsAeG1.js";import"./ZIndexLayer-BDgiHtX6.js";import"./types-ootxRHuI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BH0BT-1U.js";import"./step-CYiGRfb_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0wExScK.js";import"./useAnimationId-DKTTaUff.js";import"./ActivePoints-CHxp0sMa.js";import"./Dot-CqTh5SAj.js";import"./RegisterGraphicalItemId-c9Yy-XmY.js";import"./ErrorBarContext-Bg5OE5lB.js";import"./GraphicalItemClipPath-DnF330yG.js";import"./SetGraphicalItem-D7LoeNCT.js";import"./getRadiusAndStrokeWidthFromDot-CdGZqJil.js";import"./ActiveShapeUtils-DQ7ehDLd.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
