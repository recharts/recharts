import{e as t}from"./iframe-DxZX8v3W.js";import{R as s}from"./arrayEqualityCheck-CHFkqTV_.js";import{L as m}from"./LineChart-Btq6VZCY.js";import{L as c}from"./Line-kMI0-8qe.js";import{X as d}from"./XAxis-DzPSb7qL.js";import{R as l}from"./RechartsHookInspector-EozXGI-d.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./Layer-BPZWkKY5.js";import"./ReactUtils-BR0ZodR6.js";import"./Label-DcVTU5jd.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./ZIndexLayer-u2cA8wLh.js";import"./ActivePoints-ChW3PNAb.js";import"./Dot-6gTSKkj_.js";import"./types-DXQoRjfG.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./ErrorBarContext-BbaI3C-C.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./useAnimationId-DTZHXicx.js";import"./getRadiusAndStrokeWidthFromDot-9yl6HY0F.js";import"./ActiveShapeUtils-umUGRO3f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZKdZP-LA.js";import"./Trapezoid-B8lDUleJ.js";import"./Sector-C4RYsjmR.js";import"./Symbols-ByPpWVp2.js";import"./Curve-amoMOh-y.js";import"./CartesianAxis-DPUMtDOy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
