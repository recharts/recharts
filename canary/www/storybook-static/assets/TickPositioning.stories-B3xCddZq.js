import{e as t}from"./iframe-Isp5DByQ.js";import{R as s}from"./arrayEqualityCheck-DcSZTGrK.js";import{L as m}from"./LineChart-CmPNWGi8.js";import{L as c}from"./Line-iXWiESHH.js";import{X as d}from"./XAxis-DbS-5SMi.js";import{R as l}from"./RechartsHookInspector-BcUB3q5g.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CktQcWs0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJiHoXCP.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./zIndexSlice-Kir1u83y.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./Layer-BzTi7EcX.js";import"./ReactUtils-BG9wPH-d.js";import"./Label-BIeSPvzh.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./ZIndexLayer-B7yLevK6.js";import"./ActivePoints-CEokwuvu.js";import"./Dot-CxDulsX9.js";import"./types-BUXZfUBK.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./ErrorBarContext-CqPa7Fo7.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./useAnimationId-BH36Yv-4.js";import"./getRadiusAndStrokeWidthFromDot-DQQ1a1Ar.js";import"./ActiveShapeUtils-Ch4UNesV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMTNFeQ6.js";import"./Trapezoid-BhaWvkYr.js";import"./Sector-DXk8yocg.js";import"./Symbols-CRejWEVT.js";import"./Curve-BVujXptJ.js";import"./CartesianAxis-CtKR5av8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DhR5oTPc.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./OffsetShower-34zfbzoW.js";import"./PlotAreaShower-DPXygzPM.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
