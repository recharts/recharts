import{e as t}from"./iframe-7yPApSvt.js";import{R as s}from"./arrayEqualityCheck-BRhf3SEW.js";import{L as m}from"./LineChart-BkCPChyr.js";import{L as c}from"./Line-CZDjkSNR.js";import{X as d}from"./XAxis-D9IId5KY.js";import{R as l}from"./RechartsHookInspector-BsW7gU1Y.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuUb30Xi.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./Layer-uYiMe6t4.js";import"./ReactUtils-C9q2a11f.js";import"./Label-DRJZdylN.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./ActivePoints-CY8-2aZT.js";import"./Dot-CTXw21tK.js";import"./types-OVAUyZ3J.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./ErrorBarContext-DG4gMx-N.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./useAnimationId-DZFmgCE1.js";import"./getRadiusAndStrokeWidthFromDot-C3lHqLdB.js";import"./ActiveShapeUtils-CcCS4fKT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-VDS0PGUg.js";import"./Trapezoid-CDa1-n6T.js";import"./Sector-B6puIsbo.js";import"./Symbols-Cj90JcMH.js";import"./Curve-DU3LHYbT.js";import"./CartesianAxis-bgrWTzp1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CTyUbB7m.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
