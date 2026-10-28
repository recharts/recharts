import{R as t}from"./iframe-Bzny_MYO.js";import{R as m}from"./zIndexSlice-MTgyOxcR.js";import{L as s}from"./LineChart-B6m-E4BP.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-nynINyW7.js";import{X as l}from"./XAxis-D652bNH-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./throttle-GvTGKSCT.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./RechartsWrapper-DwCbU-k0.js";import"./axisSelectors-BEccdncb.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLm70OA6.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./Layer-DwImaMiy.js";import"./Curve-DvxHsU-S.js";import"./types-DppBMtwl.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./LabelList-DP5qLQcH.js";import"./Label-DTuGlMPs.js";import"./Text-fNDWB5Io.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./ActivePoints-7LmcTnxb.js";import"./Dot-B0SoNECw.js";import"./activeStyles-D4lYsebj.js";import"./useAnimationId-DPjHdwMC.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./ErrorBarContext-B5xatTad.js";import"./SetGraphicalItem-C8_kNIod.js";import"./getRadiusAndStrokeWidthFromDot-B5e8MQ8V.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./CartesianAxis-CF7trjb7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
