import{R as t}from"./iframe-DpsH3FWg.js";import{j as a}from"./RechartsWrapper-WUMeUOBJ.js";import{R as p}from"./zIndexSlice-DpXR3r86.js";import{C as n}from"./ComposedChart-CPIOfZdo.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BXZUAWkK.js";import{X as l}from"./XAxis-D8_Sc658.js";import{Y as h}from"./YAxis-BVDotbGx.js";import{L as c}from"./Legend-D7vb3GG_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B653NMBN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cnsws1ta.js";import"./throttle-pd_IuHQK.js";import"./index-nXowbRrq.js";import"./index-DYUXUABx.js";import"./isWellBehavedNumber-CtQQO4KW.js";import"./d3-scale-Cs9sdONk.js";import"./index-CIajmslP.js";import"./index-DxSZbnRs.js";import"./renderedTicksSlice-DrH2a5-v.js";import"./index-CVZddw2l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C8K3fZMD.js";import"./chartDataContext-_uRDQIfr.js";import"./CategoricalChart-DsF0HvmF.js";import"./Layer-Btr6yg86.js";import"./Curve-CkFcG6My.js";import"./types-FBSj3Ggh.js";import"./step-DUO82dEI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAz_Z0dD.js";import"./Label-3DC01MfC.js";import"./Text-SIhZd4Wm.js";import"./DOMUtils-BqoTnLQ5.js";import"./useId-T5MCLwe8.js";import"./useBackwardsCompatibleTheme-Buw_TzFQ.js";import"./ZIndexLayer-DviGCp3_.js";import"./useAnimationId-CkVnF8is.js";import"./ActivePoints-8WobBp4l.js";import"./Dot-ykdJ8Wuo.js";import"./RegisterGraphicalItemId-Byr_SbEj.js";import"./ErrorBarContext-Dy-Oq2cq.js";import"./GraphicalItemClipPath--FUz8cke.js";import"./SetGraphicalItem-eZDMBVc_.js";import"./getRadiusAndStrokeWidthFromDot-BIoTJvPK.js";import"./ActiveShapeUtils-DHwgxjaA.js";import"./useGraphicalItemIdentity-DH6n4cBQ.js";import"./CartesianAxis-CWPiqkJL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-saiSGD9Z.js";import"./symbol-C8mnB45c.js";import"./useElementOffset-eYeZo5wP.js";import"./uniqBy-BuW3nUeI.js";import"./iteratee-Burh-v8j.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
