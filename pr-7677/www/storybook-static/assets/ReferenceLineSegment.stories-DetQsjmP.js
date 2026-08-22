import{R as e}from"./iframe-DVtjH5ZC.js";import{R as i}from"./zIndexSlice-CT5rKc6V.js";import{C as a}from"./ComposedChart-Dz_uTpuK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CVAPsQVq.js";import{X as s}from"./XAxis-jQ3mwiM2.js";import{Y as c}from"./YAxis-B5n5P7NC.js";import{L as d}from"./Line-CCpZ7Nx1.js";import{R as g}from"./ReferenceLine-Djb_AFUQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXnXR6c-.js";import"./index-DA6wIi6Z.js";import"./index-fmYZM9xu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEFHSu3W.js";import"./isWellBehavedNumber-CxtTyBKU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UF711Qsb.js";import"./index-WzbbmlbG.js";import"./index-Dy7HbM4f.js";import"./axisSelectors-CCCeYC9z.js";import"./d3-scale-DlNy7vWv.js";import"./renderedTicksSlice-P35kIKoD.js";import"./CartesianChart-C3qyBmwB.js";import"./chartDataContext-C1lTg_Bk.js";import"./CategoricalChart-CCltYxzM.js";import"./CartesianAxis-MYuvHf2c.js";import"./Layer-CJUEZ1CI.js";import"./Text-DwaUpb0m.js";import"./DOMUtils-Dd9Mj9i5.js";import"./useId-uEfLXIRi.js";import"./useBackwardsCompatibleTheme-9zZd94Fp.js";import"./Label-CW5Nfot0.js";import"./ZIndexLayer-AEwL3kC6.js";import"./types-BYtifQxH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CxVQkJLl.js";import"./step-h8OzX5q7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-rgrg930R.js";import"./useAnimationId-byXPA3hL.js";import"./ActivePoints-DSobnptb.js";import"./Dot-v10q4iwn.js";import"./RegisterGraphicalItemId-CGQFc64E.js";import"./ErrorBarContext-gvSK-T7w.js";import"./GraphicalItemClipPath-CFsYcU3O.js";import"./SetGraphicalItem-DVUS6WUr.js";import"./getRadiusAndStrokeWidthFromDot-DVbQTreU.js";import"./ActiveShapeUtils-BGtP_9iK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
