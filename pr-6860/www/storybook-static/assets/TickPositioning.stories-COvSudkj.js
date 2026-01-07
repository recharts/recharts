import{e as t}from"./iframe-Cr3T7ZdA.js";import{R as s}from"./arrayEqualityCheck-DqF1T4jr.js";import{L as m}from"./LineChart-D55KAf0D.js";import{L as c}from"./Line-CLdKLaES.js";import{X as d}from"./XAxis-DBNHDh11.js";import{R as l}from"./RechartsHookInspector-ClBCFl3l.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-QfAcHL3W.js";import"./PolarUtils-Bmm-pqPZ.js";import"./RechartsWrapper-Cofc_HNc.js";import"./hooks-jzijfY0b.js";import"./axisSelectors-DxNzAaef.js";import"./zIndexSlice-DMIprIZ-.js";import"./CartesianChart-BU0IfpuH.js";import"./chartDataContext-DYJ71PQb.js";import"./CategoricalChart-BUJ2-En9.js";import"./Layer-BFmFB8To.js";import"./ReactUtils-DZO-5FXB.js";import"./Label-DztQJaU2.js";import"./Text-DbGQ3XiU.js";import"./DOMUtils-zL1z85r6.js";import"./ZIndexLayer-CX1hwCrz.js";import"./ActivePoints-BdPSsFnL.js";import"./Dot-6-wh7CsL.js";import"./types-CSmgv1ek.js";import"./RegisterGraphicalItemId-IPVqF7Vn.js";import"./ErrorBarContext-BW79uC4e.js";import"./GraphicalItemClipPath-ChnTD72G.js";import"./SetGraphicalItem-CtAyZH4_.js";import"./useAnimationId-2lKqmsIN.js";import"./getRadiusAndStrokeWidthFromDot-BaVzfpDE.js";import"./ActiveShapeUtils-DPbFIg-T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrfuL_Gq.js";import"./Trapezoid-BeG4Metg.js";import"./Sector-CoMH23ZQ.js";import"./Symbols-DxVRzyBt.js";import"./Curve-vdkFq02R.js";import"./CartesianAxis-CSlwZ6TK.js";import"./index-ClJsMHvI.js";import"./ChartSizeDimensions-BmiXy0Af.js";import"./OffsetShower-SLhoxg8F.js";import"./PlotAreaShower-CKe-EEVm.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
