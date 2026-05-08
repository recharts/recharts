import{e as t}from"./iframe-CrHrvGFA.js";import{R as n}from"./arrayEqualityCheck-D7V7-zfy.js";import{L as s}from"./LineChart-C-15oDjF.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DGT2_2aD.js";import{X as l}from"./XAxis-D0X6vRGT.js";import{R as v}from"./RechartsHookInspector-DW_mvAVM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CHUiU1F7.js";import"./immer-BCwItB4q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BB1RiCRS.js";import"./index-BkAWwSZa.js";import"./hooks-C-ZW7Hvz.js";import"./axisSelectors-apUKQ5p6.js";import"./d3-scale-aLx8KFU7.js";import"./zIndexSlice-BPhJKxcZ.js";import"./renderedTicksSlice-BKLazWGY.js";import"./CartesianChart-BtNZYkZt.js";import"./chartDataContext-CBLNwLu7.js";import"./CategoricalChart-Ds9PKqQr.js";import"./Layer-VGdDjG6T.js";import"./ReactUtils-B0mFaADN.js";import"./Label-DZt9DpVA.js";import"./Text-DPhEVUwO.js";import"./DOMUtils-C8jm054W.js";import"./ZIndexLayer-CaiMnAVk.js";import"./ActivePoints-CvrGo7z5.js";import"./Dot-2YvQxSoM.js";import"./types-C-thJRzw.js";import"./RegisterGraphicalItemId-BTCsPxG4.js";import"./ErrorBarContext-CFytyOKJ.js";import"./GraphicalItemClipPath-BlrVoPx6.js";import"./SetGraphicalItem-trN_YbRB.js";import"./useAnimationId-gwH5_ERq.js";import"./getRadiusAndStrokeWidthFromDot-5JZDbfVs.js";import"./ActiveShapeUtils-D6tcxPOv.js";import"./isPlainObject--NGRnfHf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTNp-Bxb.js";import"./Trapezoid-KpxrlCw6.js";import"./Sector-DuGIl3xX.js";import"./Symbols-DPG6nOF1.js";import"./symbol-DBDK4FNb.js";import"./step-B-10frX1.js";import"./Curve-DoNjcFRC.js";import"./CartesianAxis-C6mIt3Wc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CpHQapov.js";import"./ChartSizeDimensions-DZ9MktBW.js";import"./OffsetShower-C2k5oquR.js";import"./PlotAreaShower-DFoVEO8k.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
