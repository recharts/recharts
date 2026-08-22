import{R as t}from"./iframe-DXHKQ-h8.js";import{u as a}from"./CategoricalChart-njav6Y1l.js";import{R as p}from"./zIndexSlice-CsQg_s5y.js";import{C as s}from"./ComposedChart-C6cxeCbV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BiDvAtOX.js";import{X as l}from"./XAxis-Ckl7Pa3u.js";import{Y as h}from"./YAxis-BhGHb5Me.js";import{L as c}from"./Legend-CytQnx7k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NUOxXBTc.js";import"./index-D51whMVe.js";import"./index-DQazPbcg.js";import"./index-BoMz0vXG.js";import"./index-Bfb_F_qW.js";import"./throttle-CSmQrAIR.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C2FhXeDp.js";import"./resolveDefaultProps-CH3DJ1U7.js";import"./isWellBehavedNumber-B2OYT9p4.js";import"./d3-scale-x1kkipsN.js";import"./renderedTicksSlice-B6yr5Yhh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAA2O-Wi.js";import"./chartDataContext-Co2nG42J.js";import"./Layer-D8Of9gCi.js";import"./Curve-CiIvzF30.js";import"./types-C9KPOeuA.js";import"./step-Bw_C9qgc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BnmUd_N9.js";import"./Label-BCe67yO0.js";import"./Text-Bb1JrkH_.js";import"./DOMUtils-BSgnm9w6.js";import"./useId-DlJk-nhm.js";import"./useBackwardsCompatibleTheme-DuqY5Wqi.js";import"./ZIndexLayer-DLuwldtV.js";import"./useAnimationId-WfbS1c84.js";import"./ActivePoints-BXDp0MVl.js";import"./Dot-yuxaqmcb.js";import"./RegisterGraphicalItemId-B_2bGmJg.js";import"./ErrorBarContext-CdeH4fn3.js";import"./GraphicalItemClipPath-BZQLFBTi.js";import"./SetGraphicalItem-CODvRDn4.js";import"./getRadiusAndStrokeWidthFromDot-C7lzhg_f.js";import"./ActiveShapeUtils-C_tGIq0b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-eQGKlaa2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-sS9GnGcd.js";import"./symbol-Be4yaci6.js";import"./useElementOffset-CgmBroAF.js";import"./uniqBy-iZsqe27X.js";import"./iteratee-BWIQYiSv.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
