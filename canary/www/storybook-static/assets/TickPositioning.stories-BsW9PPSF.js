import{R as t}from"./iframe-CFiYbyYn.js";import{R as m}from"./zIndexSlice-CfnjI_J7.js";import{L as s}from"./LineChart-Dvn7FrEs.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bdu49nu9.js";import{X as l}from"./XAxis-RpmZ_jE_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./throttle-C32GRzNi.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./axisSelectors-ZJRlSH7p.js";import"./polarAxisSelectors-C73NV54c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BQZOe2uw.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./Layer-BfyvsZKx.js";import"./Curve-CKgWn92F.js";import"./types-BgyTt6P7.js";import"./step-DxzKinYr.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CEdPYhQz.js";import"./Label-BO6v_mC5.js";import"./Text-BvA3DBG3.js";import"./ZIndexLayer-BDfLEL3A.js";import"./ActivePoints-Dj8mj1pc.js";import"./Dot-DG45E_Jc.js";import"./activeStyles-P0GMx-UH.js";import"./useAnimationId-BDSeKkxz.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./ErrorBarContext-DjJwPTFH.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getRadiusAndStrokeWidthFromDot-Ce32xTZu.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./useEffectiveDataKey-Dy2gs8KS.js";import"./CartesianAxis-D_9vstbH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
