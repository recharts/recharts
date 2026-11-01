import{R as e}from"./iframe-LXaU_yGQ.js";import{R as i}from"./zIndexSlice-BSsrgEaY.js";import{C as n}from"./ComposedChart-Dk11ZJ3E.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-OUGW3i4b.js";import{X as s}from"./XAxis-p7HCxuCB.js";import{Y as c}from"./YAxis-CSeoCJK5.js";import{L as d}from"./Line-DVYXuLoQ.js";import{R as g}from"./ReferenceLine-C2WShJL3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./throttle-ByKIQNrZ.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./RechartsWrapper-D3XMumfr.js";import"./axisSelectors-COTFFsL0.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-xVZA29h1.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./CartesianAxis-DZ_FsRV8.js";import"./Layer-CHoN3bhu.js";import"./Text-B2wTTXhn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./Label-DYJ5zyBE.js";import"./types-WPs3xsFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Bdp5Gfaz.js";import"./step-nDdn65YX.js";import"./path-DyVhHtw_.js";import"./LabelList-edsO3Rk5.js";import"./ActivePoints-NFoR1iD6.js";import"./Dot-DyfeLkRk.js";import"./activeStyles-PwSBVgUE.js";import"./useAnimationId-BI8ofMSC.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./Symbols-DwjhqM4z.js";import"./symbol-BBQKO5RK.js";import"./ErrorBarContext-DEyq_U4L.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getRadiusAndStrokeWidthFromDot-DPvgYAJF.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
