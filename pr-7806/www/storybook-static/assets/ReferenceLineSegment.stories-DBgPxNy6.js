import{R as e}from"./iframe-B7hbNEXj.js";import{R as i}from"./zIndexSlice-B7xQcNcG.js";import{C as n}from"./ComposedChart-CBHvobIY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-R_m8YFEY.js";import{X as s}from"./XAxis-DTRImo2J.js";import{Y as c}from"./YAxis-DYrUNm06.js";import{L as d}from"./Line-DjZkWb4y.js";import{R as g}from"./ReferenceLine-Dir12Iu-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSjszxUH.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jiH_AYjt.js";import"./axisSelectors-MpDLX8pO.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./Text-DWuYBy5V.js";import"./DOMUtils-BhIaSreR.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./Label-lNQzMu7Z.js";import"./ZIndexLayer-jcXUwYN8.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CUqyVekg.js";import"./step-5lhI3wtQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhxUFxBy.js";import"./useAnimationId-BjhUfelV.js";import"./ActivePoints-BbyHcAce.js";import"./Dot-ArvJ9HsL.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./ErrorBarContext-BQLnOb5r.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./getRadiusAndStrokeWidthFromDot-9G5pAfIZ.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
