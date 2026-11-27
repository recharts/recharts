import{R as t}from"./iframe-DNnhIzqd.js";import{z as a}from"./RechartsWrapper-CrR43_nu.js";import{R as p}from"./zIndexSlice-CZnRUfU-.js";import{C as n}from"./ComposedChart-Dwrm7GV8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bslt7b3k.js";import{X as l}from"./XAxis-DyyKFn3c.js";import{Y as h}from"./YAxis-DL1XukoQ.js";import{L as c}from"./Legend-rRcOGwD-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./axisSelectors-D3RI42dK.js";import"./throttle-QyoUWs98.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./polarAxisSelectors-D96CZuW6.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DjL9qVWl.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Layer-BC8osa1v.js";import"./Curve-BuuEl7Oa.js";import"./types-BRWBXBDp.js";import"./step-CcvBplbA.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BLzS4I_n.js";import"./Label-zRO_Glrc.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./activeStyles-C2NC3gaF.js";import"./useAnimationId-nuwJNMaM.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./ErrorBarContext-BEOQHAHp.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./CartesianAxis-DyWgnQe6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BaFq-POl.js";import"./uniqBy-_gekbtiv.js";import"./iteratee-6f6iZKQ8.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
