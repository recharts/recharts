import{R as t}from"./iframe-gJmHOoV1.js";import{u as a}from"./CategoricalChart-Bdw8EORd.js";import{R as p}from"./zIndexSlice-SLldW8vD.js";import{C as s}from"./ComposedChart-Cjd81jW2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BpslqpXK.js";import{X as l}from"./XAxis-CL1K5HKB.js";import{Y as h}from"./YAxis-BZbOJGmt.js";import{L as c}from"./Legend-bxQVu_p9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-uLgma0gs.js";import"./index-D2MlSgDp.js";import"./index-_1fsdksf.js";import"./index-BdFJZkPY.js";import"./index-DNgAqdgl.js";import"./throttle-C0HH0ZDc.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BbNLjq-V.js";import"./resolveDefaultProps-EuD2qw6Y.js";import"./isWellBehavedNumber-C4nB07Ky.js";import"./d3-scale-SCvl-fAD.js";import"./renderedTicksSlice-DkFdVLqh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3NOhLAb.js";import"./chartDataContext-Btj7Fomq.js";import"./Layer-DMyVzZAK.js";import"./Curve-Dowet-ta.js";import"./types-BsPCKB2-.js";import"./step-LqTLA14X.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DO16LAh4.js";import"./Label-BW3VHSxT.js";import"./Text-BFMrUcgU.js";import"./DOMUtils-DoteccEu.js";import"./useBackwardsCompatibleTheme-t9HOmvr9.js";import"./ZIndexLayer-Cs9adZB_.js";import"./useAnimationId-BPNuV2bD.js";import"./ActivePoints-B7JRncTK.js";import"./Dot-RQPmIpyp.js";import"./RegisterGraphicalItemId-ClU1Ba2D.js";import"./ErrorBarContext-Dv7pLviF.js";import"./GraphicalItemClipPath-C8fMELX2.js";import"./SetGraphicalItem-BuXSQ0wS.js";import"./getRadiusAndStrokeWidthFromDot-C6MJNSc7.js";import"./ActiveShapeUtils-D-WSdclC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Byci1LgV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-z9xxGOoR.js";import"./symbol-CISepo4K.js";import"./useElementOffset-Y-qWOeHt.js";import"./uniqBy-BvB2bptq.js";import"./iteratee-JebvSegM.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
