import{R as t}from"./iframe-Bp2XYb68.js";import{R as m}from"./zIndexSlice-Cdn-Kk-M.js";import{L as s}from"./LineChart-CjJHpTGi.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BuHa0ZJe.js";import{X as l}from"./XAxis-ts9--8Kg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKzL2Qxu.js";import"./throttle-DjpMRj7m.js";import"./index-D6Dz_bd_.js";import"./index-Cy8aa7S-.js";import"./RechartsWrapper-DFwXtpN1.js";import"./axisSelectors-D7x9R07e.js";import"./polarAxisSelectors-B_7CHFJS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BystX3Ur.js";import"./index-BgEF2N6-.js";import"./index-BWzqc-Tl.js";import"./renderedTicksSlice-BEFESDc_.js";import"./index-BIZLi33-.js";import"./CartesianChart-B3KmVN-H.js";import"./ZIndexPortal-Dv9B-KcK.js";import"./CategoricalChart-DdepWN88.js";import"./Layer-BCuSbR8-.js";import"./Curve-L4y0Pw0M.js";import"./types-ChkwvJX7.js";import"./step-D6j5BM_X.js";import"./path-DyVhHtw_.js";import"./LabelList-NX9sUv81.js";import"./Label-BYixOdgi.js";import"./Text-NUByGaeH.js";import"./DOMUtils-CRqOLD4o.js";import"./ZIndexLayer-CdRyST1N.js";import"./ActivePoints-BQlT-yF-.js";import"./Dot-Bp6Z7m8n.js";import"./activeStyles-BkNcOac3.js";import"./useAnimationId-BnLlvmFh.js";import"./dataEntryStyles-0iby4079.js";import"./fillDefinitions-ChX4QXi5.js";import"./Symbols-BjKzRhG-.js";import"./symbol-AE1MCh3f.js";import"./ErrorBarContext-C1RLIbYa.js";import"./SetGraphicalItem-C-JkmH8Z.js";import"./getRadiusAndStrokeWidthFromDot-Du2-K1xF.js";import"./ActiveShapeUtils-DNSxrQCm.js";import"./useEffectiveDataKey-DiX5XHUq.js";import"./CartesianAxis-BoCxaOyC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
