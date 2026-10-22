import{R as t}from"./iframe-BqFv--n0.js";import{e as p}from"./RechartsWrapper-CRaC0TZF.js";import{R as a}from"./zIndexSlice-CQSP_367.js";import{C as n}from"./ComposedChart-BGPVJCGM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cu7SDvK4.js";import{X as l}from"./XAxis-Dd_n4Mfj.js";import{Y as h}from"./YAxis-C7K0-Kt6.js";import{L as c}from"./Legend-DGzQE3-3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-ZWEeDNRz.js";import"./throttle-u_PA2Aue.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./d3-scale-CFuq5uTk.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./index-3DQVsuvq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./Layer-VP2k7KQb.js";import"./Curve-B2qT8EGI.js";import"./types-A41OMRS1.js";import"./step-DAllZbzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-C0pD60nL.js";import"./Label-DI-ST-i-.js";import"./Text-BW5R7YWF.js";import"./pageBackground-B1lJR1Eh.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./ZIndexLayer-m5JcFv6F.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./ActivePoints-BuaaOhKZ.js";import"./Dot-Ck25bOyu.js";import"./ErrorBarContext-CHaebdqW.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getRadiusAndStrokeWidthFromDot-pw39BaVD.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./useEffectiveDataKey-B-x1_7m_.js";import"./CartesianAxis-CpohuUTj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BFAApok9.js";import"./symbol-CKqYQjmZ.js";import"./useElementOffset-DK8O9wAS.js";import"./uniqBy-BAbl3tI-.js";import"./iteratee-DOA0wS8i.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,yt as __namedExportsOrder,ft as default};
