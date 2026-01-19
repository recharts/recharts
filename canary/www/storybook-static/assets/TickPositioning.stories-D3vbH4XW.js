import{e as t}from"./iframe-BfEeuf29.js";import{R as s}from"./arrayEqualityCheck-CQTYn8oK.js";import{L as m}from"./LineChart-cMAhXrDE.js";import{L as c}from"./Line-BeWiuKbx.js";import{X as d}from"./XAxis-DCok0cmX.js";import{R as l}from"./RechartsHookInspector-CaAU2h8E.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./PolarUtils-B3A4Bn44.js";import"./RechartsWrapper-DsA4AxRI.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./zIndexSlice-DJbSQN7A.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./Layer-WUPrCNhO.js";import"./ReactUtils-Dy1dqhtA.js";import"./Label-BQL_xh_a.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./ZIndexLayer-nNaEVjlH.js";import"./ActivePoints-BLQCmbLM.js";import"./Dot-CJLw0pnw.js";import"./types-B9h6Osdn.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./ErrorBarContext-D7bWjwna.js";import"./GraphicalItemClipPath-BkoIn00V.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./useAnimationId-593qmaql.js";import"./getRadiusAndStrokeWidthFromDot-7aN4YOPs.js";import"./ActiveShapeUtils-DAJHbM11.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLgB_eL-.js";import"./Trapezoid-D5AU_-Tp.js";import"./Sector-Bpai8LVK.js";import"./Symbols-DTph50Q3.js";import"./Curve-QDibvidp.js";import"./CartesianAxis-D11Z6FnG.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
