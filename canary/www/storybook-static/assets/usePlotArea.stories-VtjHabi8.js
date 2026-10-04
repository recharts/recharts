import{R as t}from"./iframe-BWaBJMJm.js";import{j as a}from"./RechartsWrapper-C_LHq0Dp.js";import{R as p}from"./zIndexSlice-CtmWcXao.js";import{C as n}from"./ComposedChart-DVxlQhI3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CU6Xn_4t.js";import{X as l}from"./XAxis-Du0WrONz.js";import{Y as h}from"./YAxis-BbW4o0g7.js";import{L as c}from"./Legend-qoAhyscU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoTf8eWq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-WjeILgtA.js";import"./throttle-Dt5qCkk5.js";import"./index-DUifKCeq.js";import"./index-D2GUCawm.js";import"./isWellBehavedNumber-hjVXvh9H.js";import"./d3-scale-DYdeDEBW.js";import"./index-I7xfvYkR.js";import"./index-B1abja9I.js";import"./renderedTicksSlice-B4vPTGd7.js";import"./index-BakoavmS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTHkZiLZ.js";import"./chartDataContext-D5Ez6fbj.js";import"./CategoricalChart-DZaCTL-I.js";import"./Layer-WH1GH-3R.js";import"./Curve-BVKe4kAy.js";import"./types-CeFzDtUp.js";import"./step-DX3wHcPe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CqoL6PKs.js";import"./Label-DaAaSDK3.js";import"./Text-CaLxBG_J.js";import"./DOMUtils-ZU1bRPvN.js";import"./useId-DH400x7B.js";import"./useBackwardsCompatibleTheme-C9V53e4Q.js";import"./ZIndexLayer-BbdMqToM.js";import"./useAnimationId-CrzFE7bT.js";import"./ActivePoints-DYqGU2MV.js";import"./Dot-bDcTuFpT.js";import"./RegisterGraphicalItemId-B7vtKiJL.js";import"./ErrorBarContext-BU0PpEiW.js";import"./GraphicalItemClipPath-DPY_uU75.js";import"./SetGraphicalItem-DSLLIs8g.js";import"./getRadiusAndStrokeWidthFromDot-DUWDkXPH.js";import"./ActiveShapeUtils-DlN6eMVb.js";import"./useGraphicalItemIdentity-B-PLK1-q.js";import"./CartesianAxis-ihxfexzN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CtYV93jH.js";import"./symbol-Djg3VJZl.js";import"./useElementOffset-B3gaIHtz.js";import"./uniqBy-y_0rvX4w.js";import"./iteratee-CZlOM5B3.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
