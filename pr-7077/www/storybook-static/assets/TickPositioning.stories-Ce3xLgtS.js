import{e as t}from"./iframe-CFR-gaGN.js";import{R as n}from"./arrayEqualityCheck-B4mATf9c.js";import{L as s}from"./LineChart-CNwaPDqJ.js";import{L as c}from"./Line-ChBLpYB3.js";import{X as d}from"./XAxis-DQlERQHB.js";import{R as l}from"./RechartsHookInspector-DAIAGGPn.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DjGpqQPT.js";import"./immer-Bk-xXHBC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeWitytO.js";import"./index-CSJLk245.js";import"./hooks-JwuHHdAq.js";import"./axisSelectors-D5HRTRW9.js";import"./d3-scale-BgOEq5Xh.js";import"./zIndexSlice-Boi-P9QX.js";import"./renderedTicksSlice-Br16TDM7.js";import"./CartesianChart-ueo_-gP0.js";import"./chartDataContext-BElgqktZ.js";import"./CategoricalChart-BnFLIcrr.js";import"./Layer-BHVJ1AiA.js";import"./ReactUtils-C9SxeRDL.js";import"./Label-DP_LAI-Y.js";import"./Text-mFmQrBQg.js";import"./DOMUtils-yKB-qwZ7.js";import"./ZIndexLayer-C3JqUkkH.js";import"./ActivePoints-DyWoik7C.js";import"./Dot-B3-OWSbc.js";import"./types-DncqRVvk.js";import"./RegisterGraphicalItemId-BEFkKq7O.js";import"./ErrorBarContext-GzoTlhrP.js";import"./GraphicalItemClipPath-Plh3ZetI.js";import"./SetGraphicalItem-DT4VFHn2.js";import"./useAnimationId-VCCfkRDK.js";import"./getRadiusAndStrokeWidthFromDot-BDVDZ-9_.js";import"./ActiveShapeUtils-DrwV2_Fx.js";import"./isPlainObject-D5r1oj15.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1LUHF-ab.js";import"./Trapezoid-C6_wzf5N.js";import"./Sector-DhcqTi-n.js";import"./Symbols-tvatlAm7.js";import"./symbol-DyWKZjmK.js";import"./step-BuQilum9.js";import"./Curve-xncZGYH6.js";import"./CartesianAxis-ClI6MqAO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BlXLNwUK.js";import"./ChartSizeDimensions-D3nOZoYf.js";import"./OffsetShower-CvuXOJnC.js";import"./PlotAreaShower-BMOctqSh.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
