import{R as t}from"./iframe-Dgfa45pO.js";import{R as m}from"./zIndexSlice-C1KjhRe9.js";import{L as s}from"./LineChart-Dc0UUvaf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BASvZUAn.js";import{X as l}from"./XAxis-BSLC3Bv_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DVLCs_h8.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./get-BZICNy-w.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-XphNsNZ5.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./Layer-BwLAkNRA.js";import"./Curve-DtYKQ2VH.js";import"./types-C1ZkWqT0.js";import"./step-BZZfKQz_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CIa4005N.js";import"./Label-Dzw51f8E.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./useAnimationId-CjXgi841.js";import"./ActivePoints-jW6GNHGv.js";import"./Dot-DbOxHeVE.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./ErrorBarContext-DUzmHtBE.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./getRadiusAndStrokeWidthFromDot-KiudXz49.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./CartesianAxis-DznDQPew.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
