import{R as t}from"./iframe-DtNEXb77.js";import{R as m}from"./zIndexSlice-C61cTRUd.js";import{L as s}from"./LineChart-BtNKayC6.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B2PHvqdd.js";import{X as l}from"./XAxis-B8fOHSNk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHRCkM2S.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./isWellBehavedNumber-C5_DATUj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3jS1aTx.js";import"./axisSelectors-CRqNtGDu.js";import"./d3-scale-4c7z9Afg.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-BsnYyY0R.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./Layer-809xSg6I.js";import"./Curve-C4o5b1LX.js";import"./types-CsDLwvl0.js";import"./step-DBGMRA4B.js";import"./path-DyVhHtw_.js";import"./activeStyles-BtinU4U_.js";import"./Label-9NLOMOhr.js";import"./Text-M6NyH5bl.js";import"./pageBackground-CwZqZ7-z.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./ZIndexLayer-CBx6DJIh.js";import"./useAnimationId-B5nilSLl.js";import"./dataEntryStyles-DdoWImTb.js";import"./ActivePoints-Cq7N-Rzx.js";import"./Dot-wiF8eMia.js";import"./ErrorBarContext-Cs-Qof9d.js";import"./GraphicalItemClipPath-D1LTNIcZ.js";import"./SetGraphicalItem-CBRl2Ktm.js";import"./getRadiusAndStrokeWidthFromDot-50sO_gfq.js";import"./ActiveShapeUtils-CKa9wY87.js";import"./useEffectiveDataKey-BFzz_xKL.js";import"./CartesianAxis-BqiHJNgo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
