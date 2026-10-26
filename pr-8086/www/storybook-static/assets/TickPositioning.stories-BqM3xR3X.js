import{R as t}from"./iframe-BK3Sisey.js";import{R as m}from"./zIndexSlice-BetgAyCc.js";import{L as s}from"./LineChart-BuYm4-GU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-XxjUVcCS.js";import{X as l}from"./XAxis-DZM3ZRq3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./throttle-biJe8rDV.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./RechartsWrapper-DORC7p_L.js";import"./axisSelectors-BspbFoiI.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bzw5IHoB.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./Layer-D1HH46xf.js";import"./Curve-DG5NWTvD.js";import"./types-DkavCTl8.js";import"./step-DmrcgL_N.js";import"./path-DyVhHtw_.js";import"./activeStyles-Tawg351V.js";import"./Label-UVuQgYwr.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./dataEntryStyles-B4V6KkDF.js";import"./useAnimationId-CS-FJwCc.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./CartesianAxis-DZgjpOyW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
