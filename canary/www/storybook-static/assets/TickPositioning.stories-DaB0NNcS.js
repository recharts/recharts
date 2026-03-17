import{e as t}from"./iframe-N_BxlBi6.js";import{R as n}from"./arrayEqualityCheck-CEf0Nn8K.js";import{L as s}from"./LineChart-B-6LRr6L.js";import{L as c}from"./Line-CcaUDWqS.js";import{X as d}from"./XAxis-kOfNYCLV.js";import{R as l}from"./RechartsHookInspector-DfDmhGgp.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2ILCf7-n.js";import"./immer-m4imqOCY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CgEBdM7G.js";import"./index-BJgTJKw_.js";import"./hooks-DU7HquZl.js";import"./axisSelectors-BasHfAyu.js";import"./d3-scale-DrFqqVTo.js";import"./zIndexSlice-Dwnmzy4_.js";import"./renderedTicksSlice-grNcr2K9.js";import"./CartesianChart-DhdcO3Tw.js";import"./chartDataContext-B8JcpkdW.js";import"./CategoricalChart-DO4JOSMM.js";import"./Layer-BGFLosQF.js";import"./ReactUtils-Bc5QD6WP.js";import"./Label-DSedETU8.js";import"./Text-Pl8FjWNp.js";import"./DOMUtils-DL6CcFbu.js";import"./ZIndexLayer-B4oG6gqW.js";import"./ActivePoints-BdX8YxXH.js";import"./Dot-B-WJq94W.js";import"./types-BHZ13L2v.js";import"./RegisterGraphicalItemId-DW71PThT.js";import"./ErrorBarContext-C2YvqoiQ.js";import"./GraphicalItemClipPath-D270ZFS9.js";import"./SetGraphicalItem-BUxGEWkq.js";import"./useAnimationId-CZd_sIsZ.js";import"./getRadiusAndStrokeWidthFromDot-B0bkRdWl.js";import"./ActiveShapeUtils-D2jvcwVW.js";import"./isPlainObject-e5Vt2T8p.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0p8YhE4.js";import"./Trapezoid-C5EqpCxF.js";import"./Sector-BfcxVEhG.js";import"./Symbols-CsUc_eaQ.js";import"./symbol-B52iyaxv.js";import"./step-Dwb2wnB2.js";import"./Curve-BzBcZROj.js";import"./CartesianAxis-Bz8y1rju.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-PFvsiB8w.js";import"./ChartSizeDimensions-BbCILWBg.js";import"./OffsetShower-_4Zo9ctC.js";import"./PlotAreaShower-DcYSYMnm.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
