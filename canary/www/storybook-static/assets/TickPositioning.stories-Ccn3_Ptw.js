import{R as t}from"./iframe-0XL0sthS.js";import{R as m}from"./zIndexSlice-C9Fui9SZ.js";import{L as s}from"./LineChart-Ak1R_xHe.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BgTy5bbd.js";import{X as l}from"./XAxis-8dcEWD9_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./throttle-Dos2q2R1.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./RechartsWrapper-B-mX6d9D.js";import"./axisSelectors-CET1BM1x.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8BAYDAt.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./Layer-3mPd111u.js";import"./Curve-B4Yxq0yJ.js";import"./types-B6SF8UCq.js";import"./step-BGDQTRvK.js";import"./path-DyVhHtw_.js";import"./LabelList-Bxms0g1E.js";import"./Label-CuZoViK1.js";import"./Text-B44V9o4J.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./dataEntryStyles-jYd5_Tui.js";import"./ActivePoints-jtZNkg-Y.js";import"./Dot-BnJWJFTm.js";import"./activeStyles-DtmDpwwD.js";import"./useAnimationId-RVbaj9rd.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getRadiusAndStrokeWidthFromDot-BMKT-chW.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./useEffectiveDataKey-OloeJtRb.js";import"./CartesianAxis-P0zAs4bB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
