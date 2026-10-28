import{R as t}from"./iframe-DbrRN1n8.js";import{R as m}from"./zIndexSlice-Du0Au1R-.js";import{L as s}from"./LineChart-sDu7ccg8.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C6WqqYHN.js";import{X as l}from"./XAxis-D4Dr_tjl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./throttle-DUdTYHJ7.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./RechartsWrapper-DlyIgJor.js";import"./axisSelectors-DK6uFkxV.js";import"./polarAxisSelectors-D77BuFKC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUENC00q.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./Layer-Do_lw1Xj.js";import"./Curve-CoHdM9Ch.js";import"./types-DkNvVUMM.js";import"./step-I4MYWlIC.js";import"./path-DyVhHtw_.js";import"./LabelList-BgsnBCM1.js";import"./Label-A7WyPB0I.js";import"./Text-WfDu__TP.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./ActivePoints-BRaVZy1t.js";import"./Dot-CwOWQR4j.js";import"./activeStyles-BV7TfXze.js";import"./useAnimationId-CvK-4pcw.js";import"./dataEntryStyles-CKR3qDl0.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getRadiusAndStrokeWidthFromDot-GpKWvG3K.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./CartesianAxis-BCK1OBBy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
