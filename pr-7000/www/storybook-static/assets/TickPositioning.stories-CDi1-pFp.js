import{e as t}from"./iframe-CFT77Gxv.js";import{R as s}from"./arrayEqualityCheck-D0woyLdN.js";import{L as m}from"./LineChart-tABi97in.js";import{L as c}from"./Line-CEYHVSem.js";import{X as d}from"./XAxis-iSjPfIVk.js";import{R as l}from"./RechartsHookInspector-BcoRzUX4.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfLi8adI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C06tio3K.js";import"./hooks-yAz6J_Nf.js";import"./axisSelectors-DOMws57m.js";import"./zIndexSlice-Czz78II2.js";import"./CartesianChart-8phVSf5K.js";import"./chartDataContext-yQ3flajw.js";import"./CategoricalChart-BnvwGt9I.js";import"./Layer-MeOR0S7X.js";import"./ReactUtils-BfhnJY8u.js";import"./Label-BG9DvreX.js";import"./Text-Bq7B7F5n.js";import"./DOMUtils-DtvoLBHD.js";import"./ZIndexLayer-uKRagXxd.js";import"./ActivePoints-CpG8Wxyr.js";import"./Dot-DdlNMwed.js";import"./types-CpsEOU-X.js";import"./RegisterGraphicalItemId-C7MUsBLo.js";import"./ErrorBarContext-TG4W3Nt0.js";import"./GraphicalItemClipPath-hpTG4Orq.js";import"./SetGraphicalItem-Bnzd430s.js";import"./useAnimationId-DgcLlBvC.js";import"./getRadiusAndStrokeWidthFromDot-dEU-vJCv.js";import"./ActiveShapeUtils-CyY8Lu1y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxDot7kp.js";import"./Trapezoid-DpyS5tZu.js";import"./Sector-DYvzTYWt.js";import"./Symbols-Cng0_jSU.js";import"./Curve-D6lAkyMf.js";import"./CartesianAxis-BbU1esix.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-9FfrM9hg.js";import"./ChartSizeDimensions-DP7onZPk.js";import"./OffsetShower-BQl_FUQS.js";import"./PlotAreaShower-kI7aZSrk.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
