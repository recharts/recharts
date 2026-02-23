import{e as t}from"./iframe-Cg8afp3P.js";import{R as n}from"./arrayEqualityCheck-CdnxX3zW.js";import{L as s}from"./LineChart-DoZRGYR3.js";import{L as c}from"./Line-ix8re_Gh.js";import{X as d}from"./XAxis-CcHOaWFK.js";import{R as l}from"./RechartsHookInspector-DBmCwbx2.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-3HltEOEu.js";import"./immer-496O7mbU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./zIndexSlice-BhrWtTkt.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./Layer-YebNzFxt.js";import"./ReactUtils-Bs6wbtV4.js";import"./Label-DvKY9pNQ.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./ZIndexLayer-8TBIBWl0.js";import"./ActivePoints--aP-WW0G.js";import"./Dot-BEaF242C.js";import"./types-CMLysTZx.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./ErrorBarContext-CYmUoBhN.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./useAnimationId-KzNTUIqt.js";import"./getRadiusAndStrokeWidthFromDot-TA9Ey7Di.js";import"./ActiveShapeUtils-C8ehvzet.js";import"./isPlainObject-exJkdHtC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-m1zl6eyw.js";import"./Trapezoid-CNmEBD2U.js";import"./Sector-DyLH-ktt.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./step-CqAkm0lp.js";import"./Curve-kDork6Kh.js";import"./CartesianAxis-BH2_JJNm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
