import{e as t}from"./iframe-BaY_xsSZ.js";import{R as n}from"./arrayEqualityCheck-Bdjqc4Ae.js";import{L as s}from"./LineChart-CwetqMlH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BUwsNwDj.js";import{X as l}from"./XAxis-ViYQKBdh.js";import{R as v}from"./RechartsHookInspector-BZJAdbFr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./immer-BxBygCNY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGEkw1V9.js";import"./index-BSMrFEqd.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./d3-scale-DIZez8ZA.js";import"./zIndexSlice-CtFEU_Ni.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./Layer-04iznQcl.js";import"./ReactUtils-B7IYIUp3.js";import"./Label-B4b2gNZT.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./ZIndexLayer-BzH8oXrO.js";import"./ActivePoints-t-qLyG_8.js";import"./Dot-BqkojDsv.js";import"./types-BZAl2150.js";import"./RegisterGraphicalItemId-x5Fjg9Mp.js";import"./ErrorBarContext-hvPjdfRQ.js";import"./GraphicalItemClipPath-C_oN7uRQ.js";import"./SetGraphicalItem-13HzTRgX.js";import"./useAnimationId-CntPUL-4.js";import"./getRadiusAndStrokeWidthFromDot-BrRZUxyx.js";import"./ActiveShapeUtils-CAoRm2wW.js";import"./isPlainObject-DluGOkEU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHMEhJP1.js";import"./Trapezoid-DZ8rNB7q.js";import"./Sector-c_JEoVhU.js";import"./Symbols-D6WgJo03.js";import"./symbol-N8c7H1tN.js";import"./step-CLF9a_rc.js";import"./Curve-B7UPBPeR.js";import"./CartesianAxis-CxJxU8_8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
