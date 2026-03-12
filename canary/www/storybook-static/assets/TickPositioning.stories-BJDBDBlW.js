import{e as t}from"./iframe-COcG-qbh.js";import{R as n}from"./arrayEqualityCheck-BeOMvnb3.js";import{L as s}from"./LineChart-CqCdKYHX.js";import{L as c}from"./Line-ybx60JI6.js";import{X as d}from"./XAxis-BvRN0x7f.js";import{R as l}from"./RechartsHookInspector-D4zrFLHG.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./immer-Ca_zwxaB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1tql2K4.js";import"./index-L5JLgxKc.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./zIndexSlice-DLKXsrK7.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./Layer-vnezQjXg.js";import"./ReactUtils-ByNOpxgT.js";import"./Label-DoQmsUBD.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./ZIndexLayer-BbjqRzm7.js";import"./ActivePoints-BrEavqGN.js";import"./Dot-CVahyVSD.js";import"./types-BmPLOBN4.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./ErrorBarContext-DI230CHI.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./useAnimationId-C4wu98Fe.js";import"./getRadiusAndStrokeWidthFromDot-BeBm-eBn.js";import"./ActiveShapeUtils-RW2zb_O9.js";import"./isPlainObject-C1cKrmsx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DI-yKH8h.js";import"./Trapezoid-CsCypRfT.js";import"./Sector-DxAh5Ohi.js";import"./Symbols-BHgUqhVd.js";import"./symbol-DxkjCDul.js";import"./step-CYjHyJAh.js";import"./Curve-C3xLkezj.js";import"./CartesianAxis-RY42tSQN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-R98a5OxC.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
