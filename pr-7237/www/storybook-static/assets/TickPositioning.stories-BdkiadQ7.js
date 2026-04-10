import{e as t}from"./iframe-BnepZbIT.js";import{R as n}from"./arrayEqualityCheck-Bzj1NFbL.js";import{L as s}from"./LineChart-D8FIFBpV.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CrpR2_m2.js";import{X as l}from"./XAxis-SiwesCXl.js";import{R as v}from"./RechartsHookInspector-C4hunDdt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCq0BlxP.js";import"./immer-CMcm_nUx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvbGdFiP.js";import"./index-BYgM4v9S.js";import"./hooks-CP1-TJLt.js";import"./axisSelectors-DQBdr2e5.js";import"./d3-scale-rflYLnZy.js";import"./zIndexSlice-C8s-XU9n.js";import"./renderedTicksSlice-CSId2xIn.js";import"./CartesianChart-90suVU5n.js";import"./chartDataContext-DCbFY6Je.js";import"./CategoricalChart-Dkb_r9k9.js";import"./Layer-Ca-NGzhu.js";import"./ReactUtils-64sNutUM.js";import"./Label-CvQfGABs.js";import"./Text-CPTRxDfj.js";import"./DOMUtils-DlCDOcC9.js";import"./ZIndexLayer-CaJTwElI.js";import"./ActivePoints-KKzFiWPz.js";import"./Dot-CQLqFjtJ.js";import"./types-Df0IzV2Z.js";import"./RegisterGraphicalItemId-DInnBgXa.js";import"./ErrorBarContext-biD2FyQs.js";import"./GraphicalItemClipPath-BLvis0SJ.js";import"./SetGraphicalItem-Dwsy_PTG.js";import"./useAnimationId-0FE8S7Lc.js";import"./getRadiusAndStrokeWidthFromDot-xaimMp6X.js";import"./ActiveShapeUtils-BrWeXoF9.js";import"./isPlainObject-BxGEMuWM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-QDjYZ4Lh.js";import"./Trapezoid-CWH0SbFy.js";import"./Sector-CD_FNLgY.js";import"./Symbols-eksBr05G.js";import"./symbol-hzKkaagP.js";import"./step-BFaHnM_e.js";import"./Curve-DKZiYoJj.js";import"./CartesianAxis-DimAd1iY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D2gJFJUM.js";import"./ChartSizeDimensions-YfbBA8uv.js";import"./OffsetShower-DpIwysro.js";import"./PlotAreaShower-BdzDALPX.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
