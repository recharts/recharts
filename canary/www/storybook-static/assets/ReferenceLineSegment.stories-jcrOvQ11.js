import{R as e}from"./iframe-BEI88iUa.js";import{R as i}from"./zIndexSlice-CNhIK6pZ.js";import{C as a}from"./ComposedChart-BRe4dKiO.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BCUd2lEL.js";import{X as s}from"./XAxis-0izQHWsV.js";import{Y as c}from"./YAxis-ByzVR28-.js";import{L as d}from"./Line-KF1e2YiW.js";import{R as g}from"./ReferenceLine-DU5criJ5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbtfERHN.js";import"./index-CNenOY3c.js";import"./index-DGXEJOU7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNtzbuaW.js";import"./isWellBehavedNumber-DwXWb7IU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwAaxlIx.js";import"./index-DdylQdZr.js";import"./index-UjVR-wEt.js";import"./renderedTicksSlice-CfGYAsFa.js";import"./axisSelectors-BwSjoLT0.js";import"./d3-scale-Mw6WOBPY.js";import"./CartesianChart-BBEthDu3.js";import"./chartDataContext-DSUhfh_h.js";import"./CategoricalChart-D3IYhdol.js";import"./CartesianAxis-DsLYDFB2.js";import"./Layer-BHa_r1ys.js";import"./Text-b9BvWKjK.js";import"./DOMUtils-CavEusJ9.js";import"./Label-CQfR7C4I.js";import"./ZIndexLayer-6tY-vHyf.js";import"./types-CzsmCJZd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-az12ZSPD.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CjgnvPj0.js";import"./step-B-WAV25h.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-99nv9Q5e.js";import"./useAnimationId-oD_5QjXY.js";import"./ActivePoints-DT7QCbeH.js";import"./Dot-6nm8mAMu.js";import"./RegisterGraphicalItemId-DE2xjbZV.js";import"./ErrorBarContext-BOU1rFco.js";import"./GraphicalItemClipPath-35MUlgJV.js";import"./SetGraphicalItem-DEteyePq.js";import"./getRadiusAndStrokeWidthFromDot-qx3yFJHx.js";import"./ActiveShapeUtils-CCFEfVD0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
