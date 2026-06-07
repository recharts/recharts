import{R as t}from"./iframe-RDkqVuG2.js";import{R as m}from"./zIndexSlice-C4ZKGTQh.js";import{L as s}from"./LineChart-B0vRyOMj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DDxM7FUn.js";import{X as l}from"./XAxis-DEACd4mi.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-tJ0TJl6x.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./get-qTOI2Rj3.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./Layer-DnJxeL60.js";import"./Curve-Um8FGkl9.js";import"./types-BwJsYmye.js";import"./step-23ddn8am.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wlRh2tbg.js";import"./Label-kl9r3lv0.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./ZIndexLayer-ChplAtHB.js";import"./useAnimationId-DWgEGQGL.js";import"./ActivePoints-C4TTqOg4.js";import"./Dot-Dlo4cfNs.js";import"./RegisterGraphicalItemId-BjCxIzIU.js";import"./ErrorBarContext-DhtRtcJb.js";import"./GraphicalItemClipPath-fh46Mv1_.js";import"./SetGraphicalItem-C_Bitdri.js";import"./getRadiusAndStrokeWidthFromDot-ClHmJg6B.js";import"./ActiveShapeUtils-BGYROLTx.js";import"./CartesianAxis-BXGLIO05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
