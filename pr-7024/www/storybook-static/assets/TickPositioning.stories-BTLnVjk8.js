import{e as t}from"./iframe-BbZhTIjX.js";import{R as m}from"./arrayEqualityCheck-DkKqnDzt.js";import{L as s}from"./LineChart-C4BT9o6w.js";import{L as c}from"./Line-DA0p8sx2.js";import{X as d}from"./XAxis-C9xRC5JP.js";import{R as l}from"./RechartsHookInspector-BEtvb3d9.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpK6kTo-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNXfyTKD.js";import"./hooks-xGvQVXJu.js";import"./axisSelectors-tXY5A5QT.js";import"./zIndexSlice-Dz-zn5zm.js";import"./renderedTicksSlice-Bw2BSgf6.js";import"./CartesianChart-CjVvsiSP.js";import"./chartDataContext-DGmstLWk.js";import"./CategoricalChart-B-wga6Ud.js";import"./Layer-BRjxkTBT.js";import"./ReactUtils-B2BAtUcS.js";import"./Label-Be7TSIhI.js";import"./Text-DoKSXl81.js";import"./DOMUtils-BPmVZuXj.js";import"./ZIndexLayer-C9gNEIfS.js";import"./ActivePoints-C1EnRHYt.js";import"./Dot-oTf8G_NC.js";import"./types-BKBSpGfD.js";import"./RegisterGraphicalItemId-NnVsob8d.js";import"./ErrorBarContext-DomgNI41.js";import"./GraphicalItemClipPath-DCNpup2d.js";import"./SetGraphicalItem-yYMMJ8ci.js";import"./useAnimationId-DVyCRxxH.js";import"./getRadiusAndStrokeWidthFromDot-CULUnYYv.js";import"./ActiveShapeUtils-cpKe4lwt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-E9CHGVoE.js";import"./Trapezoid-abIioDDU.js";import"./Sector-yd-JjZP_.js";import"./Symbols-CAuboXnu.js";import"./Curve-DGXqFy3O.js";import"./CartesianAxis-TJWR5-DY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BeB1Guy7.js";import"./ChartSizeDimensions-CT9Oervl.js";import"./OffsetShower-D-jScXPc.js";import"./PlotAreaShower-FMUTuolU.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,nt as default};
