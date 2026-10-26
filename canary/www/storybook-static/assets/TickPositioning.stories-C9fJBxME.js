import{R as t}from"./iframe-BKSHRT_S.js";import{R as m}from"./zIndexSlice-BLeuW80U.js";import{L as s}from"./LineChart-HN7scHuz.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-_a0Ki2Oq.js";import{X as l}from"./XAxis-BuoXjJQH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./throttle-BkygAiqr.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./RechartsWrapper-BDEQp4gV.js";import"./axisSelectors-8rGbG1Qd.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./Layer-BzU6Nn69.js";import"./Curve-LNcUa8Cn.js";import"./types-DNwq_ZGY.js";import"./step-OqTpatbN.js";import"./path-DyVhHtw_.js";import"./activeStyles-BKkkdbj0.js";import"./Label-DbF58v67.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./dataEntryStyles-DoThh5sG.js";import"./useAnimationId-Nyn64y9A.js";import"./ActivePoints-2BgjqPQF.js";import"./Dot-BLeFqc4M.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./ErrorBarContext-DwEbbuob.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getRadiusAndStrokeWidthFromDot-DfUPMR_R.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./useEffectiveDataKey-B8W36a2Q.js";import"./CartesianAxis-D2IkBv7G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
