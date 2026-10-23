import{R as t}from"./iframe-Daqq5Gjo.js";import{R as m}from"./zIndexSlice-BPRhy0xE.js";import{L as s}from"./LineChart-BT7Nfw3E.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BUz4FFba.js";import{X as l}from"./XAxis-BQYmhAVN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWDQ4DPb.js";import"./index-b63f_pX_.js";import"./index-TeDug2B7.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B2-XJuyk.js";import"./isWellBehavedNumber-D9gMW2_W.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DaLU39bO.js";import"./axisSelectors-CxfQkhDh.js";import"./d3-scale-CqOqSRGC.js";import"./index-aYBLVk0i.js";import"./index-DrcM2r0T.js";import"./renderedTicksSlice-CgHqHKUq.js";import"./index-_CQPpMIB.js";import"./CartesianChart-CsvRURM2.js";import"./chartDataContext-BsJkFnDQ.js";import"./CategoricalChart-DFQLj_IQ.js";import"./Layer-ypMbTgoN.js";import"./Curve-BTl2XcXk.js";import"./types-t5uFUre1.js";import"./step-CMbaEgxT.js";import"./path-DyVhHtw_.js";import"./activeStyles-CfAxM8dt.js";import"./Label-BEbt6EJA.js";import"./Text-CnYREx4K.js";import"./pageBackground-CQ6SoF4P.js";import"./useId-Zrpp900Y.js";import"./useBackwardsCompatibleTheme-NW4H3-d4.js";import"./ZIndexLayer-CsxY4uLP.js";import"./dataEntryStyles-D69McnEv.js";import"./useAnimationId-DHlojTvw.js";import"./ActivePoints-C4gCSMjf.js";import"./Dot-BB5hopw1.js";import"./RegisterGraphicalItemId-DR1l3pXT.js";import"./ErrorBarContext-DV8sm0DW.js";import"./GraphicalItemClipPath-CdmoWeX0.js";import"./SetGraphicalItem-B-kJZLux.js";import"./getRadiusAndStrokeWidthFromDot-BHbtIZis.js";import"./ActiveShapeUtils-C9mR-tcp.js";import"./useEffectiveDataKey-P6ZrBAcn.js";import"./CartesianAxis-C_4O2on1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
