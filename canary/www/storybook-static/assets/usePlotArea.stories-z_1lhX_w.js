import{R as t}from"./iframe-BMoFzqLG.js";import{u as a}from"./CategoricalChart-e4TDW-CP.js";import{R as p}from"./zIndexSlice-D2eW6ynO.js";import{C as s}from"./ComposedChart--18maMFA.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DfDRU7Tf.js";import{X as l}from"./XAxis-CPrZIqhG.js";import{Y as h}from"./YAxis-DTyCZ8Eb.js";import{L as c}from"./Legend-SafvJPhT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./throttle-CMa4JKLf.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DYuvxT8H.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./Layer-BF07rJeJ.js";import"./Curve-Bj9SvhiQ.js";import"./types-DnNtWK32.js";import"./step-CmTsx3cD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DtpOcSHY.js";import"./Label-C2sliePj.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./useAnimationId-DECqttvr.js";import"./ActivePoints-CGL78uWV.js";import"./Dot-BKpqXb-J.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./ErrorBarContext-gECkpo90.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getRadiusAndStrokeWidthFromDot-Dr3SeLyV.js";import"./ActiveShapeUtils-Deesho2z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DOx4dBf7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bp-WiaMS.js";import"./symbol-DJVN4EQ-.js";import"./useElementOffset-DpDs9Wpk.js";import"./uniqBy-DxO4yvi9.js";import"./iteratee-D8knRFDr.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
