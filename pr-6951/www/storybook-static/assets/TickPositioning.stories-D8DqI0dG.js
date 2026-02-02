import{e as t}from"./iframe-Cce3OzqZ.js";import{R as s}from"./arrayEqualityCheck-Db-Wlt3-.js";import{L as m}from"./LineChart-BKs4T5jc.js";import{L as c}from"./Line-BV_1wN7V.js";import{X as d}from"./XAxis-DnzcawyL.js";import{R as l}from"./RechartsHookInspector-eGeMVAmo.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clrD5nAI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BB7xPYUQ.js";import"./hooks-CvLdkisu.js";import"./axisSelectors-Bcvcu9k5.js";import"./zIndexSlice-Cor1sHRq.js";import"./CartesianChart-CWSN6Hlp.js";import"./chartDataContext-CgfT6HWr.js";import"./CategoricalChart-9DlpQFFM.js";import"./Layer-CFkQXCn1.js";import"./ReactUtils-Nar3liya.js";import"./Label-C4rMK4zH.js";import"./Text-CY2c_dSA.js";import"./DOMUtils-T3Cy7g6m.js";import"./ZIndexLayer-BKOy02ft.js";import"./ActivePoints-DeEio4lB.js";import"./Dot-BemQcXpQ.js";import"./types-b_fBODQO.js";import"./RegisterGraphicalItemId-9_Paa6o8.js";import"./ErrorBarContext-DV0NqXL1.js";import"./GraphicalItemClipPath-BC3qMhyN.js";import"./SetGraphicalItem-DtwoVgdz.js";import"./useAnimationId-CDstBXSk.js";import"./getRadiusAndStrokeWidthFromDot-D2j_mTyW.js";import"./ActiveShapeUtils-BMdNKtxM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3wzWw1S.js";import"./Trapezoid-kBqI72Ws.js";import"./Sector-CPI45FrX.js";import"./Symbols-BhodARnK.js";import"./Curve-Fkz9pikW.js";import"./CartesianAxis-D93mj95O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DVt7NuEo.js";import"./ChartSizeDimensions-g60a5Ajl.js";import"./OffsetShower-TfY9mri6.js";import"./PlotAreaShower-CZOh-CeP.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
