import{R as t}from"./iframe-CMFw787F.js";import{R as m}from"./zIndexSlice-DW-R_9mL.js";import{L as s}from"./LineChart-B_BYb0Kv.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bw4mZerm.js";import{X as l}from"./XAxis-C_WTSptP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOABxk_y.js";import"./throttle-CR0jnMre.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./RechartsWrapper-AThag0NN.js";import"./axisSelectors-rk7JAHS6.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CNeDjyej.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./getRadiusAndStrokeWidthFromDot-Cm2FeWCV.js";import"./Layer-DoofO9Zt.js";import"./Curve-BOyetQ0I.js";import"./types-DA1V6lfX.js";import"./step-Droy7KkJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CcaQQEAi.js";import"./Label-CYtvKaSn.js";import"./Text-DneUrFCx.js";import"./ZIndexLayer-zQQZbbdp.js";import"./ActivePoints-BScFO1Ho.js";import"./Dot-DAUTDN16.js";import"./activeStyles-DP81Qo_e.js";import"./useAnimationId-DwVwC1xb.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./ErrorBarContext-tb4T2KmR.js";import"./SetGraphicalItem-B5x77PpV.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./useEffectiveDataKey-rlJiXvMI.js";import"./CartesianAxis-DJ5NbueU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
