import{R as t}from"./iframe-DVtjH5ZC.js";import{u as a}from"./CategoricalChart-CCltYxzM.js";import{R as p}from"./zIndexSlice-CT5rKc6V.js";import{C as s}from"./ComposedChart-Dz_uTpuK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CCpZ7Nx1.js";import{X as l}from"./XAxis-jQ3mwiM2.js";import{Y as h}from"./YAxis-B5n5P7NC.js";import{L as c}from"./Legend-cbzAprNX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UF711Qsb.js";import"./index-WzbbmlbG.js";import"./index-Dy7HbM4f.js";import"./index-DA6wIi6Z.js";import"./index-fmYZM9xu.js";import"./throttle-CXnXR6c-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCCeYC9z.js";import"./resolveDefaultProps-CEFHSu3W.js";import"./isWellBehavedNumber-CxtTyBKU.js";import"./d3-scale-DlNy7vWv.js";import"./renderedTicksSlice-P35kIKoD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3qyBmwB.js";import"./chartDataContext-C1lTg_Bk.js";import"./Layer-CJUEZ1CI.js";import"./Curve-CxVQkJLl.js";import"./types-BYtifQxH.js";import"./step-h8OzX5q7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-rgrg930R.js";import"./Label-CW5Nfot0.js";import"./Text-DwaUpb0m.js";import"./DOMUtils-Dd9Mj9i5.js";import"./useId-uEfLXIRi.js";import"./useBackwardsCompatibleTheme-9zZd94Fp.js";import"./ZIndexLayer-AEwL3kC6.js";import"./useAnimationId-byXPA3hL.js";import"./ActivePoints-DSobnptb.js";import"./Dot-v10q4iwn.js";import"./RegisterGraphicalItemId-CGQFc64E.js";import"./ErrorBarContext-gvSK-T7w.js";import"./GraphicalItemClipPath-CFsYcU3O.js";import"./SetGraphicalItem-DVUS6WUr.js";import"./getRadiusAndStrokeWidthFromDot-DVbQTreU.js";import"./ActiveShapeUtils-BGtP_9iK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-MYuvHf2c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-RhNIRJfp.js";import"./symbol-Bj9pXaRF.js";import"./useElementOffset-DhnL9i8I.js";import"./uniqBy-lLim1SQG.js";import"./iteratee-DPVBHhbI.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
