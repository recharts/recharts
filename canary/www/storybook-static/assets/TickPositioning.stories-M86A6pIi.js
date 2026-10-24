import{R as t}from"./iframe-D_khPHZ1.js";import{R as m}from"./zIndexSlice-KFlckT-7.js";import{L as s}from"./LineChart-viFhErxX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CHEB0oTV.js";import{X as l}from"./XAxis-CG7KNKev.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBn7lrSC.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Do2gsgG0.js";import"./axisSelectors-CBjKjY28.js";import"./d3-scale-BLOap0UK.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-CHrlhwwU.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./Layer-D1docXzT.js";import"./Curve-D4vzOHVD.js";import"./types-DL7z7syQ.js";import"./step-BnRh-hkR.js";import"./path-DyVhHtw_.js";import"./activeStyles-DVSsJDko.js";import"./Label-DNajAghq.js";import"./Text-CRLTQjiS.js";import"./pageBackground-Cdf9H4fo.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./ZIndexLayer-BGvEmvHh.js";import"./dataEntryStyles-2My5Q2VA.js";import"./useAnimationId-BOA4oZA_.js";import"./ActivePoints-B4rNmWdt.js";import"./Dot-DSp-kazZ.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getRadiusAndStrokeWidthFromDot-ycj1XfTC.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./CartesianAxis-DtPap_2c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
