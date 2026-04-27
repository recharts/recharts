import{e as t}from"./iframe-Db5WrE36.js";import{R as n}from"./arrayEqualityCheck-C3JobR2_.js";import{L as s}from"./LineChart-CMIQTKp9.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CBPn8kOS.js";import{X as l}from"./XAxis-BTNXWmYe.js";import{R as v}from"./RechartsHookInspector-CFI1frAU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DvMxgvCh.js";import"./immer-CAzEWOIE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDDerXEh.js";import"./index-BJzZql5p.js";import"./hooks-lxXboCZm.js";import"./axisSelectors-CDotANNU.js";import"./d3-scale-FiYYf1nP.js";import"./zIndexSlice-DHcQINX8.js";import"./renderedTicksSlice-CypQTB_Z.js";import"./CartesianChart-5yWhuVSR.js";import"./chartDataContext-DCp_Y5EI.js";import"./CategoricalChart-K1l3oikN.js";import"./Layer-BG3cqZBo.js";import"./ReactUtils-AT3k4juV.js";import"./Label-CpNI3apL.js";import"./Text-B5PL99FR.js";import"./DOMUtils-C6TuwyJI.js";import"./ZIndexLayer-xgBtkb6c.js";import"./ActivePoints-SBAA7IQq.js";import"./Dot-C721K0mv.js";import"./types-CFSpK2OQ.js";import"./RegisterGraphicalItemId-D7MaJQJ5.js";import"./ErrorBarContext-D1SBSnUl.js";import"./GraphicalItemClipPath-DsXTVivH.js";import"./SetGraphicalItem-C-hqhW2S.js";import"./useAnimationId-DKHJcbO_.js";import"./getRadiusAndStrokeWidthFromDot-D8DWZlAx.js";import"./ActiveShapeUtils-CVJU97c4.js";import"./isPlainObject-C5kCzJV1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGyhLsa6.js";import"./Trapezoid-Dafb8niv.js";import"./Sector-Dgz1-C8v.js";import"./Symbols-dNkD4NkT.js";import"./symbol-B2ykHL9B.js";import"./step-D8uPwds-.js";import"./Curve-CpGZD15H.js";import"./CartesianAxis-D6uDjXla.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B08ilTo6.js";import"./ChartSizeDimensions-CXOsnzEA.js";import"./OffsetShower-DEnIV-uj.js";import"./PlotAreaShower-CqTq0MkW.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
