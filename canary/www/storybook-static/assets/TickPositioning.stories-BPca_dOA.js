import{e as t}from"./iframe-BRfjO5eG.js";import{R as n}from"./arrayEqualityCheck-D8wbB52K.js";import{L as s}from"./LineChart-B5A9VZ3-.js";import{L as c}from"./Line-C-E5t1BP.js";import{X as d}from"./XAxis-_RHNkAyf.js";import{R as l}from"./RechartsHookInspector-DqZpsbqV.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkK52Dr.js";import"./immer-6Mf_l_pR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-t74pKe.js";import"./index-Ds6oaLH2.js";import"./hooks-BpX4ZWOU.js";import"./axisSelectors-CiymgkMX.js";import"./d3-scale-QcLEkwbV.js";import"./zIndexSlice-DJoH0JSW.js";import"./renderedTicksSlice-BaIKxrOg.js";import"./CartesianChart-BILJUYgv.js";import"./chartDataContext-ffjZymjs.js";import"./CategoricalChart-D80geuJg.js";import"./Layer-Djm95T9f.js";import"./ReactUtils-Dg4XVGmm.js";import"./Label-C3-kCUB1.js";import"./Text-CAzsJ-UY.js";import"./DOMUtils-e5Yde7hA.js";import"./ZIndexLayer-x9RJx9gY.js";import"./ActivePoints-CLnDBSxm.js";import"./Dot-y-sJeOCR.js";import"./types-CJwNH7dd.js";import"./RegisterGraphicalItemId-CTGxX7GS.js";import"./ErrorBarContext-CHAdzrsL.js";import"./GraphicalItemClipPath-BNX-hUwf.js";import"./SetGraphicalItem-bUxjzC-C.js";import"./useAnimationId-fkzgSDca.js";import"./getRadiusAndStrokeWidthFromDot-CwUTXUzg.js";import"./ActiveShapeUtils-J6JOXjSY.js";import"./isPlainObject-BUdyPG4g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx7CcXS4.js";import"./Trapezoid-DNfmxhLW.js";import"./Sector-HbpHqeJ3.js";import"./Symbols-uMYMnubp.js";import"./symbol-DPSABYJO.js";import"./step-ylhKLd0a.js";import"./Curve-c7RsuyU-.js";import"./CartesianAxis-DDdCZP34.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CKyyuDQs.js";import"./ChartSizeDimensions-BOoNMCuu.js";import"./OffsetShower-ChoSpo1k.js";import"./PlotAreaShower-BU5aAxms.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
