import{R as t}from"./iframe-BRuR_Aem.js";import{z as a}from"./RechartsWrapper-Bn4G8r7u.js";import{R as p}from"./zIndexSlice-Bj7VXWF6.js";import{C as n}from"./ComposedChart-BfbWwovc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CIteCgCI.js";import{X as l}from"./XAxis-DkgTjfQy.js";import{Y as h}from"./YAxis-CTNE1Ach.js";import{L as c}from"./Legend-CGqrsjIi.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB_4huk8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-vJ_QG27E.js";import"./throttle-Bze-tpN5.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D-1jLUlb.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./getRadiusAndStrokeWidthFromDot-COuDjPMk.js";import"./Layer-DH8vqzA_.js";import"./Curve-2VjViydv.js";import"./types-LyIymARE.js";import"./step-DSV5xix0.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D3durKHg.js";import"./Label-BRU8Jowp.js";import"./Text-DCSoJ6K5.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./ActivePoints-DjHxL6MU.js";import"./Dot-BB75ixWu.js";import"./activeStyles-ddHtcBjm.js";import"./useAnimationId-CqnKfWIo.js";import"./Symbols-TJS8yyiq.js";import"./symbol-DRudrdJt.js";import"./ErrorBarContext-BSmlh0M0.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./useEffectiveDataKey-CJ_E1q2F.js";import"./CartesianAxis-khCvplyM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CzKiCd-F.js";import"./uniqBy-CMkG7L-l.js";import"./iteratee-Bz7ftEAa.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
