import{e as t}from"./iframe-CsXVB2ZJ.js";import{R as n}from"./arrayEqualityCheck-BCHdTh97.js";import{L as s}from"./LineChart-KQSX-aqA.js";import{L as c}from"./Line-CXPOtBvj.js";import{X as d}from"./XAxis-B7CspB_5.js";import{R as l}from"./RechartsHookInspector-DPsZ88KI.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxo_4k9c.js";import"./immer-BTK-YsvV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYOQVLv.js";import"./index-DrJPvX0I.js";import"./hooks-D_05cmM9.js";import"./axisSelectors-DotnTkUo.js";import"./d3-scale-COfDs1Hg.js";import"./zIndexSlice-COIrpl7N.js";import"./renderedTicksSlice-BIUh3E5-.js";import"./CartesianChart-D5A6zJYY.js";import"./chartDataContext-U_ALNAnQ.js";import"./CategoricalChart-D25YEStt.js";import"./Layer-ZxhtGexe.js";import"./ReactUtils-BPsWb6oC.js";import"./Label-CpKh3CyV.js";import"./Text-t92igXCI.js";import"./DOMUtils-DOi0Kbgg.js";import"./ZIndexLayer-kRMHxQSg.js";import"./ActivePoints-1yQdgBTn.js";import"./Dot-D9036cg4.js";import"./types-BRXmP5ht.js";import"./RegisterGraphicalItemId-Bh8wdrii.js";import"./ErrorBarContext-Dh71FriX.js";import"./GraphicalItemClipPath-CHSTcUHY.js";import"./SetGraphicalItem-1mPwySrk.js";import"./useAnimationId-CQeQyoAC.js";import"./getRadiusAndStrokeWidthFromDot-Blz_buNj.js";import"./ActiveShapeUtils-CSysbPr0.js";import"./isPlainObject-C0suLCJu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BziwuLFH.js";import"./Trapezoid-XBp8FK9I.js";import"./Sector-BbnyTQRb.js";import"./Symbols-B41PQ-gK.js";import"./symbol-C0zx-DBl.js";import"./step-Do92eA3g.js";import"./Curve-DWbGncva.js";import"./CartesianAxis-D3FkxlAO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B4Kp1LJ2.js";import"./ChartSizeDimensions-DnhUms5f.js";import"./OffsetShower-DndIy-Mf.js";import"./PlotAreaShower-BkBHMfKD.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
