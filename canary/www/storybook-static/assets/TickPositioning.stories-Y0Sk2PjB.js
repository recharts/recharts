import{e as t}from"./iframe-E6stEF2S.js";import{R as s}from"./arrayEqualityCheck-CwuTMurj.js";import{L as m}from"./LineChart-C1Ee3c1G.js";import{L as c}from"./Line-DCeOoju3.js";import{X as d}from"./XAxis-Bwrfz7AR.js";import{R as l}from"./RechartsHookInspector-DWDZSsYq.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpBS-wta.js";import"./PolarUtils-BcxrLtWd.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./zIndexSlice-DWahER7A.js";import"./CartesianChart-BDrQ5wVQ.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./Layer-BegbPFb9.js";import"./ReactUtils-ofTPTzz1.js";import"./Label-rhvib36b.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./ActivePoints-D2kK9Clq.js";import"./Dot-DgZWwon8.js";import"./types-FSWLiQQw.js";import"./RegisterGraphicalItemId-RdaYGkCK.js";import"./ErrorBarContext-C4-NhtXv.js";import"./GraphicalItemClipPath-D7GqE0xr.js";import"./SetGraphicalItem-CJIPhBZp.js";import"./useAnimationId-jacrtTCV.js";import"./getRadiusAndStrokeWidthFromDot-Clffww7b.js";import"./ActiveShapeUtils-vlVDSwIy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJCClTE6.js";import"./Trapezoid-BRnSAzjS.js";import"./Sector-DQ6bsa91.js";import"./Symbols-BofiGE9Z.js";import"./Curve-CjjQKwtg.js";import"./CartesianAxis-Ji6qmxj-.js";import"./index-D_N7o97v.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
