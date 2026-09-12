import{R as t}from"./iframe-DqI8fZWc.js";import{j as a}from"./RechartsWrapper-DQO3SMEw.js";import{R as p}from"./zIndexSlice-9oYbhSdQ.js";import{C as n}from"./ComposedChart-C5b2LV09.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B1PViTKj.js";import{X as l}from"./XAxis-DN7qZjW9.js";import{Y as h}from"./YAxis-BOv489WA.js";import{L as c}from"./Legend-Dy0tOTjK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Degnf0cl.js";import"./throttle-BTCEGSKU.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./d3-scale-dm0sSvQ9.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./index-DPm6oXEP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./Layer-Ckim_S0G.js";import"./Curve-BfuijxKL.js";import"./types-D6uFqDQP.js";import"./step-CpsUov4P.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-rYif9Enh.js";import"./Label-B6t_CsQ4.js";import"./Text-9XM6GnGO.js";import"./DOMUtils-C2uAcB2d.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./ZIndexLayer-CmCgphBH.js";import"./useAnimationId-sXalVax-.js";import"./ActivePoints-BpZWKXXH.js";import"./Dot-D3i3k8Cq.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./ErrorBarContext-CkD9Qczk.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./getRadiusAndStrokeWidthFromDot-Bz_0HqQj.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";import"./CartesianAxis-BLk0unaa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEX8TaeC.js";import"./symbol-CjwAsj25.js";import"./useElementOffset-BmnmgRHV.js";import"./uniqBy-D9j1xmZr.js";import"./iteratee-Dfs9TkuY.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
