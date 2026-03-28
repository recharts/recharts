import{e as t}from"./iframe-C27-mxY1.js";import{R as n}from"./arrayEqualityCheck-D-5eU_dz.js";import{L as s}from"./LineChart-C6gtMSpp.js";import{L as c}from"./Line-BOC_LYzJ.js";import{X as d}from"./XAxis-Bkm5Gu7p.js";import{R as l}from"./RechartsHookInspector-C_T85NFo.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./immer-CWybgQyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./zIndexSlice-BLW0sC1L.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./Layer-DIVtJdsU.js";import"./ReactUtils-DuG0Tdq5.js";import"./Label-B6Z4EDvc.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./ZIndexLayer-B-pky4ZU.js";import"./ActivePoints-h9H1Ebnw.js";import"./Dot-DiMYf5U7.js";import"./types-DbJv915h.js";import"./RegisterGraphicalItemId-CuWJpCyW.js";import"./ErrorBarContext-2LiDJnsG.js";import"./GraphicalItemClipPath-CJlc_ulB.js";import"./SetGraphicalItem-1mG4wi13.js";import"./useAnimationId-TcKlRMa1.js";import"./getRadiusAndStrokeWidthFromDot-BW0gjx4V.js";import"./ActiveShapeUtils-BMqQzPng.js";import"./isPlainObject-Cs6ajyZL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D88V661C.js";import"./Trapezoid-DPganyo-.js";import"./Sector-BBijWEml.js";import"./Symbols-ygUKGMj2.js";import"./symbol-Bcxorr4O.js";import"./step-DPeTeJhQ.js";import"./Curve-C3fWZnPx.js";import"./CartesianAxis-DZAE-TXK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
