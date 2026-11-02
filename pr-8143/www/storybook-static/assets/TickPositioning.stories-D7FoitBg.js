import{R as t}from"./iframe-DSNXEUn4.js";import{R as m}from"./zIndexSlice-Dz2masNo.js";import{L as s}from"./LineChart-CAokEF_k.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-5dkC5hpH.js";import{X as l}from"./XAxis-BIkQK5N1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJdscjTc.js";import"./throttle-Cql2XGyq.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./RechartsWrapper-tZbMCMkz.js";import"./axisSelectors-BVWqqaIl.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CACIKaWJ.js";import"./index-DdyQ4Lu6.js";import"./index-C8EE5WMp.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./Layer-0vZKA5Ep.js";import"./Curve-DnME_alY.js";import"./types-CuvQqVdH.js";import"./step-DRkdD1F5.js";import"./path-DyVhHtw_.js";import"./LabelList-CdZv6dYa.js";import"./Label-CjMpSSpc.js";import"./Text-Dh3TMTW4.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./ActivePoints-MPkH3V4_.js";import"./Dot-BLQG3Xnr.js";import"./activeStyles-BwY0V3hq.js";import"./useAnimationId-De32QbAN.js";import"./dataEntryStyles-CrqYJwRR.js";import"./Symbols-B3a4QAq0.js";import"./symbol-DEPa4V4_.js";import"./ErrorBarContext-BvGzHJmi.js";import"./SetGraphicalItem-DTg-QJxg.js";import"./getRadiusAndStrokeWidthFromDot-Bio62kDH.js";import"./ActiveShapeUtils-CnL30Scg.js";import"./useEffectiveDataKey-Bw1Ayo3J.js";import"./CartesianAxis-2YdOU3ps.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
