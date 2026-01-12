import{e as t}from"./iframe-DS-q9W3A.js";import{R as s}from"./arrayEqualityCheck-uWyKn9kd.js";import{L as m}from"./LineChart-Dqr3485h.js";import{L as c}from"./Line-CZlEDQOa.js";import{X as d}from"./XAxis-B6LMs64M.js";import{R as l}from"./RechartsHookInspector-BZrvl649.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DgJToWvf.js";import"./PolarUtils-COCiu7Zk.js";import"./RechartsWrapper-DIeOkYNI.js";import"./hooks-CZGKc29x.js";import"./axisSelectors-CEsznBop.js";import"./zIndexSlice-B8xvBtUi.js";import"./CartesianChart-BrZvalbT.js";import"./chartDataContext-CBbbKlpZ.js";import"./CategoricalChart-KA7oDakA.js";import"./Layer-DiJfTFFC.js";import"./ReactUtils-W1w-s9kx.js";import"./Label-C1I_KKaa.js";import"./Text-BKgeGCuD.js";import"./DOMUtils-BrAhpHFL.js";import"./ZIndexLayer-DOFsbkoZ.js";import"./ActivePoints-BgvnRHn_.js";import"./Dot-Bw_DwRx9.js";import"./types-COe7SjWu.js";import"./RegisterGraphicalItemId-taQunXs-.js";import"./ErrorBarContext-BpDrXqd4.js";import"./GraphicalItemClipPath-gv1wFvhy.js";import"./SetGraphicalItem-nVnJshTd.js";import"./useAnimationId-T15aFfwj.js";import"./getRadiusAndStrokeWidthFromDot-dgaMSbQl.js";import"./ActiveShapeUtils-BebX3teJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbmbV7wJ.js";import"./Trapezoid-Durh076j.js";import"./Sector-Dl9Lnkss.js";import"./Symbols-CinIOzBd.js";import"./Curve-MfRfs5dU.js";import"./CartesianAxis-X7LfxDL5.js";import"./index-BR8_Xxtj.js";import"./ChartSizeDimensions-DRXNeAaP.js";import"./OffsetShower-CYsEpPZo.js";import"./PlotAreaShower-Dt6Ccckl.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
