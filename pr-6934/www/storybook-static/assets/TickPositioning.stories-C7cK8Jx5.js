import{e as t}from"./iframe-CpBR2FD-.js";import{R as s}from"./arrayEqualityCheck-DfVEXElD.js";import{L as m}from"./LineChart-CXQFgYYL.js";import{L as c}from"./Line-CNjCQiDV.js";import{X as d}from"./XAxis-Cmud21dv.js";import{R as l}from"./RechartsHookInspector-C3421ru3.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DmMqjKPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CoeBe9ik.js";import"./hooks-DedpoqIJ.js";import"./axisSelectors-BrZ6G91_.js";import"./zIndexSlice-BCiKU99h.js";import"./CartesianChart-B1Icaiih.js";import"./chartDataContext-XtQC6I5E.js";import"./CategoricalChart-Bb8UD5I8.js";import"./Layer-DEK88535.js";import"./ReactUtils-VfTt9PFz.js";import"./Label-DWBk7fhM.js";import"./Text-Dhmw9EGu.js";import"./DOMUtils-BBsKE3Cz.js";import"./ZIndexLayer-fbfZmhXg.js";import"./ActivePoints-B3LyVgYO.js";import"./Dot-DiU-b5Rw.js";import"./types-D4KZK8k1.js";import"./RegisterGraphicalItemId-C5HCX42f.js";import"./ErrorBarContext-D_KmDbtZ.js";import"./GraphicalItemClipPath-VjF6EdyN.js";import"./SetGraphicalItem-BgcHabrg.js";import"./useAnimationId-CFZ1kX6W.js";import"./getRadiusAndStrokeWidthFromDot-Br3Pzfii.js";import"./ActiveShapeUtils-oHT1Tkw8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPCbtxXK.js";import"./Trapezoid-gv9uLae-.js";import"./Sector-UZPxualI.js";import"./Symbols-9dW_oll9.js";import"./Curve-DWHqQWsG.js";import"./CartesianAxis-DIWnau3l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Dknhq_uL.js";import"./ChartSizeDimensions-BjsHMoDH.js";import"./OffsetShower-D-sUEdFp.js";import"./PlotAreaShower-BP-Vy4Nm.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
