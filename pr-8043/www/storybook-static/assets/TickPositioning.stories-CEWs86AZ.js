import{R as t}from"./iframe-BJwrbqqi.js";import{R as m}from"./zIndexSlice-Dgyv34Z4.js";import{L as s}from"./LineChart-CLZDvXiw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ChjYxcU9.js";import{X as l}from"./XAxis-B7ZX8Kfa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-pfeYxzRR.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeuEZMtn.js";import"./axisSelectors-C5NObvkt.js";import"./d3-scale-DSWUCzXy.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-BP4AOHzk.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./Layer-eN5gk5Rs.js";import"./Curve-DpfItrvf.js";import"./types-BBGLRMuE.js";import"./step-CFdztVjQ.js";import"./path-DyVhHtw_.js";import"./activeStyles-JM_riMMZ.js";import"./Label-XjwS876P.js";import"./Text-KHiJMqsX.js";import"./pageBackground-BIIIhWKR.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./dataEntryStyles-D7ilp65R.js";import"./useAnimationId-Cz6ggmzR.js";import"./ActivePoints-5m6R4yet.js";import"./Dot-Bsu5ZBhw.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./ErrorBarContext-8FsJ_EHd.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./getRadiusAndStrokeWidthFromDot-DpwEmJ7r.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./CartesianAxis-CmiU-XO8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
