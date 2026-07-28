import{R as e}from"./iframe-DUrhAGem.js";import{R as i}from"./zIndexSlice-DdMK3B0N.js";import{C as a}from"./ComposedChart-ymO5UTEI.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DS7fbmD7.js";import{X as s}from"./XAxis-RIRw3T0L.js";import{Y as c}from"./YAxis--wp8j7v5.js";import{L as d}from"./Line-CBMbg85k.js";import{R as g}from"./ReferenceLine-chcJP1Si.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3vyfJ8U.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./index-CNLWSLM9.js";import"./renderedTicksSlice-DZdK350N.js";import"./axisSelectors-DZbM2Ze4.js";import"./d3-scale-SkNolWO8.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./CartesianAxis-IffF52gj.js";import"./Layer-Dt-vE1vN.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./Label-Y4Dm0VZ7.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./types-ClGgKr9E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./isBuffer-Crkas5dz.js";import"./Curve-95W41D07.js";import"./step-1cVCQ5Jl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wThfzOGn.js";import"./useAnimationId-VITr_DdB.js";import"./ActivePoints-CwAypjqz.js";import"./Dot-pQkDRCWY.js";import"./RegisterGraphicalItemId-Ck0eBYhQ.js";import"./ErrorBarContext-1rKXFGMB.js";import"./GraphicalItemClipPath-DZHG2jah.js";import"./SetGraphicalItem-D3CB3LDo.js";import"./getRadiusAndStrokeWidthFromDot-CJOj0WiY.js";import"./ActiveShapeUtils-0ZcDx16I.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
