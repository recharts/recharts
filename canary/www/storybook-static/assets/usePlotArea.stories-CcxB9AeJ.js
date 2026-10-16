import{R as t}from"./iframe-XShEXmHR.js";import{e as a}from"./RechartsWrapper-WU0hX8ZH.js";import{R as p}from"./zIndexSlice-BbKyzabk.js";import{C as n}from"./ComposedChart-Buz-P00K.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BHkg6SFm.js";import{X as l}from"./XAxis-DWLQMeD5.js";import{Y as h}from"./YAxis-CC_fCC6K.js";import{L as c}from"./Legend-81x18Ee1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DM0s23ft.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSJ2InJO.js";import"./throttle-DGpDaXVx.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./d3-scale-DlV_OlJQ.js";import"./index-B0AN-0kz.js";import"./index-C8Ku-gFK.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-CNWPVzDl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./Layer-C_-u4_qv.js";import"./Curve-BLSppaDw.js";import"./types-Du-HQFzW.js";import"./step-DYrGddVY.js";import"./path-DyVhHtw_.js";import"./activeStyles-JUu5k5N9.js";import"./Label-PHQocy7u.js";import"./Text-DdUz3atv.js";import"./pageBackground-Caz1wwpV.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./ZIndexLayer-BjS9bgAg.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./ActivePoints-BWEWclRb.js";import"./Dot-CF6MExt8.js";import"./ErrorBarContext-D_UY1Ewg.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./getRadiusAndStrokeWidthFromDot-B8bE17TU.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./useEffectiveDataKey-Ca_DBmdg.js";import"./CartesianAxis-DXjpiMVV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEnD6S3J.js";import"./symbol-BPoRGGbG.js";import"./useElementOffset-CDXnga2p.js";import"./uniqBy-2p13vlX2.js";import"./iteratee-Dckbnh0N.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
