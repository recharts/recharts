import{R as t}from"./iframe-5Ln2iLqA.js";import{j as a}from"./RechartsWrapper-BHuvBmBF.js";import{R as p}from"./zIndexSlice-DFex-upv.js";import{C as n}from"./ComposedChart-D13UaSHz.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-0wKA-RqY.js";import{X as l}from"./XAxis-C-UtlQCm.js";import{Y as h}from"./YAxis-BgyWvHpM.js";import{L as c}from"./Legend-CnXbXW_A.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-IjnCGfXZ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BMU5_zje.js";import"./throttle-BvN7rUxU.js";import"./index-CzncCR4k.js";import"./index-D7j-yBVr.js";import"./isWellBehavedNumber-CdZO7OXS.js";import"./d3-scale-DUTFXTFy.js";import"./index-SDNpyV8r.js";import"./index-1g9ahHpc.js";import"./renderedTicksSlice-B6ULVZ0v.js";import"./index-LP2TzsJ5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1RwtF1h6.js";import"./chartDataContext-BWMyO-qW.js";import"./CategoricalChart-no-3Z0-_.js";import"./Layer-DAiXs0AA.js";import"./Curve-CjwJajTH.js";import"./types-DPL8-78e.js";import"./step-Dlf9LIeZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-axJun3VY.js";import"./Label-9F2YL2wp.js";import"./Text-oIzTAhmK.js";import"./DOMUtils-Cf_dBvDb.js";import"./useId-DeG95-BA.js";import"./useBackwardsCompatibleTheme-C1dsWZXc.js";import"./ZIndexLayer-ZmLJud1E.js";import"./useAnimationId-CJTvG1Qi.js";import"./ActivePoints-CyfXnlmG.js";import"./Dot-BtmEb1H2.js";import"./RegisterGraphicalItemId-08XYAnQ7.js";import"./ErrorBarContext-Mgqq5-U9.js";import"./GraphicalItemClipPath-CFv0pGXv.js";import"./SetGraphicalItem-woQRWKGe.js";import"./getRadiusAndStrokeWidthFromDot-Cd93T_Q0.js";import"./ActiveShapeUtils-DterXnUU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-TNvZ3AHE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CDH7p16m.js";import"./symbol-8zOBKyIH.js";import"./useElementOffset-tgIx7o39.js";import"./uniqBy-DUSKgABV.js";import"./iteratee-BinWTTLm.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
