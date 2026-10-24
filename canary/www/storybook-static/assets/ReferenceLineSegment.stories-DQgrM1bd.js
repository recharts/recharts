import{R as e}from"./iframe-CHJ8qNn-.js";import{R as i}from"./zIndexSlice-DNIXTlyt.js";import{C as n}from"./ComposedChart-Gh2_Mw5N.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-KqJXt-cq.js";import{X as s}from"./XAxis-L9UrmdET.js";import{Y as c}from"./YAxis-BiD1d_mO.js";import{L as d}from"./Line-DI2at8cX.js";import{R as g}from"./ReferenceLine-D1BBsnxC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-XqMRt2jJ.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./isWellBehavedNumber-BRib7OTz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJlTvsU4.js";import"./axisSelectors-BBd7_xKf.js";import"./d3-scale-Tozs6n73.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-CoSZFYA7.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./CartesianAxis-Durs5z8j.js";import"./Layer-D78kPmJv.js";import"./Text-CNSLXPSH.js";import"./pageBackground-DmOvuMA2.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./Label-B11lJlmF.js";import"./ZIndexLayer-D300_86G.js";import"./dataEntryStyles-DVh89c5p.js";import"./types-Dz3e-B0c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Dy3LXOkF.js";import"./step-BMByuFVF.js";import"./path-DyVhHtw_.js";import"./activeStyles-ujvHG1pk.js";import"./useAnimationId-CQYAMcX9.js";import"./ActivePoints-DnpLdJfX.js";import"./Dot-C7lzuZIa.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./ErrorBarContext-gVyy4V_e.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getRadiusAndStrokeWidthFromDot-Dlc5cKW5.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./useEffectiveDataKey-BD8sCJ8W.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
