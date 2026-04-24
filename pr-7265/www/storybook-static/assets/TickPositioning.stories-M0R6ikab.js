import{e as t}from"./iframe-LMZEDrr2.js";import{R as n}from"./arrayEqualityCheck-Isy6zPZP.js";import{L as s}from"./LineChart-CDsw78cF.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-5-HvnnXd.js";import{X as l}from"./XAxis-CDuwPcZ0.js";import{R as v}from"./RechartsHookInspector-BQiO1I7n.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BZX4Pe9p.js";import"./immer-BxzI6gFZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGclI6Yd.js";import"./index-9UiZJf_6.js";import"./hooks-D05996su.js";import"./axisSelectors-BJbnODt1.js";import"./d3-scale-HoZeCUQ0.js";import"./zIndexSlice-C5mrfXZA.js";import"./renderedTicksSlice-P-8ydmtT.js";import"./CartesianChart-D8UfDOFa.js";import"./chartDataContext-CmqegXUH.js";import"./CategoricalChart-CdP22T7j.js";import"./Layer-Dm4unAaj.js";import"./ReactUtils-D-S282mX.js";import"./Label-C1cFmZLh.js";import"./Text-D-rTyPnI.js";import"./DOMUtils-nLe0COZN.js";import"./ZIndexLayer-xLHvpxY5.js";import"./ActivePoints-iQlXbE54.js";import"./Dot-D2FHp4ML.js";import"./types-C96dbGEy.js";import"./RegisterGraphicalItemId-D4ZA5iGR.js";import"./ErrorBarContext-ByVn-xgW.js";import"./GraphicalItemClipPath-BG8ja_no.js";import"./SetGraphicalItem-BbPBNAhF.js";import"./useAnimationId-BVzXz2Ut.js";import"./getRadiusAndStrokeWidthFromDot-uSj8EeRI.js";import"./ActiveShapeUtils-DlCg2xOm.js";import"./isPlainObject-tSKo75hS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bTQTBoQ8.js";import"./Trapezoid-BaFBv2Ob.js";import"./Sector-DM3Dpfvi.js";import"./Symbols-q47rYWMx.js";import"./symbol-BUCm0Fuj.js";import"./step-DHepAl4j.js";import"./Curve-D3f_JNhO.js";import"./CartesianAxis-CmrHLfhr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B4Bhf0VI.js";import"./ChartSizeDimensions-Dkn4GtcA.js";import"./OffsetShower-BXlYCay7.js";import"./PlotAreaShower-3thsUpgf.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
