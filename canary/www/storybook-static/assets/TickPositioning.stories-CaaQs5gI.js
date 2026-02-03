import{e as t}from"./iframe-b3l0oylc.js";import{R as s}from"./arrayEqualityCheck-CjMmMQbn.js";import{L as m}from"./LineChart-0Ts0cw8C.js";import{L as c}from"./Line-wmhGAa8E.js";import{X as d}from"./XAxis-DQI4GC2q.js";import{R as l}from"./RechartsHookInspector-XGSushi8.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DcvR48Du.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./zIndexSlice-6dxWRD0w.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./Layer-2yxRimi5.js";import"./ReactUtils-BwdRCLdj.js";import"./Label-DllavO7s.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./ZIndexLayer-CtStE837.js";import"./ActivePoints-DgMTYwE1.js";import"./Dot-CRE9dNM4.js";import"./types-DcS7TQb1.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./ErrorBarContext-4m-euoOZ.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./useAnimationId-DdymZr7z.js";import"./getRadiusAndStrokeWidthFromDot-BXhx89qn.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./Symbols-CncGFVbc.js";import"./Curve-1kQ3M0AJ.js";import"./CartesianAxis-BaEBZn5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BKFod4yn.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
