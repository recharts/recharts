import{R as t}from"./iframe-oYyBRks2.js";import{z as a}from"./RechartsWrapper-BEJButs1.js";import{R as p}from"./zIndexSlice-CbmXT1dz.js";import{C as n}from"./ComposedChart-B-eq2Fp1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BvBumo1d.js";import{X as l}from"./XAxis-DvAGam0D.js";import{Y as h}from"./YAxis-CQwSDKOg.js";import{L as c}from"./Legend-D5cNAlWP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-lgcxhifZ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CzrEReB-.js";import"./throttle-teQP-xJt.js";import"./index-uP8uPv2q.js";import"./index-C0E8rQWU.js";import"./polarAxisSelectors-FwVZQ2F9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dsmu7PfS.js";import"./index-CorLv6ho.js";import"./index-DI7MM_Df.js";import"./renderedTicksSlice-PDwTct7N.js";import"./index-DhsLJ5T7.js";import"./CartesianChart-Bd-kZVr0.js";import"./ZIndexPortal-B7800aDw.js";import"./CategoricalChart-DoegTXhB.js";import"./Layer-CyxA7s2s.js";import"./Curve-BV9qBPRD.js";import"./types-C_jjefDJ.js";import"./step-DY5Xaa9y.js";import"./path-DyVhHtw_.js";import"./LabelList-D0at5SMs.js";import"./Label-D2Ghzufd.js";import"./Text-BTTN-58y.js";import"./DOMUtils-oL4xRmBr.js";import"./ZIndexLayer-D9yXy4ut.js";import"./ActivePoints-N3FvSUzX.js";import"./Dot-hWqukiPc.js";import"./activeStyles-chOek7GE.js";import"./useAnimationId-C-eWMsqK.js";import"./dataEntryStyles-C_5MqVGt.js";import"./Symbols-DyH8vTj1.js";import"./symbol-DfdL_uUz.js";import"./ErrorBarContext-CVpEUN9z.js";import"./SetGraphicalItem-CofyTZmK.js";import"./getRadiusAndStrokeWidthFromDot-DhNYhgAE.js";import"./ActiveShapeUtils-BUKShifC.js";import"./useEffectiveDataKey-BvG_PE5-.js";import"./CartesianAxis-C0SgAXkt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-BuAadA4s.js";import"./useElementOffset-DYKRqk9h.js";import"./uniqBy-DpT0Q-qD.js";import"./iteratee-6fmcBfsh.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
