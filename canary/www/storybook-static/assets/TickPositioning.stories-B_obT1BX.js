import{R as t}from"./iframe-Cr4SLAPG.js";import{R as m}from"./zIndexSlice-DyLLhom_.js";import{L as s}from"./LineChart-omeMnbJh.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DD5o7CZ0.js";import{X as l}from"./XAxis-B99-G5ow.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./throttle-m67LhZgN.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./RechartsWrapper-BMMPlSoi.js";import"./axisSelectors-DrKqMaOQ.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WAvM56kv.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./getRadiusAndStrokeWidthFromDot-D9aaECN7.js";import"./Layer-CWQ0f2zH.js";import"./Curve-DJrcdmOM.js";import"./types-B6oZtPsa.js";import"./step-B4BPIBfx.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-IfVv-8UK.js";import"./Label-iIhWQC5W.js";import"./Text-BBE8dgLe.js";import"./ZIndexLayer-B4fE1k7j.js";import"./ActivePoints-DnQ4FUYw.js";import"./Dot-BK-ZVoey.js";import"./activeStyles-aUydRVRE.js";import"./useAnimationId-kAVaPV6O.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./ErrorBarContext-6e7pSH1e.js";import"./SetGraphicalItem-C9um0bAO.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./CartesianAxis-Ds5qTBHM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
