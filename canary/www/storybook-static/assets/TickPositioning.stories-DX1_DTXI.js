import{e as t}from"./iframe-DyjRblV4.js";import{R as n}from"./arrayEqualityCheck-BCBk4eJo.js";import{L as s}from"./LineChart-CEYo_BwH.js";import{L as c}from"./Line-mAT0SQrf.js";import{X as d}from"./XAxis-3tj5XX5g.js";import{R as l}from"./RechartsHookInspector-CLSiVssf.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4AlTuZQw.js";import"./immer-DeoYJGCn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFEsmCfM.js";import"./index-OiAZIktC.js";import"./hooks-CiwwtQbj.js";import"./axisSelectors-C6wd-jHd.js";import"./d3-scale-BncasbBD.js";import"./zIndexSlice-D853Na5_.js";import"./renderedTicksSlice-bDrbmMTk.js";import"./CartesianChart-DR7Wyq8A.js";import"./chartDataContext-CG_sj1-6.js";import"./CategoricalChart-DetmSIYy.js";import"./Layer-D5cQtuvM.js";import"./ReactUtils-Q3LPRUl3.js";import"./Label-DnTlQwVU.js";import"./Text-BbnvQ86I.js";import"./DOMUtils-Byght_Oi.js";import"./ZIndexLayer-B-XtZ0gD.js";import"./ActivePoints-GgK6dtPd.js";import"./Dot-DOEX6Lb3.js";import"./types-ffHtiOpO.js";import"./RegisterGraphicalItemId-DvhT43Lq.js";import"./ErrorBarContext-DYFWZfKJ.js";import"./GraphicalItemClipPath-DHsoSQ6I.js";import"./SetGraphicalItem-DjBG-u5C.js";import"./useAnimationId-DZzgYgKg.js";import"./getRadiusAndStrokeWidthFromDot-B3zNGCYt.js";import"./ActiveShapeUtils-DLWy5yPh.js";import"./isPlainObject-B8lTeUZ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-4UGNDp.js";import"./Trapezoid-BpRYxRsm.js";import"./Sector-CxnAykfe.js";import"./Symbols-BQK3uzvy.js";import"./symbol-5KBLnT74.js";import"./step-B9ndRdpI.js";import"./Curve-Cf07iBBR.js";import"./CartesianAxis-D4rKauGt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B9JdmiBC.js";import"./ChartSizeDimensions-BWUwefGk.js";import"./OffsetShower-DxfCy4YL.js";import"./PlotAreaShower-DD9Xt5FU.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
