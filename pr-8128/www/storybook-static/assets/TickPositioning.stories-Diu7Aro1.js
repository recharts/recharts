import{R as t}from"./iframe-DwhrPqQ2.js";import{R as m}from"./zIndexSlice-CpWq1zjb.js";import{L as s}from"./LineChart-D6wKxQAg.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CzQiNu3A.js";import{X as l}from"./XAxis-DalFir1z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjT--ccN.js";import"./throttle-DfnnAIvE.js";import"./index-kf961mzr.js";import"./index-CEmaTsjJ.js";import"./RechartsWrapper-DwGtUcHg.js";import"./axisSelectors-Co6y6k23.js";import"./polarAxisSelectors-BuB4o-cj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C0de4oSn.js";import"./index-CsaEib3L.js";import"./index-BEv8RXE2.js";import"./renderedTicksSlice-6PXLxRIe.js";import"./index-Y2LMv9l3.js";import"./CartesianChart-D8j3jRJC.js";import"./ZIndexPortal-DZJ5tH-i.js";import"./CategoricalChart-j0pVaHBn.js";import"./Layer-vnYdlnEA.js";import"./Curve-BhXF6Rtc.js";import"./fillDefinitions-Dhc8KNfB.js";import"./pageBackground-BJp9wwMp.js";import"./themeFill-Dmspdt-4.js";import"./types-CR-LymQu.js";import"./step-BswNGXoJ.js";import"./path-DyVhHtw_.js";import"./LabelList-D6fyXhX7.js";import"./Label-CPQgWsRx.js";import"./Text-C74hS0lU.js";import"./DOMUtils-BcceySrU.js";import"./ZIndexLayer-BSdSgNTE.js";import"./ActivePoints-hySilWiE.js";import"./Dot-PaVtx7_L.js";import"./activeStyles-DZGQwj2F.js";import"./useAnimationId-Cr5bB81Q.js";import"./dataEntryStyles-DWHZ8H87.js";import"./Symbols-CvLu8AuU.js";import"./symbol-4bH2ZeXc.js";import"./ErrorBarContext-ByBJW2kl.js";import"./SetGraphicalItem-Dt6F2mBE.js";import"./getRadiusAndStrokeWidthFromDot-VJH7k67x.js";import"./ActiveShapeUtils-CDAywyE9.js";import"./useEffectiveDataKey-D3ULyXZ6.js";import"./CartesianAxis-ClEu4A1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const dt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},lt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,lt as __namedExportsOrder,dt as default};
