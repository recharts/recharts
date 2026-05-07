import{e as t}from"./iframe-BgwmBjfB.js";import{R as n}from"./arrayEqualityCheck-B1qnogVb.js";import{L as s}from"./LineChart-Sn_wSyEN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BukzmJmv.js";import{X as l}from"./XAxis-BX9DZiaX.js";import{R as v}from"./RechartsHookInspector-OzbFILx_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-qucNpk_A.js";import"./immer-L1QYf-NE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./hooks-BBhaKEpc.js";import"./axisSelectors-p-DsPcsN.js";import"./d3-scale-C0r8W7gC.js";import"./zIndexSlice-9mnJo3WO.js";import"./renderedTicksSlice-kbflTFpl.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./Layer-sKAIqvEC.js";import"./ReactUtils-Dla0XjmI.js";import"./Label-BeTMxE7h.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./ZIndexLayer-DX-nM8qM.js";import"./ActivePoints-DDZpcuUc.js";import"./Dot-n89jEX-l.js";import"./types-CFdz9x_M.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./ErrorBarContext-CLlFokOM.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./useAnimationId-nEXiQ4wd.js";import"./getRadiusAndStrokeWidthFromDot-BAwr8WJt.js";import"./ActiveShapeUtils-Bc3Bo2kR.js";import"./isPlainObject-DCrRKxze.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xy71HFhS.js";import"./Trapezoid-Ctq3RZiG.js";import"./Sector-B8iCNGe2.js";import"./Symbols-CqgbDjwG.js";import"./symbol-D69U7vWh.js";import"./step-BxFdL0zf.js";import"./Curve-D2S6CN-2.js";import"./CartesianAxis-GtFYCfV6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B_0cWXev.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./OffsetShower-NinoivPu.js";import"./PlotAreaShower-BvfC-KbU.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
