import{R as t}from"./iframe-LXaU_yGQ.js";import{z as a}from"./RechartsWrapper-D3XMumfr.js";import{R as p}from"./zIndexSlice-BSsrgEaY.js";import{C as n}from"./ComposedChart-Dk11ZJ3E.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DVYXuLoQ.js";import{X as l}from"./XAxis-p7HCxuCB.js";import{Y as h}from"./YAxis-CSeoCJK5.js";import{L as c}from"./Legend-CW4FQckG.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./get-cF5BDHN6.js";import"./axisSelectors-COTFFsL0.js";import"./throttle-ByKIQNrZ.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-xVZA29h1.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./Layer-CHoN3bhu.js";import"./Curve-Bdp5Gfaz.js";import"./types-WPs3xsFH.js";import"./step-nDdn65YX.js";import"./path-DyVhHtw_.js";import"./LabelList-edsO3Rk5.js";import"./Label-DYJ5zyBE.js";import"./Text-B2wTTXhn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./ActivePoints-NFoR1iD6.js";import"./Dot-DyfeLkRk.js";import"./activeStyles-PwSBVgUE.js";import"./useAnimationId-BI8ofMSC.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./Symbols-DwjhqM4z.js";import"./symbol-BBQKO5RK.js";import"./ErrorBarContext-DEyq_U4L.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getRadiusAndStrokeWidthFromDot-DPvgYAJF.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./CartesianAxis-DZ_FsRV8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BTM80VK-.js";import"./uniqBy-BQLHmkt7.js";import"./iteratee-CVfcQAqg.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
