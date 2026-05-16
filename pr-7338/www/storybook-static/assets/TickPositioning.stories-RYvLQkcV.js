import{e as t}from"./iframe-DWlBD4sR.js";import{g as n}from"./arrayEqualityCheck-CNEGbaey.js";import{L as s}from"./LineChart-DXYsUPou.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line--2TgE6AZ.js";import{X as l}from"./XAxis-DqK7mhYD.js";import{R as v}from"./RechartsHookInspector-BbwGamUB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNcUKtS8.js";import"./immer-DA_Y9NxP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-qpXHOlBt.js";import"./index-CG7DpBSc.js";import"./hooks-OMlNr05X.js";import"./axisSelectors-CpE3e6Wf.js";import"./d3-scale-M7VTsA4f.js";import"./zIndexSlice-D96LA4yw.js";import"./renderedTicksSlice-ClpTcocu.js";import"./CartesianChart-C5Nu26yg.js";import"./chartDataContext-tYXX0vXe.js";import"./CategoricalChart-DhnxgrNh.js";import"./Layer-CBKkaEhK.js";import"./ReactUtils-Bv-62o8T.js";import"./Label-B7fwnDQB.js";import"./Text-DHQSj0lc.js";import"./DOMUtils-LgZ0OFlh.js";import"./ZIndexLayer-CcFVuy64.js";import"./ActivePoints-BpXK1Sh9.js";import"./Dot-BNSrz3O7.js";import"./types-DufW0EQG.js";import"./RegisterGraphicalItemId-D8G2PQ9m.js";import"./ErrorBarContext-PluNcskT.js";import"./GraphicalItemClipPath-fLehOmj-.js";import"./SetGraphicalItem-CmDlGunV.js";import"./useAnimationId-DeTKnBQG.js";import"./getRadiusAndStrokeWidthFromDot-Df7nX_Vd.js";import"./ActiveShapeUtils-DFxf-U2C.js";import"./isPlainObject-Cg4BwvD8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-q1bxg6yb.js";import"./Trapezoid-DYkluK8E.js";import"./Sector-DrZ87OSF.js";import"./Symbols-DVgdh6wF.js";import"./symbol-CoAVQGVr.js";import"./step-DBWpQbX9.js";import"./Curve-DtQybK0o.js";import"./CartesianAxis-Mlw-1mLJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DfML4_6p.js";import"./ChartSizeDimensions-hqEEbS1-.js";import"./OffsetShower-DyOzfQGn.js";import"./PlotAreaShower-9P4lyNiw.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
