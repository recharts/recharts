import{R as t}from"./iframe-CThZUbdE.js";import{u as a}from"./CategoricalChart-DpMx8cAV.js";import{R as p}from"./zIndexSlice-BDry6QRp.js";import{C as s}from"./ComposedChart-BYeWN0El.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-PXaX8gsH.js";import{X as l}from"./XAxis-Czxsq92a.js";import{Y as h}from"./YAxis-COnF85r4.js";import{L as c}from"./Legend-D5EFqXIt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./immer-6NPp0ZGq.js";import"./get-VHoxVJrE.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./Layer-C1XMVqEx.js";import"./Curve-CddvI1GC.js";import"./types-BBvrAdrd.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-PV5URjHV.js";import"./Label-CE0t5kQZ.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./ZIndexLayer-LL2CdfOc.js";import"./useAnimationId-DzTn0J9i.js";import"./ActivePoints-NvSpkC2T.js";import"./Dot-n9UR6iqn.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./getRadiusAndStrokeWidthFromDot-CteGZ8Gy.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./CartesianAxis-BM-bncSs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DOMkQYi1.js";import"./symbol-DhevQ36Y.js";import"./useElementOffset-I2abokvN.js";import"./uniqBy-CWUL-oIl.js";import"./iteratee-BoWDAhHy.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
