import{R as t}from"./iframe-CQZPQf4O.js";import{R as m}from"./zIndexSlice-BxTiYWdU.js";import{L as s}from"./LineChart-EUXp8xUN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DjUB_QE1.js";import{X as l}from"./XAxis-vMRVH8Ao.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-AnGuXVWW.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./axisSelectors-Or82bYZb.js";import"./d3-scale-Dh160Q_7.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-XXc_9p_2.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./Layer-C-YS-hE0.js";import"./Curve-CEf8Z_wT.js";import"./types-Q9Uebpou.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./activeStyles-CbDR06hO.js";import"./Label-CwpPaPRc.js";import"./Text-FG9LsITf.js";import"./pageBackground-VSL8VAH8.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./ZIndexLayer-BKLTAFCk.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./ActivePoints-DDJZk_do.js";import"./Dot-D6DMXsNr.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getRadiusAndStrokeWidthFromDot-DsehLS7A.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./CartesianAxis-CO8voLuT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
