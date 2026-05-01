import{e as t}from"./iframe-BRNudyUC.js";import{R as n}from"./arrayEqualityCheck-BDDqf68l.js";import{L as s}from"./LineChart-ZkRTryVq.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BJJ523l_.js";import{X as l}from"./XAxis-D5flW7iC.js";import{R as v}from"./RechartsHookInspector-bCgKsqnr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-bvYT90Do.js";import"./immer-efUMdrFM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ny_QHnuL.js";import"./index-BpzgcC1p.js";import"./hooks-g1pwYnn9.js";import"./axisSelectors-DBRNeiSB.js";import"./d3-scale-BE1R65Yr.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-Bxbwbl5M.js";import"./renderedTicksSlice-Dd_sUH3I.js";import"./CartesianChart-DtfUiseX.js";import"./chartDataContext-DWt96v8T.js";import"./CategoricalChart-BAXoX5YA.js";import"./Layer-72bRSYZY.js";import"./Curve-DS1o2tEO.js";import"./types-CuUkJyrv.js";import"./step-OjWirnGE.js";import"./AnimatedItems-DyV65I1f.js";import"./Label-C0IwlP1f.js";import"./Text-DYXt0Tk2.js";import"./DOMUtils-BUce29Ys.js";import"./ZIndexLayer-BqNsDADZ.js";import"./useAnimationId-DKTA-eAm.js";import"./ActivePoints-BzKj6q44.js";import"./Dot-DQc05o-V.js";import"./RegisterGraphicalItemId-DKtlUZkV.js";import"./ErrorBarContext-D3Lj0Odf.js";import"./GraphicalItemClipPath-sl_sf-ia.js";import"./SetGraphicalItem-BMN_yPrU.js";import"./getRadiusAndStrokeWidthFromDot-DyploHpC.js";import"./ActiveShapeUtils-BgG6X-fa.js";import"./isPlainObject-D-_-2woO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWclrIl5.js";import"./Trapezoid-Da1UYdj_.js";import"./Sector-D7BMvRVb.js";import"./Symbols-hkZNpq1J.js";import"./symbol-BcfkrHFP.js";import"./CartesianAxis-BGRfLIi8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DrL1-A17.js";import"./ChartSizeDimensions-Bj0myzFp.js";import"./OffsetShower-6Jy39FxY.js";import"./PlotAreaShower-DGNr6qsk.js";const ht={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70})),t.createElement(v,null)))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const xt=["TickPositioning"];export{r as TickPositioning,xt as __namedExportsOrder,ht as default};
