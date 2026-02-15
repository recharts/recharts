import{e as t}from"./iframe-5gSlIHH4.js";import{R as s}from"./arrayEqualityCheck-BEqt-CBJ.js";import{L as m}from"./LineChart-BHx79JjX.js";import{L as c}from"./Line-DAr6Anc7.js";import{X as d}from"./XAxis-CJFZHxba.js";import{R as l}from"./RechartsHookInspector-DIk6ks1k.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BqaV8AGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6JQB65s.js";import"./hooks-DcJw7lCF.js";import"./axisSelectors-DaxAJyom.js";import"./zIndexSlice-BvmJeHFk.js";import"./CartesianChart-BZLhng-O.js";import"./chartDataContext-CS2RN2FU.js";import"./CategoricalChart-CaF4nfMG.js";import"./Layer-OyNvh1Ue.js";import"./ReactUtils-DmzojIhK.js";import"./Label-A5hrmEss.js";import"./Text-BQ538cjB.js";import"./DOMUtils-Cwe4TU_Z.js";import"./ZIndexLayer-CgtyelTd.js";import"./ActivePoints-CpoOqycz.js";import"./Dot-Lu-ZK3VO.js";import"./types-D2uPaQlB.js";import"./RegisterGraphicalItemId-C8051Zi-.js";import"./ErrorBarContext-BOsyAuvl.js";import"./GraphicalItemClipPath-DuWpJ7iO.js";import"./SetGraphicalItem-GsI-naXM.js";import"./useAnimationId-CiuthG3f.js";import"./getRadiusAndStrokeWidthFromDot-BRx77z1g.js";import"./ActiveShapeUtils-B3Ii4nXp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsjrTG3t.js";import"./Trapezoid-CZIjMiGb.js";import"./Sector-BnVCCXEU.js";import"./Symbols-BlEQEpn8.js";import"./Curve-D2ClwKYm.js";import"./CartesianAxis-BR-I9vbL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BT-ezfJz.js";import"./ChartSizeDimensions-sc7nlrKR.js";import"./OffsetShower-DmAztKvM.js";import"./PlotAreaShower-Druc4JY3.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
