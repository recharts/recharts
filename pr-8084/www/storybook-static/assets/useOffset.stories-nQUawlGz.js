import{R as t}from"./iframe-ZGmrrukO.js";import{y as p}from"./RechartsWrapper-D3dierpX.js";import{R as a}from"./zIndexSlice-C5KgYPQq.js";import{C as n}from"./ComposedChart-DbQJYIh8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CagAPKlZ.js";import{X as d}from"./XAxis-BAXN4a1X.js";import{Y as h}from"./YAxis-C3JJ8ArK.js";import{L as g}from"./Legend-DG95uxRK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CNACe9Hw.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BkEVbAOi.js";import"./throttle-DEV8M7d-.js";import"./index-BDXslZly.js";import"./index-DkZKmKPL.js";import"./polarAxisSelectors-BTEQFOKc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BCl2Vcri.js";import"./index-DELNKpJo.js";import"./index-DjxPPcPR.js";import"./renderedTicksSlice-DslC81eO.js";import"./index-CqZ9-YDO.js";import"./CartesianChart-DTfzXdNC.js";import"./chartDataContext-CL-xIQe9.js";import"./CategoricalChart-LYzcxGWQ.js";import"./Layer-B42ScyDi.js";import"./Curve-CjgpP6VN.js";import"./types-CCAgRS29.js";import"./step-BOD7ejsf.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bhs50nun.js";import"./Label-CraUapZw.js";import"./Text-GEQvIv20.js";import"./pageBackground-fO3k-pcO.js";import"./useId-rh7m_y1i.js";import"./ZIndexLayer-C_RDQRBf.js";import"./dataEntryStyles-ChBxQ-KQ.js";import"./useAnimationId-16kGh6Cm.js";import"./ActivePoints-DWVIWGut.js";import"./Dot-BvCj9lGB.js";import"./Symbols-Bj_FeK6Z.js";import"./symbol-uBdmaQJZ.js";import"./RegisterGraphicalItemId-BEb5c735.js";import"./ErrorBarContext-DCWPzwAV.js";import"./SetGraphicalItem-CHnk-ZHw.js";import"./getRadiusAndStrokeWidthFromDot-CEgP0kCP.js";import"./ActiveShapeUtils-BD2nIqux.js";import"./useEffectiveDataKey-C7ZRWxHk.js";import"./CartesianAxis-_qB2Y9Zl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CJAbl6Xw.js";import"./uniqBy-B8i0l-yZ.js";import"./iteratee-DMbjXWAk.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},Ct=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,Ct as __namedExportsOrder,ut as default};
