import{R as t}from"./iframe-Gg4ukcCI.js";import{R as m}from"./zIndexSlice-DlNyh_xi.js";import{L as s}from"./LineChart-DXqdEw7D.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BjKthlHa.js";import{X as l}from"./XAxis-DOco_gcc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhxEFOug.js";import"./throttle-CUgxKpyu.js";import"./index-C2HXgDT0.js";import"./index-CXFDGi8T.js";import"./RechartsWrapper-D9XD6s1l.js";import"./axisSelectors-a1SI1Wf4.js";import"./polarAxisSelectors-D8GOATX4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Br8c0ClH.js";import"./index-HuopnsCQ.js";import"./index-BeAfusT4.js";import"./renderedTicksSlice-DvSqlga1.js";import"./index-BpeL0xzJ.js";import"./fillDefinitions-ihHkonIl.js";import"./CartesianChart-BjLEuFc_.js";import"./chartDataContext-CnuflyS8.js";import"./CategoricalChart-COQQ2eYQ.js";import"./getRadiusAndStrokeWidthFromDot-DvraL6JM.js";import"./Layer-BoT4M5vY.js";import"./Curve-EfD-yUMs.js";import"./types-BPcXCIuq.js";import"./step-ClUmF8Xf.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-oHOQ7SK5.js";import"./Label-DdUKW8N3.js";import"./Text-b8eoKvTG.js";import"./ZIndexLayer-D5rwnqu2.js";import"./ActivePoints-BD-WR_m2.js";import"./Dot-KKWWgG3f.js";import"./activeStyles-tWC5f0r5.js";import"./useAnimationId-DNK2Kfuo.js";import"./Symbols-Dd8eQ8SU.js";import"./symbol-KoL4YSEk.js";import"./ErrorBarContext-CJwSW4gu.js";import"./SetGraphicalItem-_cwLqG8F.js";import"./ActiveShapeUtils-DuHRv64l.js";import"./useEffectiveDataKey-DtjZjT7w.js";import"./CartesianAxis-BfWLv6d8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
