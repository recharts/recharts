import{e as t}from"./iframe-DhSnVUUY.js";import{R as n}from"./arrayEqualityCheck-ItSr43uT.js";import{L as s}from"./LineChart-DatH724u.js";import{L as c}from"./Line-B0U88ML_.js";import{X as d}from"./XAxis-BK9sGi8f.js";import{R as l}from"./RechartsHookInspector-_iSQ6Sv6.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./immer-ffnfnJI7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yZud87Hm.js";import"./index-CW6mkywG.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./zIndexSlice-CmnFYU-3.js";import"./renderedTicksSlice-aQirpCka.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./Layer-DqA8yJsy.js";import"./ReactUtils-BaLETgkD.js";import"./Label-CbPieNct.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./ZIndexLayer-qqef8KVB.js";import"./ActivePoints-BvftcU8L.js";import"./Dot-DMOGBFVp.js";import"./types-B9YiKk4f.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./ErrorBarContext-CqudBFLS.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./useAnimationId-DocxG_ZJ.js";import"./getRadiusAndStrokeWidthFromDot-DsTA79K5.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./step-CbaapRre.js";import"./Curve-BOb3x1Vv.js";import"./CartesianAxis-wTVaN_w2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-AtwlN2q9.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./OffsetShower-BxnZU9HH.js";import"./PlotAreaShower-CiIWRvtc.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
