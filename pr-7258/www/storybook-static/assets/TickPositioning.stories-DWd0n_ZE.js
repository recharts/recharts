import{e as t}from"./iframe-Bz2Qn6Q0.js";import{R as n}from"./arrayEqualityCheck-SrtJKTr1.js";import{L as s}from"./LineChart-BS78pBch.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B0FBW4kU.js";import{X as l}from"./XAxis-0rcliQLc.js";import{R as v}from"./RechartsHookInspector-CRp0734Q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bw6mkRAu.js";import"./immer-Bf1ANpdG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxgxCr4x.js";import"./index-XEi-vt0m.js";import"./hooks-Bn0YkRzT.js";import"./axisSelectors-Dn0P--3Q.js";import"./d3-scale-Cj0fhoc6.js";import"./zIndexSlice-MM57jocS.js";import"./renderedTicksSlice-KjJl__e1.js";import"./CartesianChart-JAhvkHqp.js";import"./chartDataContext-DBTgugHo.js";import"./CategoricalChart-M6gnVyEJ.js";import"./Layer-Bp-alVkQ.js";import"./ReactUtils-BKN20BZR.js";import"./Label-Cx92zGqb.js";import"./Text-BeGwGDIw.js";import"./DOMUtils-CfBuJ7pA.js";import"./ZIndexLayer-Ci1J2GEs.js";import"./ActivePoints-BoxMP4wY.js";import"./Dot-H2-aVAZo.js";import"./types-Bq1ywEo3.js";import"./RegisterGraphicalItemId-BDNbOxSF.js";import"./ErrorBarContext-s59o9x04.js";import"./GraphicalItemClipPath-DmsPoL2A.js";import"./SetGraphicalItem-DmI1gY5l.js";import"./useAnimationId-C0d16Qdx.js";import"./getRadiusAndStrokeWidthFromDot-9Je4pShm.js";import"./ActiveShapeUtils-Cw4OmDCr.js";import"./isPlainObject-C7eNr1WD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZ4j4B1r.js";import"./Trapezoid-BI8cfUTU.js";import"./Sector-DlNvRyQv.js";import"./Symbols-CBkGZNC5.js";import"./symbol-CWNMfYRI.js";import"./step-Dly43UW-.js";import"./Curve-DWJn7QSQ.js";import"./CartesianAxis-BokQwd-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-6agPL1sG.js";import"./ChartSizeDimensions-DcrFs19n.js";import"./OffsetShower-CKOTZiON.js";import"./PlotAreaShower-SYizFfd0.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
