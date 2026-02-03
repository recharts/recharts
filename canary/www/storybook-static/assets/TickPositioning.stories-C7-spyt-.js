import{e as t}from"./iframe-DPPC5LCd.js";import{R as s}from"./arrayEqualityCheck-Dvk8KT0D.js";import{L as m}from"./LineChart-D0oDf0o6.js";import{L as c}from"./Line-Df8hhM8R.js";import{X as d}from"./XAxis-BG2Y_xwU.js";import{R as l}from"./RechartsHookInspector-Blp8PL-4.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-PEDxF674.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./zIndexSlice-Cyke5ZAj.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./Layer-l1Ju_rpU.js";import"./ReactUtils-Dpo3QY29.js";import"./Label-CyOEca1T.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./ZIndexLayer-BYs5zm3k.js";import"./ActivePoints-bzJzis_r.js";import"./Dot-DGBsmHFR.js";import"./types-BtZeuRvc.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./ErrorBarContext-DOTmmgqX.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./useAnimationId-BL1JszpL.js";import"./getRadiusAndStrokeWidthFromDot-r3LToZRM.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdGsT6u6.js";import"./Trapezoid-BQbcDxOL.js";import"./Sector-6q_tG2Nj.js";import"./Symbols-BVjVO6PI.js";import"./Curve-Bys-PvMV.js";import"./CartesianAxis-CbeAAhwj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
