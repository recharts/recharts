import{e as t}from"./iframe-D8RsH_ZD.js";import{R as s}from"./arrayEqualityCheck-DfUQQqNG.js";import{L as m}from"./LineChart-DP2vSW_x.js";import{L as c}from"./Line-B5izd7Q_.js";import{X as d}from"./XAxis-9qpGEcGJ.js";import{R as l}from"./RechartsHookInspector-DuFREeNP.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CikDBT3M.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./Layer-BDdUxbHF.js";import"./ReactUtils-6PKXXThp.js";import"./Label-DsxuCRwy.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./ZIndexLayer-DiTXvVi3.js";import"./ActivePoints-Dzb4Pd6Y.js";import"./Dot-k8-aBSGQ.js";import"./types-Dyd5Crad.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./ErrorBarContext-CAtMmrl9.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./useAnimationId-DRWFjGg3.js";import"./getRadiusAndStrokeWidthFromDot-DDuUn9Iv.js";import"./ActiveShapeUtils-DLbkhbSb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpAQA-Oa.js";import"./Trapezoid-bxIuEYMQ.js";import"./Sector-DQgAed3H.js";import"./Symbols-CBAU6oWP.js";import"./Curve-CIshv-2z.js";import"./CartesianAxis-ewa7ZF2u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
