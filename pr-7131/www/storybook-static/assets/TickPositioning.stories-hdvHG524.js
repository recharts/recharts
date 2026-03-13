import{e as t}from"./iframe-BDTlfdm2.js";import{R as n}from"./arrayEqualityCheck--4uVIqe7.js";import{L as s}from"./LineChart-DbWUaTY0.js";import{L as c}from"./Line-B9H8yD7C.js";import{X as d}from"./XAxis-CGiSi9HN.js";import{R as l}from"./RechartsHookInspector-CwVl35lx.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Czz55H-I.js";import"./immer-D4Dnjbsg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFvbTCKp.js";import"./index-B3NJv-3m.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./zIndexSlice-Brj7ikm8.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./Layer-CqYlT3eS.js";import"./ReactUtils-ma75EdaK.js";import"./Label-VxKVkBMg.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./ZIndexLayer-DC39aMOh.js";import"./ActivePoints-o7K4rMbo.js";import"./Dot-245mRXx6.js";import"./types-D6KN9kQt.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./ErrorBarContext-DViBWZq0.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./useAnimationId-CupwM_tg.js";import"./getRadiusAndStrokeWidthFromDot-CH2mR7qj.js";import"./ActiveShapeUtils-ZL_pxKoe.js";import"./isPlainObject-Cnip5whK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWWR6MHC.js";import"./Trapezoid-yGMiXHgj.js";import"./Sector-ketJTAKQ.js";import"./Symbols-7yR4Wfku.js";import"./symbol-BHrPG3ZF.js";import"./step-C4gkOhOo.js";import"./Curve-g-MTQgVG.js";import"./CartesianAxis-CZM1jQf4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CT8_ithu.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./OffsetShower-Mn3nZtBJ.js";import"./PlotAreaShower-zSnLei3q.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
