import{R as t}from"./iframe-B-SNMp2P.js";import{R as m}from"./zIndexSlice-MJVhEUVa.js";import{L as s}from"./LineChart-DEFSl2h4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-COMV_M1P.js";import{X as l}from"./XAxis-DbFPHXfw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7fi-ZXpb.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gPNydgch.js";import"./axisSelectors-_pmBWC24.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./Layer-CVSv3BXM.js";import"./Curve-CJXjFqV6.js";import"./types-BNVaobqj.js";import"./step-HC0u4nw9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-Mi-zOF.js";import"./Label-yF0NhCgr.js";import"./Text-3FjWr6Un.js";import"./DOMUtils-CVvGSXS1.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./ZIndexLayer-DTIKWgf_.js";import"./useAnimationId-CiVfXoZZ.js";import"./ActivePoints-0GRfHXwb.js";import"./Dot-CFiUGY51.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getRadiusAndStrokeWidthFromDot-BOwP_unw.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";import"./CartesianAxis-D1aWQaVv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
