import{e as t}from"./iframe-BheSPRxC.js";import{R as n}from"./arrayEqualityCheck-DTJTJDIZ.js";import{L as s}from"./LineChart-BoF8QOtN.js";import{L as c}from"./Line--7zz5i3r.js";import{X as d}from"./XAxis-w4I0Dz-P.js";import{R as l}from"./RechartsHookInspector-BuIPrOmw.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YxfO8nVM.js";import"./immer-Bk3tlmFk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BReu-8p6.js";import"./index-BTAK_CzP.js";import"./hooks-D7thV8Yx.js";import"./axisSelectors-Bt_ndlyL.js";import"./d3-scale-Bi7kPPR-.js";import"./zIndexSlice-RIxi073z.js";import"./renderedTicksSlice-B7gUlO0Z.js";import"./CartesianChart-oljUKRjY.js";import"./chartDataContext-CTcUXfN7.js";import"./CategoricalChart-BxAT78Yw.js";import"./Layer-Dnr25hkA.js";import"./ReactUtils-eBHsRDRZ.js";import"./Label-DvFgjn-2.js";import"./Text-BUur2DfR.js";import"./DOMUtils-qoxeJE6c.js";import"./ZIndexLayer-BR-xGhiB.js";import"./ActivePoints-Bsd3d-yb.js";import"./Dot-DYB5kbJj.js";import"./types-Ig8fwHS7.js";import"./RegisterGraphicalItemId-CfZTXmBZ.js";import"./ErrorBarContext-CYeurdws.js";import"./GraphicalItemClipPath-CyqMb0de.js";import"./SetGraphicalItem-vkl4WKoz.js";import"./useAnimationId-CA-fcZvu.js";import"./getRadiusAndStrokeWidthFromDot-BDUfg5jI.js";import"./ActiveShapeUtils-CEbptTt-.js";import"./isPlainObject-DdlnvCr2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLKGSdHG.js";import"./Trapezoid-8ylyG2hR.js";import"./Sector-GkU_9DAY.js";import"./Symbols-DnaEJ_wk.js";import"./symbol-BrB1FpAX.js";import"./step-BEEMHEX_.js";import"./Curve-D5XGZpaq.js";import"./CartesianAxis-BNiz-eqI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-NavELH2p.js";import"./ChartSizeDimensions-Dbu0-vjG.js";import"./OffsetShower-DiJ1X-2O.js";import"./PlotAreaShower-CtIhvInc.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
