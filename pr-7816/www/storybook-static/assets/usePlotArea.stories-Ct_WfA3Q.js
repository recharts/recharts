import{R as t}from"./iframe-CuYkZAih.js";import{j as a}from"./RechartsWrapper-COZpTTaF.js";import{R as p}from"./zIndexSlice-0x3uku_R.js";import{C as n}from"./ComposedChart-BkMchBFr.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DV8dDFgR.js";import{X as l}from"./XAxis-CuSaxTWM.js";import{Y as h}from"./YAxis-2PiHbRgB.js";import{L as c}from"./Legend-Ce-6Z8Xs.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8cjP6Xa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DIa8K2JO.js";import"./throttle-gMp3XSAK.js";import"./index-D8cZoCL4.js";import"./index-BxmeqXxm.js";import"./isWellBehavedNumber-BcDmyfQy.js";import"./d3-scale-DA_CpRjn.js";import"./index-TSt0tMTq.js";import"./index-27otVVTa.js";import"./renderedTicksSlice-Cf_8fVTa.js";import"./index-C60udeJw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dlpQhUsY.js";import"./chartDataContext-FQ-3D9_1.js";import"./CategoricalChart-CzQsygRV.js";import"./Layer-GHV7gJU9.js";import"./Curve-C6S_ZKxy.js";import"./types-CPc5yIEA.js";import"./step-xkx3tdDV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B6_FAdg8.js";import"./Label-DkhadSFF.js";import"./Text-CXyYB23t.js";import"./DOMUtils-CE__HHZf.js";import"./useId-m8zXXplu.js";import"./useBackwardsCompatibleTheme-D-5GiVJq.js";import"./ZIndexLayer-DhyZBBI_.js";import"./useAnimationId-CKSd0jBH.js";import"./ActivePoints-989YAHN3.js";import"./Dot-lCEMTHT5.js";import"./RegisterGraphicalItemId-DI2Sgslq.js";import"./ErrorBarContext-DQRpVtQS.js";import"./GraphicalItemClipPath-BA9HfA5b.js";import"./SetGraphicalItem-Bwlc4Qg6.js";import"./getRadiusAndStrokeWidthFromDot-C8_uSveN.js";import"./ActiveShapeUtils-48Bcq-tK.js";import"./useGraphicalItemIdentity-DpHd4fG4.js";import"./CartesianAxis-D3i-DiW_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Nxac4q2q.js";import"./symbol-CM4B46nT.js";import"./useElementOffset-tb76Zf_3.js";import"./uniqBy-B5r4YX5y.js";import"./iteratee-CqsXLn41.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
