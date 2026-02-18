import{e as t}from"./iframe-C8rrCX6B.js";import{R as m}from"./arrayEqualityCheck-B6s-2qWd.js";import{L as s}from"./LineChart-Dmpx4URL.js";import{L as c}from"./Line-DM-WQoT-.js";import{X as d}from"./XAxis-B3LhdJHC.js";import{R as l}from"./RechartsHookInspector-CRTByZl4.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./zIndexSlice-Df3dbiIE.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./CartesianChart-ZPTdsj2m.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./Layer-D1v-1P4s.js";import"./ReactUtils-B6XfFwTE.js";import"./Label-pD9QpgDQ.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./ZIndexLayer-DFkgVZys.js";import"./ActivePoints-CU11Dyyf.js";import"./Dot-DdOaoll5.js";import"./types-DDBoPPlm.js";import"./RegisterGraphicalItemId-vQCUHIAP.js";import"./ErrorBarContext-CHadBikd.js";import"./GraphicalItemClipPath-BqvBTWAt.js";import"./SetGraphicalItem-CAPB5Ckj.js";import"./useAnimationId-CljxjOmY.js";import"./getRadiusAndStrokeWidthFromDot-DaHGSsSR.js";import"./ActiveShapeUtils-BVoBh-mr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk1pBm8g.js";import"./Trapezoid-8D3XkRpf.js";import"./Sector-Doajdj9m.js";import"./Symbols-CojuA_dk.js";import"./Curve-ckN9X3mA.js";import"./CartesianAxis-B58JFruC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CVthgwiF.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
