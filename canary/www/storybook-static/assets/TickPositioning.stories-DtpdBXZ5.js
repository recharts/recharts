import{e as t}from"./iframe-CxA-LBWH.js";import{R as n}from"./arrayEqualityCheck-hJaoC2QB.js";import{L as s}from"./LineChart-CfBSWVSI.js";import{L as c}from"./Line-B90QZ5am.js";import{X as d}from"./XAxis-re4pUrp8.js";import{R as l}from"./RechartsHookInspector-Ddvgytdy.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMH4rWNF.js";import"./immer-xqAoRSgx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQKKXFhE.js";import"./index-Dk8ktJ0b.js";import"./hooks-CIwzfPxR.js";import"./axisSelectors-OHI-Dqd0.js";import"./d3-scale-uVAmWtey.js";import"./zIndexSlice-BN1d4D77.js";import"./renderedTicksSlice-hESCiC9f.js";import"./CartesianChart-DsF2ziWs.js";import"./chartDataContext-BsA2334w.js";import"./CategoricalChart-B_RNqQJb.js";import"./Layer-5LyTOX7F.js";import"./ReactUtils-B-8-Nq1R.js";import"./Label-CVqcP_87.js";import"./Text-BvZKJmQ_.js";import"./DOMUtils-BSZ8zVsl.js";import"./ZIndexLayer-N8IExBeW.js";import"./ActivePoints-CIo7jtJ2.js";import"./Dot-C9MXONQR.js";import"./types-C0V6O8sH.js";import"./RegisterGraphicalItemId-D9LaM4VI.js";import"./ErrorBarContext-CztBpvft.js";import"./GraphicalItemClipPath-BCMoGptD.js";import"./SetGraphicalItem-CRDshZRQ.js";import"./useAnimationId-aDbwOJad.js";import"./getRadiusAndStrokeWidthFromDot-CaSx4Wqq.js";import"./ActiveShapeUtils-BTPYOWGE.js";import"./isPlainObject-_PMt6I7e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B05RSUx1.js";import"./Trapezoid-DGB4adeR.js";import"./Sector-C9Xa9AX9.js";import"./Symbols-N7aoJg5C.js";import"./symbol-BbORdVVc.js";import"./step-o5fwVMRf.js";import"./Curve-C0Mvljc7.js";import"./CartesianAxis-D_h95VSX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DMMo74k-.js";import"./ChartSizeDimensions-BQWthli9.js";import"./OffsetShower-BxtkGnvp.js";import"./PlotAreaShower-lv5k_DaO.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
