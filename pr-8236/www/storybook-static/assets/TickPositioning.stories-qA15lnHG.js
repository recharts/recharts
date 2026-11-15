import{R as t}from"./iframe-BhLunS0i.js";import{R as m}from"./zIndexSlice-DSPJCLFE.js";import{L as s}from"./LineChart-D2l6Z4O_.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DZl1t4Hn.js";import{X as l}from"./XAxis-gG48cTvb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./throttle-CRN4ZNKA.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./RechartsWrapper-wQ1gT1I0.js";import"./axisSelectors-D1ydZeah.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DitufHHw.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./Layer-BM8-5uQX.js";import"./Curve-LlXUYE-L.js";import"./types-CT83QobA.js";import"./step-C270rjWW.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-V8RFTVJZ.js";import"./Label-BKkx1Yqi.js";import"./Text-DaAfyhaD.js";import"./ZIndexLayer-DT0AmS3A.js";import"./ActivePoints-B_P37ke-.js";import"./Dot-5madfp2A.js";import"./activeStyles-CJzsRDKh.js";import"./useAnimationId-Xa81ZCl9.js";import"./Symbols-DZ9QCbQ8.js";import"./symbol-C4ewZ54u.js";import"./ErrorBarContext-B9XBEKPc.js";import"./SetGraphicalItem-DMPKHwhz.js";import"./getRadiusAndStrokeWidthFromDot-DJtKm8XN.js";import"./ActiveShapeUtils-DTLaa-AG.js";import"./useEffectiveDataKey-0h-gJoNJ.js";import"./CartesianAxis-D8zKHO5C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
