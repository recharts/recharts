import{e as t}from"./iframe-1sJLl6DZ.js";import{R as n}from"./arrayEqualityCheck-CBQMjkzv.js";import{L as s}from"./LineChart-C23IRS3c.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cr1_NgX_.js";import{X as l}from"./XAxis-BKluPuIm.js";import{R as v}from"./RechartsHookInspector-FiK4LEfR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwudvEcy.js";import"./immer-D3lmb_Hz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BarrelpQ.js";import"./index-BefZ4p5Z.js";import"./hooks-BSV0CDFu.js";import"./axisSelectors-DfOHronC.js";import"./d3-scale-UoHoc1Us.js";import"./zIndexSlice-DewuM9Kl.js";import"./renderedTicksSlice-B18XtuK2.js";import"./CartesianChart-DajRV7bT.js";import"./chartDataContext-BDPauSBm.js";import"./CategoricalChart-Bp51RrNo.js";import"./Layer-gI7ebry7.js";import"./ReactUtils-E47kjf1a.js";import"./Label-B09ck5aR.js";import"./Text-D1w4IOeM.js";import"./DOMUtils-Cz4f8MMH.js";import"./ZIndexLayer-D-ka0Tcp.js";import"./ActivePoints-7h-OJP_5.js";import"./Dot-CHPbrrnb.js";import"./types-OZuhW1zj.js";import"./RegisterGraphicalItemId-B5rT-TGw.js";import"./ErrorBarContext-Db0NPWQr.js";import"./GraphicalItemClipPath-CGdaFH3i.js";import"./SetGraphicalItem-BDCPoYU4.js";import"./useAnimationId-BG884krZ.js";import"./getRadiusAndStrokeWidthFromDot-B2FefomC.js";import"./ActiveShapeUtils-Cjl2bV4c.js";import"./isPlainObject-Cn3itabH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CPIg9-tb.js";import"./Trapezoid-rVOglQPc.js";import"./Sector-CjSRrVkn.js";import"./Symbols-Bj_BiyXA.js";import"./symbol-Bipgyq1s.js";import"./step-CdTAn4vV.js";import"./Curve-D1t5c_n4.js";import"./CartesianAxis-DRKzcyAj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CQyn9y4S.js";import"./ChartSizeDimensions-D07aYOSB.js";import"./OffsetShower-CPwA5xGr.js";import"./PlotAreaShower-7dIAXo4S.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
