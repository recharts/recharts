import{R as t}from"./iframe-BPMC3WYJ.js";import{R as m}from"./zIndexSlice-Dj40vb7g.js";import{L as s}from"./LineChart-oS43AD03.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D5wU_WBD.js";import{X as l}from"./XAxis-BFqeDJUQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./throttle-B4k3GkVg.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./RechartsWrapper-DOOVVQ84.js";import"./axisSelectors-CrZDIgWl.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWK10Otc.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./getRadiusAndStrokeWidthFromDot-Dlem8Fc0.js";import"./Layer-Cp3c10oW.js";import"./Curve-S3vEoheb.js";import"./types-w6DZXHOl.js";import"./step-DsVBo6Bh.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BuPGiwQu.js";import"./Label-pm6AJFCJ.js";import"./Text-DQWN35zZ.js";import"./ZIndexLayer-edtK9VrY.js";import"./ActivePoints-D3NC-ckk.js";import"./Dot-Ctn63yOC.js";import"./activeStyles-Ci2F5zQC.js";import"./useAnimationId-BI9f9iTm.js";import"./Symbols-BiXrA8HB.js";import"./symbol-DMDdywXz.js";import"./ErrorBarContext-CgYrVc8t.js";import"./SetGraphicalItem-BZWLeuys.js";import"./ActiveShapeUtils-yBzGzkry.js";import"./useEffectiveDataKey-o3mJFvm5.js";import"./CartesianAxis-Fpal_j0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
