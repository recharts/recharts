import{R as t}from"./iframe-_TSN2GeP.js";import{j as a}from"./RechartsWrapper-BXs5OB5c.js";import{R as p}from"./zIndexSlice-D96uBoAp.js";import{C as n}from"./ComposedChart-z5izNflA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-idHL6Voh.js";import{X as l}from"./XAxis-BsztGX7X.js";import{Y as h}from"./YAxis-CFqjD2S5.js";import{L as c}from"./Legend-CuaodD7Y.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D9QDYjax.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dd3nK3xc.js";import"./throttle-Cil6wORT.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./Layer-9vgq1u7o.js";import"./Curve-BfZHkOXV.js";import"./types-DD8CfvEw.js";import"./step-B86fSev8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DzytQgaE.js";import"./Label-mOwsaJBj.js";import"./Text-E_mkl092.js";import"./DOMUtils-FVlzESpl.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./ZIndexLayer-CuHtjJTp.js";import"./useAnimationId-JMLdgXcg.js";import"./ActivePoints-CoOgGNlR.js";import"./Dot-DYuabF4m.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./ErrorBarContext-DL7P0RQ2.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./getRadiusAndStrokeWidthFromDot-CAf45XRU.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";import"./CartesianAxis-DiCtkIDj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CVMCwj0Q.js";import"./symbol-BZoobV8K.js";import"./useElementOffset-HEsArA2s.js";import"./uniqBy-DTFHfYak.js";import"./iteratee-deCpNbOg.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
