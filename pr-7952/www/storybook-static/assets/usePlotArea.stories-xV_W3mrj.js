import{R as t}from"./iframe-W_agkVyV.js";import{e as a}from"./RechartsWrapper-C3mPyrs7.js";import{R as p}from"./zIndexSlice-CTdReD9p.js";import{C as n}from"./ComposedChart-C5TkesQ1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CHfdY4oG.js";import{X as l}from"./XAxis-BMo9pONJ.js";import{Y as h}from"./YAxis-BF1PYNAy.js";import{L as c}from"./Legend-BtXzKbhi.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-6axja2Em.js";import"./throttle-CA9ZAVQz.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./Layer-BtznfAPn.js";import"./Curve-BtaxSMiV.js";import"./types-CaM0OvRl.js";import"./step-DBl9LSRi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BahHAzuq.js";import"./Label-ClOsex7o.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./ZIndexLayer-BRJamsEl.js";import"./useAnimationId-Bm_zuzY4.js";import"./dataEntryStyles-ubI82mtZ.js";import"./ActivePoints-BV4SsbUp.js";import"./Dot-DTv2KvAS.js";import"./ErrorBarContext-Bg5MlTZs.js";import"./GraphicalItemClipPath-eVqzfYHN.js";import"./SetGraphicalItem-MNgoA9Pf.js";import"./getRadiusAndStrokeWidthFromDot-HZaFqHia.js";import"./ActiveShapeUtils-Ba2JWET-.js";import"./useEffectiveDataKey-Bzuj7hT4.js";import"./CartesianAxis-CPOh9De0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CsmzfHDw.js";import"./symbol-Dglao2xo.js";import"./useElementOffset-DTnjneKq.js";import"./uniqBy-CNAIty-g.js";import"./iteratee-7xt3GUi6.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
