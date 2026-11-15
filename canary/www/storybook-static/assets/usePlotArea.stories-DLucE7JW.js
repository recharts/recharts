import{R as t}from"./iframe-CywB74O-.js";import{z as a}from"./RechartsWrapper-DNXYBwim.js";import{R as p}from"./zIndexSlice-CuZ12U6x.js";import{C as n}from"./ComposedChart-DnMaCTiC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CuUolajC.js";import{X as l}from"./XAxis-BnyIc3dE.js";import{Y as h}from"./YAxis-BQxfFMOH.js";import{L as c}from"./Legend-CHJA5PmZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Gc3kbVEc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlSjRH8p.js";import"./throttle-Cdx6aCwi.js";import"./index-B71Ze7LN.js";import"./index-DBD4vW62.js";import"./polarAxisSelectors-CHx-smd7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6sMKT8T.js";import"./index-DPjYOBE8.js";import"./index-CmTmClEE.js";import"./renderedTicksSlice-s1l-mRnQ.js";import"./index-DwB73Oyx.js";import"./fillDefinitions-CMU9craw.js";import"./CartesianChart-CiFd4vci.js";import"./chartDataContext-C42Xk_ee.js";import"./CategoricalChart-CByovhBV.js";import"./Layer-BeaWmaSV.js";import"./Curve-BR2e6dhB.js";import"./types-DUxXs5Ud.js";import"./step-DvAd1GMT.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BnKQuw5H.js";import"./Label-DQEyyaka.js";import"./Text-D8_iVJPC.js";import"./ZIndexLayer-CHuGvNnR.js";import"./ActivePoints-CULdSp3M.js";import"./Dot-CZ266pMm.js";import"./activeStyles-yKq-qtiq.js";import"./useAnimationId-DiaU742M.js";import"./Symbols-CkA0fnmK.js";import"./symbol-Bymi0eF-.js";import"./ErrorBarContext-BRsViJuO.js";import"./SetGraphicalItem-CWyrJmam.js";import"./getRadiusAndStrokeWidthFromDot-Dx2mkX1A.js";import"./ActiveShapeUtils-DRieSTBH.js";import"./useEffectiveDataKey-CjiZk5NG.js";import"./CartesianAxis-BkY9x357.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DGFvSoKL.js";import"./uniqBy-lBBs8O3F.js";import"./iteratee-Dqbbdx6l.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
