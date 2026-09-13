import{R as t}from"./iframe-DyrN_51d.js";import{j as a}from"./RechartsWrapper-DkN-Eg1-.js";import{R as p}from"./zIndexSlice-20W2dW_I.js";import{C as n}from"./ComposedChart-D587OAML.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BSKz0Foo.js";import{X as l}from"./XAxis-BrvsOOq-.js";import{Y as h}from"./YAxis-BoJncRS_.js";import{L as c}from"./Legend-DDrs35kw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bfr9Dapf.js";import"./throttle-Deocn2P3.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./Layer-Bhl1Azk1.js";import"./Curve-JRjNlxP0.js";import"./types-D2IYUNPt.js";import"./step-DtwkAaFX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_Ln2HVFG.js";import"./Label-BwFzhvIj.js";import"./Text-CV1ypZeZ.js";import"./DOMUtils-DIhf953N.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./useAnimationId-D9Lt2BUa.js";import"./ActivePoints-C6wxEM4H.js";import"./Dot-CXTwVenc.js";import"./RegisterGraphicalItemId-CVmkVACh.js";import"./ErrorBarContext-Bxc1YjcQ.js";import"./GraphicalItemClipPath-CA7J29cH.js";import"./SetGraphicalItem-lGNUC0L0.js";import"./getRadiusAndStrokeWidthFromDot-u76jjLdq.js";import"./ActiveShapeUtils-DpQnh-5h.js";import"./useGraphicalItemIdentity-CBB7gohW.js";import"./CartesianAxis-vw-O2ROQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-7Yfga5z7.js";import"./symbol-CDb3k9Xj.js";import"./useElementOffset-D2ZAhnE4.js";import"./uniqBy-D3fTQr9L.js";import"./iteratee-4xLB6-L6.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
