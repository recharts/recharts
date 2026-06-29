import{R as e}from"./iframe-BAIqIWNA.js";import{R as i}from"./zIndexSlice-CH0jeNcq.js";import{C as a}from"./ComposedChart-Hcr-ILe-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Cg-pZWhK.js";import{X as s}from"./XAxis-BESD5mtP.js";import{Y as c}from"./YAxis-Bm2PYPOq.js";import{L as d}from"./Line-Bq1IM0A9.js";import{R as g}from"./ReferenceLine-BQRkSnJJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RdvYAJ7W.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./get-BRwdZQjD.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./renderedTicksSlice-BzbX13g0.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./CartesianAxis-C8GWRYR8.js";import"./Layer-B1lMYI05.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./Label-Bax8HmP7.js";import"./ZIndexLayer-_81h3bN-.js";import"./types-CesEI09P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DkPKhJGD.js";import"./step-BUpdG0kT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-tOmxqX.js";import"./useAnimationId-BLdV4NOG.js";import"./ActivePoints-CRPdmnzs.js";import"./Dot-BHbC6SWf.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./ErrorBarContext-kr74OQbY.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./getRadiusAndStrokeWidthFromDot-B3GO9P3F.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
