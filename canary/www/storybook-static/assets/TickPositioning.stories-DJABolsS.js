import{R as t}from"./iframe-DmqRNFpA.js";import{R as m}from"./zIndexSlice-B1K-Cx6E.js";import{L as s}from"./LineChart-DO_npS7k.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-gXpEv3sk.js";import{X as l}from"./XAxis-D3OnHsd5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./RechartsWrapper-CTNqlU94.js";import"./axisSelectors-CgQoXC7y.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./Layer-BMG2yPM5.js";import"./Curve-DXM7d3l8.js";import"./types-ClR1fgnQ.js";import"./step-KG3W8n3J.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-ClWs31k0.js";import"./Label-CGOHFUUI.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./activeStyles-2GMTQ11y.js";import"./useAnimationId-BfPOVraS.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./ErrorBarContext-BaRUKqrY.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./ActiveShapeUtils-wD2P373B.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./CartesianAxis-B7FOD29F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
