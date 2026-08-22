import{R as t}from"./iframe-ZEpSIPPd.js";import{u as a}from"./CategoricalChart-DKY1LJu7.js";import{R as p}from"./zIndexSlice-BjIiWKqJ.js";import{C as s}from"./ComposedChart-DfYyrCdH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CI-w3eB1.js";import{X as l}from"./XAxis-rWesO0MY.js";import{Y as h}from"./YAxis-DcukXRO0.js";import{L as c}from"./Legend-CrDXkNHG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BN48ENvM.js";import"./index-BaEUmZiD.js";import"./index-GhGxj3CA.js";import"./index-DwRwpWpN.js";import"./index-BYZIueV1.js";import"./throttle-c8LVmlRW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-kRjPN5q_.js";import"./resolveDefaultProps-BfzNSowR.js";import"./isWellBehavedNumber-BXmyHjL9.js";import"./d3-scale-BCV9yzNX.js";import"./renderedTicksSlice-DKo3nyKY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BcBN8Odf.js";import"./chartDataContext-6sDrIT9e.js";import"./Layer-BhDP8tdE.js";import"./Curve-BJ_Zw60j.js";import"./types-PAtN0CzN.js";import"./step-C4QDvCzF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BTDiJp51.js";import"./Label-DozjEBv8.js";import"./Text-BkbZubVW.js";import"./DOMUtils-DDyTL2Su.js";import"./useId-DFrG6yke.js";import"./useBackwardsCompatibleTheme-6dZyRN7A.js";import"./ZIndexLayer-BvS-888Y.js";import"./useAnimationId-DTOSNt54.js";import"./ActivePoints-LnlHxcy0.js";import"./Dot-YOcb-22K.js";import"./RegisterGraphicalItemId-gZSXozCr.js";import"./ErrorBarContext-CVqGi1a9.js";import"./GraphicalItemClipPath-DI_H7WUy.js";import"./SetGraphicalItem-C95qHxIx.js";import"./getRadiusAndStrokeWidthFromDot-BLf7D-Zv.js";import"./ActiveShapeUtils-D9QeB7oI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B5C14IH-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DnoOO3kY.js";import"./symbol-MnBIsPmn.js";import"./useElementOffset-DQwuldho.js";import"./uniqBy-CJQjOwF2.js";import"./iteratee-9quGMIsm.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
