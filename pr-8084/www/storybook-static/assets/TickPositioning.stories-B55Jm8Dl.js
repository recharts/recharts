import{R as t}from"./iframe-ZGmrrukO.js";import{R as m}from"./zIndexSlice-C5KgYPQq.js";import{L as s}from"./LineChart-I9dHiTnW.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CagAPKlZ.js";import{X as l}from"./XAxis-BAXN4a1X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CNACe9Hw.js";import"./throttle-DEV8M7d-.js";import"./index-BDXslZly.js";import"./index-DkZKmKPL.js";import"./RechartsWrapper-D3dierpX.js";import"./axisSelectors-BkEVbAOi.js";import"./polarAxisSelectors-BTEQFOKc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BCl2Vcri.js";import"./index-DELNKpJo.js";import"./index-DjxPPcPR.js";import"./renderedTicksSlice-DslC81eO.js";import"./index-CqZ9-YDO.js";import"./CartesianChart-DTfzXdNC.js";import"./chartDataContext-CL-xIQe9.js";import"./CategoricalChart-LYzcxGWQ.js";import"./Layer-B42ScyDi.js";import"./Curve-CjgpP6VN.js";import"./types-CCAgRS29.js";import"./step-BOD7ejsf.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bhs50nun.js";import"./Label-CraUapZw.js";import"./Text-GEQvIv20.js";import"./pageBackground-fO3k-pcO.js";import"./useId-rh7m_y1i.js";import"./ZIndexLayer-C_RDQRBf.js";import"./dataEntryStyles-ChBxQ-KQ.js";import"./useAnimationId-16kGh6Cm.js";import"./ActivePoints-DWVIWGut.js";import"./Dot-BvCj9lGB.js";import"./Symbols-Bj_FeK6Z.js";import"./symbol-uBdmaQJZ.js";import"./RegisterGraphicalItemId-BEb5c735.js";import"./ErrorBarContext-DCWPzwAV.js";import"./SetGraphicalItem-CHnk-ZHw.js";import"./getRadiusAndStrokeWidthFromDot-CEgP0kCP.js";import"./ActiveShapeUtils-BD2nIqux.js";import"./useEffectiveDataKey-C7ZRWxHk.js";import"./CartesianAxis-_qB2Y9Zl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
