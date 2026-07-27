import{R as e}from"./iframe-KfsXDyYe.js";import{R as i}from"./zIndexSlice-DRQ5ZoPP.js";import{C as a}from"./ComposedChart-DZx5d73W.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CelUoahD.js";import{X as s}from"./XAxis-BunU0kIP.js";import{Y as c}from"./YAxis-BIQLiJJ1.js";import{L as d}from"./Line-BKA-K_z5.js";import{R as g}from"./ReferenceLine-i2v5cmi8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0X77pc-d.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./renderedTicksSlice-VAstzL9_.js";import"./axisSelectors-DqRFL16u.js";import"./d3-scale-CwZ0fpJQ.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./CartesianAxis-DJyQkACC.js";import"./Layer-DvnIPp0b.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./Label-dJq5mBhi.js";import"./ZIndexLayer-DyFku1ry.js";import"./types-Cp7Kv4cO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DHdhUSXl.js";import"./step-ww9sKUkN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CsvMn_0v.js";import"./useAnimationId-BRufZRyg.js";import"./ActivePoints-DD9eCF-L.js";import"./Dot-BXiPHS-i.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./ErrorBarContext-BxIBjeUQ.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getRadiusAndStrokeWidthFromDot-D62YsXR3.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
