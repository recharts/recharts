import{e as t}from"./iframe-Y_RGNuVZ.js";import{R as n}from"./arrayEqualityCheck-Ds7SKd67.js";import{L as s}from"./LineChart-CViHTy2e.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B2Ca7ZOh.js";import{X as l}from"./XAxis-DOlhxeJx.js";import{R as v}from"./RechartsHookInspector-BaDAEILC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNDGD4av.js";import"./immer-CvMOMmfr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0AKdwcb0.js";import"./index-6zWqcpfE.js";import"./hooks-D-ukaKl5.js";import"./axisSelectors-B08StVJi.js";import"./d3-scale-xMg1wH9a.js";import"./zIndexSlice-Ba0CiZj_.js";import"./renderedTicksSlice-BNYNUWgh.js";import"./CartesianChart-tAchdUZG.js";import"./chartDataContext-DLrhoiOn.js";import"./CategoricalChart-xZ700W9g.js";import"./Layer-B3aEjvUI.js";import"./ReactUtils-DW9WQHfP.js";import"./Label-C7BzYfbz.js";import"./Text-2I-RPtH4.js";import"./DOMUtils-Cmq9iEnp.js";import"./ZIndexLayer-BkWVTcKj.js";import"./ActivePoints-M-0Nj2uW.js";import"./Dot-B6xO9r8i.js";import"./types-DUF6Oaqa.js";import"./RegisterGraphicalItemId-DQOzlEQV.js";import"./ErrorBarContext-D2MsqZ2g.js";import"./GraphicalItemClipPath-DV3rsVOw.js";import"./SetGraphicalItem-Cr3Eh_Ii.js";import"./useAnimationId-D3O-mVgt.js";import"./getRadiusAndStrokeWidthFromDot-BLOpOIfG.js";import"./ActiveShapeUtils-fVk6EKo1.js";import"./isPlainObject-1pSWT5Op.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr0T3_ga.js";import"./Trapezoid-52KgDugC.js";import"./Sector-NVf3Jf9G.js";import"./Symbols-BkK6C4o8.js";import"./symbol-CHniFcTm.js";import"./step-BeTRk8e6.js";import"./Curve-okqgdx-1.js";import"./CartesianAxis-UB1S8E_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Bw2HFO2T.js";import"./ChartSizeDimensions-Kjtp9_ay.js";import"./OffsetShower-X1duxMkd.js";import"./PlotAreaShower-C08ktU3-.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
