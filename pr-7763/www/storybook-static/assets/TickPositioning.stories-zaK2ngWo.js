import{R as t}from"./iframe-CDv_hnlf.js";import{R as m}from"./zIndexSlice-8EbRQ5DZ.js";import{L as s}from"./LineChart-BqcxBPbE.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-PKJWXDbr.js";import{X as l}from"./XAxis-Cn9K5n4J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RrwSa6SL.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CImqyn8n.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-lM1IufFg.js";import"./axisSelectors-FUoH9jZO.js";import"./d3-scale-8ktJJOVD.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./index-BJASh04Q.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./Layer-DzpNGvR7.js";import"./Curve-CUN9zty4.js";import"./types-BoP1bnqQ.js";import"./step-LibK8RJE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BKW3YVwF.js";import"./Label-BE6rd0_D.js";import"./Text-g_z1pfXY.js";import"./DOMUtils-FVC4l968.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./ZIndexLayer-Drc_0i_v.js";import"./useAnimationId-DiRDlhkC.js";import"./ActivePoints-BsN3X_AV.js";import"./Dot-CdPH0Qt5.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./ErrorBarContext-iNIezAqw.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getRadiusAndStrokeWidthFromDot-CqH6eDG0.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Cub9Ba5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
