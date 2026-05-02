import{e as t}from"./iframe-DDxjm-WU.js";import{R as n}from"./arrayEqualityCheck-BDTW-iCp.js";import{L as s}from"./LineChart-DZfv1obd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BPnw9nie.js";import{X as l}from"./XAxis-Bk56gde7.js";import{R as v}from"./RechartsHookInspector-Bsn_fuN0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./immer-Dkl5Am7g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./hooks-YOhxCck_.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CyBi_8s9.js";import"./renderedTicksSlice-Bbo75at4.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./Layer-DLlz0gUf.js";import"./Curve-Dkov4-pW.js";import"./types-BJgxgmcc.js";import"./step-SAK8fO-u.js";import"./AnimatedItems-CSkyjlHH.js";import"./Label-yPRdE_cG.js";import"./Text-Dhvbhtov.js";import"./DOMUtils-BA-rpJ1d.js";import"./ZIndexLayer-BMzzahCv.js";import"./useAnimationId-BR6TF1aX.js";import"./ActivePoints-C7F7VZ5g.js";import"./Dot-L6tPFerw.js";import"./RegisterGraphicalItemId-ClGGvm6o.js";import"./ErrorBarContext-DW-8h9VL.js";import"./GraphicalItemClipPath-DqVRZ_0S.js";import"./SetGraphicalItem-CuKG-JqA.js";import"./getRadiusAndStrokeWidthFromDot-BORIc5te.js";import"./ActiveShapeUtils-DLASNkc5.js";import"./isPlainObject-BBpCzhfD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IbIg2bFH.js";import"./Trapezoid--noiZBKT.js";import"./Sector-DsN_tQHR.js";import"./Symbols-KpMFDNBi.js";import"./symbol-rnYDxF4k.js";import"./CartesianAxis-ClZZ2QTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-PKdkWvoA.js";import"./ChartSizeDimensions-DNtnVTHS.js";import"./OffsetShower-kAoxPyWs.js";import"./PlotAreaShower-CCGJY3Cl.js";const ht={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70})),t.createElement(v,null)))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const xt=["TickPositioning"];export{r as TickPositioning,xt as __namedExportsOrder,ht as default};
