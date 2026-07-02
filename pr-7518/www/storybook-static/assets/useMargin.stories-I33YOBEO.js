import{R as r}from"./iframe-BNNSts13.js";import{E as a,R as p}from"./zIndexSlice-B_0Vu2Ew.js";import{C as s}from"./ComposedChart-DHvLsOhm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-DHXYmqa3.js";import{X as d}from"./XAxis-CQLk361J.js";import{Y as h}from"./YAxis-BE5H5SGl.js";import{L as c}from"./Legend-CeXv6FuD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBpSFV7b.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./get-C9gxS0ZW.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./Layer-BUN3jU8m.js";import"./Curve-ByI9xGCG.js";import"./types-CMjaNGyL.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-u006QBg6.js";import"./Label-B9RstaAA.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./useAnimationId-CPqzTwnW.js";import"./ActivePoints-z37_g_gd.js";import"./Dot-GJcUxxVA.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getRadiusAndStrokeWidthFromDot-WWzyayAr.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./CartesianAxis-Bo6M1fU4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DzjVk4t8.js";import"./symbol-CA3p36J7.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";const dr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:e=>r.createElement(p,{width:e.width,height:e.height},r.createElement(s,{data:n,margin:e.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const hr=["UseMargin"];export{t as UseMargin,hr as __namedExportsOrder,dr as default};
