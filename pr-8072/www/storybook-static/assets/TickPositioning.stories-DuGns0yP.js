import{R as t}from"./iframe-z3NgSViZ.js";import{R as m}from"./zIndexSlice-BX0CZtnZ.js";import{L as s}from"./LineChart-ByL8tC9K.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DHD91CBZ.js";import{X as l}from"./XAxis-6HQNOcHb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwdrNliT.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_oQRH40.js";import"./axisSelectors-CgbkNJhz.js";import"./d3-scale-CwYOu9hN.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-bcahlE0Z.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./Layer-DIcps5If.js";import"./Curve-CyxMxsdR.js";import"./types-2rYpOkQj.js";import"./step-BrvgHvKB.js";import"./path-DyVhHtw_.js";import"./activeStyles-CeGdwWio.js";import"./Label-Cv5DkZGS.js";import"./Text-Bf3Z0ESX.js";import"./pageBackground-SSHR1dqO.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./ZIndexLayer-B4GmRtpr.js";import"./dataEntryStyles-C3z4X2RS.js";import"./useAnimationId-Cz2G0J8W.js";import"./ActivePoints-B_9Jv1Nk.js";import"./Dot-CpIhdaoH.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getRadiusAndStrokeWidthFromDot-CUlrtQzF.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./useEffectiveDataKey-CRDGSrQh.js";import"./CartesianAxis-aatvopbC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
