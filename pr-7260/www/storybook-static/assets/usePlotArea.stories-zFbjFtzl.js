import{e as t}from"./iframe-8w6hSOb3.js";import{P as a}from"./PlotAreaShower-xfHEq74j.js";import{c as p}from"./hooks-DH6TblVT.js";import{R as s}from"./arrayEqualityCheck-BcSkIFjy.js";import{C as n}from"./ComposedChart-BXY8auWm.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CsDzzK8s.js";import{X as h}from"./XAxis-AMaL4weY.js";import{Y as c}from"./YAxis-Bf2ShXUT.js";import{L as g}from"./Legend-B3iEZQNB.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BdSUC2dN.js";import"./immer-CNp4ouR9.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./zIndexSlice-xR0tBw_b.js";import"./renderedTicksSlice-CehvSBlF.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./Layer-VbLV2S9I.js";import"./ReactUtils-RNztsw35.js";import"./Label-CbTww8i0.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./ZIndexLayer-BZxHBglw.js";import"./ActivePoints-c5MJ5OkK.js";import"./Dot-B5t0Roay.js";import"./types-DDD23-V2.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./ErrorBarContext-BMaq7Beg.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./useAnimationId-kYjgFxKg.js";import"./getRadiusAndStrokeWidthFromDot-BGkBgNmA.js";import"./ActiveShapeUtils-CG73MWk5.js";import"./isPlainObject-UED8GYmG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYl8kbGp.js";import"./Trapezoid-BJuggP_P.js";import"./Sector-C0Mog3VL.js";import"./Symbols-HCV45nTw.js";import"./symbol-DDPk1XI3.js";import"./step-CO9P-pBw.js";import"./Curve-DCDk8LQV.js";import"./CartesianAxis-B-EZEcGt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BS3k8eV3.js";import"./uniqBy-BKrVti4k.js";import"./iteratee-E4lAKDYa.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
