import{R as t}from"./iframe-BC6iQeUr.js";import{R as m}from"./zIndexSlice-DwuZ2Ow7.js";import{L as s}from"./LineChart-DkqLAUlw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-yiqo5pDE.js";import{X as l}from"./XAxis-8wiG-IT7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIZ3ps7e.js";import"./throttle-MiaNLFmz.js";import"./index-D3yqD8af.js";import"./index-CYTdWqrV.js";import"./RechartsWrapper-DHIomU5i.js";import"./axisSelectors-Bd1LmNHc.js";import"./polarAxisSelectors-mzCge1J3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Daj11TvY.js";import"./index-D34_hmzU.js";import"./index-DraKlH0s.js";import"./renderedTicksSlice-BGFaFbR8.js";import"./index-B7dOZ4Mr.js";import"./fillDefinitions-B6DkeJW_.js";import"./CartesianChart-BLRdoMZg.js";import"./ZIndexPortal-jmLjufPW.js";import"./CategoricalChart-9j6tsrvq.js";import"./Layer-Cuu8DjLO.js";import"./Curve-BvPWva0Q.js";import"./types-Dwpv4Yth.js";import"./step-DPNt-X3R.js";import"./path-DyVhHtw_.js";import"./LabelList-BFjn3eEm.js";import"./Label-BCMvROnb.js";import"./Text-fEDBC_0o.js";import"./DOMUtils-B8TR7nYh.js";import"./ZIndexLayer-DCc79hxk.js";import"./ActivePoints-JuUDd9nh.js";import"./Dot-DyLV3zJ_.js";import"./activeStyles-DfgAGK4N.js";import"./useAnimationId-Cw69Pi1k.js";import"./dataEntryStyles-BFig0g5r.js";import"./Symbols-DBa5o5yK.js";import"./symbol-BvmQmKKh.js";import"./ErrorBarContext-uhSKqamS.js";import"./SetGraphicalItem-CqMMnBeb.js";import"./getRadiusAndStrokeWidthFromDot-DQip5ZIl.js";import"./ActiveShapeUtils-DxbJ9fQI.js";import"./useEffectiveDataKey-Bk74mtUJ.js";import"./CartesianAxis-eBXlpwXS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
