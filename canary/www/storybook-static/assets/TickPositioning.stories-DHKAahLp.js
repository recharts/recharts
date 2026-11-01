import{R as t}from"./iframe-BoZGnJw3.js";import{R as m}from"./zIndexSlice-a6rFVYjz.js";import{L as s}from"./LineChart-BkKMwv4b.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-LdQMhgoS.js";import{X as l}from"./XAxis-DaJlL1eX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./throttle-DtDTnxHB.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./axisSelectors-D380Rkbk.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CiyCJ5ON.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./Layer-DWrdDLVq.js";import"./Curve-Cwz00roS.js";import"./types-VJa2wa64.js";import"./step-DM17TeVN.js";import"./path-DyVhHtw_.js";import"./LabelList-DN0FQ104.js";import"./Label-hjfvRRRs.js";import"./Text-Cs6Ml33D.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./ActivePoints-DFbmabNT.js";import"./Dot-DvyXLuZB.js";import"./activeStyles-B-PjepTA.js";import"./useAnimationId-DhSaM75t.js";import"./dataEntryStyles-BZaOAKnN.js";import"./Symbols-DeYNYvA0.js";import"./symbol-P9MXa4Nc.js";import"./ErrorBarContext-BWsLX-Zn.js";import"./SetGraphicalItem-8abau_IG.js";import"./getRadiusAndStrokeWidthFromDot-CXVA2gr-.js";import"./ActiveShapeUtils-9rzgq6Y4.js";import"./useEffectiveDataKey-D7W7vL8E.js";import"./CartesianAxis-LiXL0IDn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
