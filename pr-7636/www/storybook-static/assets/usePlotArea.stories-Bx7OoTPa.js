import{R as t}from"./iframe-CtnQdIY7.js";import{u as a}from"./CategoricalChart-DN8vznAz.js";import{R as p}from"./zIndexSlice-uhZ24fvC.js";import{C as s}from"./ComposedChart-CQbfWDL_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BhbLTTAA.js";import{X as l}from"./XAxis-XO5v4-hr.js";import{Y as h}from"./YAxis-18LfpUGe.js";import{L as c}from"./Legend-BiRbjuQ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./index-CsEievrw.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./throttle-BK98nfBm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-RZmSNqcb.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./Layer-CrHPq_vq.js";import"./Curve-maCREAuN.js";import"./types-CuvpKj9W.js";import"./step-Dqi6RR6U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-8qrP3C.js";import"./Label-qBa5cEUX.js";import"./Text-B-1OewBP.js";import"./DOMUtils-BvAafYtQ.js";import"./ZIndexLayer-DMqHwKfA.js";import"./useAnimationId-DN6fR6pH.js";import"./ActivePoints-pXmyAmZV.js";import"./Dot-C0XFWsWB.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./ErrorBarContext-ryDidWCv.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getRadiusAndStrokeWidthFromDot-B6TsNsTR.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B2-Emwk9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQM-19oT.js";import"./symbol-CyjWwlnJ.js";import"./useElementOffset-qg6DMFTI.js";import"./uniqBy-B5Eni1L2.js";import"./iteratee-Cjnl5Vus.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
