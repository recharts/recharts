import{R as t}from"./iframe-BmdtsHI1.js";import{R as m}from"./zIndexSlice-CLt9waUo.js";import{L as s}from"./LineChart-Dt39tboA.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BFAqQ4J_.js";import{X as l}from"./XAxis-SiUufnTD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3fedd0f.js";import"./throttle-DIqkA_6B.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./RechartsWrapper-CW25TSBD.js";import"./axisSelectors-CWAMaE0j.js";import"./polarAxisSelectors-DqiScafe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4n2-g_Q.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./Layer-uwW889ah.js";import"./Curve-St2o1Zg2.js";import"./types-TcTpNVA6.js";import"./step-C3G0yHTA.js";import"./path-DyVhHtw_.js";import"./LabelList-BBJeoy6S.js";import"./Label-efFOyHP_.js";import"./Text-DgdwosBP.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./ActivePoints-DOV6z7vt.js";import"./Dot-D4FfFK1V.js";import"./activeStyles-0PlrA4t0.js";import"./useAnimationId-C4l6OBef.js";import"./dataEntryStyles-C-VVWe1s.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./ErrorBarContext-C7bFffEo.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getRadiusAndStrokeWidthFromDot-J3eGzewL.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./CartesianAxis-6ZKwTVD2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
