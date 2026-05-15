import{e as t}from"./iframe-IedaLeal.js";import{R as n}from"./arrayEqualityCheck-CDeFCuAt.js";import{L as s}from"./LineChart-BXojSIOU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-QYm9FiCp.js";import{X as l}from"./XAxis-CUj044ZC.js";import{R as v}from"./RechartsHookInspector-5qOOtg04.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DinctDfH.js";import"./immer-Dd6dXjxy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./Layer-COpu_kTm.js";import"./ReactUtils-De7AqaLg.js";import"./Label-NwC3LlsS.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./ZIndexLayer-JYekqGDv.js";import"./ActivePoints-Dn2oKCMT.js";import"./Dot-CXXTrQ7H.js";import"./types-Ci9gDE8O.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./ErrorBarContext-C7FVOsru.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./useAnimationId-D3Yn3hG9.js";import"./getRadiusAndStrokeWidthFromDot-B2hN5pbW.js";import"./ActiveShapeUtils-cikzdunu.js";import"./isPlainObject-BBCFg2tK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0StcwZN.js";import"./Trapezoid-DD2FtYjE.js";import"./Sector-BSwgLZD3.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";import"./step-CR-qwJGd.js";import"./Curve-BzqwREyl.js";import"./CartesianAxis-DdlOSCj4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
