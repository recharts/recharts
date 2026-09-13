import{R as e}from"./iframe-CpojRMYz.js";import{R as i}from"./zIndexSlice-D1ADf7PX.js";import{C as n}from"./ComposedChart-B6PO2aMu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Btdhmk74.js";import{X as s}from"./XAxis-DrbaoPhb.js";import{Y as c}from"./YAxis-emyLb2hw.js";import{L as d}from"./Line-DDx2X4LF.js";import{R as g}from"./ReferenceLine-BIbll3OV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2TOI5CL8.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CF4JxjLb.js";import"./axisSelectors-BWpXFhCq.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./CartesianAxis-BQyqi4qL.js";import"./Layer-CCaY3a6J.js";import"./Text-l7Cxp-9T.js";import"./DOMUtils-Bwqm48A6.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./Label-C3-HdBMA.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./types-BBXJ7Rux.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-5MG-rBKT.js";import"./step-DMyapVKc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BIcnZI45.js";import"./useAnimationId-CwhUANii.js";import"./ActivePoints-CSBV62SU.js";import"./Dot-Cf1g1XZp.js";import"./RegisterGraphicalItemId-mR_kXHAC.js";import"./ErrorBarContext-DaXU1Z8v.js";import"./GraphicalItemClipPath-2lYWsPZE.js";import"./SetGraphicalItem-CyRpKe3K.js";import"./getRadiusAndStrokeWidthFromDot-Z2EK9WFQ.js";import"./ActiveShapeUtils-DvTz2wmh.js";import"./useGraphicalItemIdentity-CvTNdUiI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
