import{R as t}from"./iframe-Zh2ccugb.js";import{R as m}from"./zIndexSlice-DEmBd4ZB.js";import{L as s}from"./LineChart-Bp3ZB87s.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-xJRbfbkE.js";import{X as l}from"./XAxis-Csr8aJtN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./throttle-B3lkaQcW.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./RechartsWrapper-CwKOWqmW.js";import"./axisSelectors-CeETa2Oh.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oTva27Ef.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./Layer-C95YSbsg.js";import"./Curve-CyvbP0E9.js";import"./types-aszg7ufr.js";import"./step-BGLmz3Kf.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BE_TnqZR.js";import"./Label-DiL3sO7Q.js";import"./Text-MWlHmKAn.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./ActivePoints-1_C8JWTD.js";import"./Dot-BIRUUIf4.js";import"./activeStyles-D6kWvGgQ.js";import"./useAnimationId-CwFbYXoE.js";import"./Symbols-S44HEmao.js";import"./symbol-UAwU-psM.js";import"./ErrorBarContext-f9PwKgv4.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getRadiusAndStrokeWidthFromDot-B79813B8.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./useEffectiveDataKey-Ctjc01_U.js";import"./CartesianAxis-CIOwjTNM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
