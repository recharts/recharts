import{e as t}from"./iframe-DTYvDHnt.js";import{R as n}from"./arrayEqualityCheck-1nsmynxr.js";import{L as s}from"./LineChart-D5pk0TWK.js";import{L as c}from"./Line-jorbotEa.js";import{X as d}from"./XAxis-D4mtTZaA.js";import{R as l}from"./RechartsHookInspector-Pg_EkWGi.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkSqodrF.js";import"./immer-D3GAE1ff.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_fFV3co.js";import"./index-B3wSVZ9D.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./zIndexSlice-CBk7l9Bz.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./Layer-D1ZUQvW9.js";import"./ReactUtils-C-Mw6kzE.js";import"./Label-Dl6pWHvn.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./ZIndexLayer-DhriUgdb.js";import"./ActivePoints-C_uAyo2G.js";import"./Dot-CYQCTbwY.js";import"./types-JQYj2LUa.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./ErrorBarContext-C4u9P8TO.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./useAnimationId-CwNlC5fD.js";import"./getRadiusAndStrokeWidthFromDot-BR4iej6B.js";import"./ActiveShapeUtils-vpnhlhYE.js";import"./isPlainObject-D_8yM-sa.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpDkrfm.js";import"./Trapezoid-BdxbKZVQ.js";import"./Sector-BIC07wIa.js";import"./Symbols-iaprTSLF.js";import"./symbol-Bx0PtbXY.js";import"./step-CL79bITl.js";import"./Curve-D1NGPsms.js";import"./CartesianAxis-BvJIB3EW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CrrTnEOk.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
