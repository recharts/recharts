import{e as t}from"./iframe-Dx3F1CSe.js";import{R as n}from"./arrayEqualityCheck-DMaNZfsY.js";import{L as s}from"./LineChart-CGy6i5LX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CbeJ4161.js";import{X as l}from"./XAxis-DSoOfFVG.js";import{R as v}from"./RechartsHookInspector-BAwm_Fvn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CXoJrQ_A.js";import"./immer-CPegyDWk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_B5nhKu.js";import"./index-BeZ_ypUT.js";import"./hooks-aYl0koFW.js";import"./axisSelectors-DmW2duOw.js";import"./d3-scale-BnGwHyKU.js";import"./zIndexSlice-CPXQUw6s.js";import"./renderedTicksSlice-S30Bo7Xq.js";import"./CartesianChart-2VGagNAy.js";import"./chartDataContext-CVXqCkfR.js";import"./CategoricalChart-ByIQfQbt.js";import"./Layer-BatgHwMu.js";import"./ReactUtils-Cd33UQfd.js";import"./Label-B3UU_HSI.js";import"./Text-ClY5nVeB.js";import"./DOMUtils-Bny8fRsV.js";import"./ZIndexLayer-BTGGDCgU.js";import"./ActivePoints-DBEXRMMQ.js";import"./Dot-DyEp_Y2i.js";import"./types-Fk51O_d2.js";import"./RegisterGraphicalItemId--5sq17ZQ.js";import"./ErrorBarContext-D8MNVbSR.js";import"./GraphicalItemClipPath-CgpTlQpM.js";import"./SetGraphicalItem-z01-aQ6e.js";import"./useAnimationId-CaQxO-lU.js";import"./getRadiusAndStrokeWidthFromDot-CIhR-EWT.js";import"./ActiveShapeUtils-LKLEmdOo.js";import"./isPlainObject-CvDuL2Db.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aVXlBDAg.js";import"./Trapezoid-mG7ZoGF8.js";import"./Sector-CxmPGBJY.js";import"./Symbols-BjVmMqrI.js";import"./symbol-Tg8V4fLu.js";import"./step-BGsv1v0H.js";import"./Curve-ZDUjen4G.js";import"./CartesianAxis-CgkE7jBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DBIJZBCi.js";import"./ChartSizeDimensions-CO9342qd.js";import"./OffsetShower-C0Ua3cjt.js";import"./PlotAreaShower-jcM5E0P2.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
