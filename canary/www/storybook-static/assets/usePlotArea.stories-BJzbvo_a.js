import{R as t}from"./iframe-DtUqFz4i.js";import{j as a}from"./RechartsWrapper-okeo-S0V.js";import{R as p}from"./zIndexSlice-D7wiyJvz.js";import{C as n}from"./ComposedChart-CzQBCEWP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C8UhNYz0.js";import{X as l}from"./XAxis-CDer3rOu.js";import{Y as h}from"./YAxis-BMscqJB-.js";import{L as c}from"./Legend-nKNwmpxg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DKiSvbvB.js";import"./throttle-Xq_SZc3C.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./isWellBehavedNumber-BD9jivhZ.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./index-Dz7I98PR.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./Layer-DaGE4xdO.js";import"./Curve-dyv5wxAX.js";import"./types-DIyWN1O2.js";import"./step-6HhaZYhK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bqh_lJsV.js";import"./Label-DSBhBvVo.js";import"./Text-Ci0TXZMh.js";import"./DOMUtils-CAVjRHi7.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./useAnimationId-yAmPQwMn.js";import"./ActivePoints-ConO_hsx.js";import"./Dot-CtYAIqQI.js";import"./RegisterGraphicalItemId-DHE_UdIi.js";import"./ErrorBarContext-CnzHFxN7.js";import"./GraphicalItemClipPath-SRfs0G_i.js";import"./SetGraphicalItem-Cs09Djqk.js";import"./getRadiusAndStrokeWidthFromDot-qVB91pCe.js";import"./ActiveShapeUtils-Dur4qT68.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CvUiwg6W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DUAmEX4d.js";import"./symbol-CuIzRMST.js";import"./useElementOffset-zKQGkCXa.js";import"./uniqBy-CF70an62.js";import"./iteratee-BsjABlDl.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
