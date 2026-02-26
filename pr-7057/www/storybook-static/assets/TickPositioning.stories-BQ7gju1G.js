import{e as t}from"./iframe-6geHM4bd.js";import{R as n}from"./arrayEqualityCheck-Bhk4eC6b.js";import{L as s}from"./LineChart-7HpR_HHs.js";import{L as c}from"./Line-jU53A7NC.js";import{X as d}from"./XAxis-enChBe_S.js";import{R as l}from"./RechartsHookInspector-DIMVuZhQ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./immer-BHDsl4Gi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CT-ler3b.js";import"./index-BthKVvnl.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./zIndexSlice-DbqCu4eM.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./Layer-AOnBAVLr.js";import"./ReactUtils-DLbKFm0I.js";import"./Label-eYApNfXX.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./ZIndexLayer-D_4fvMt1.js";import"./ActivePoints-BxYhIeKT.js";import"./Dot-CxbLLsp7.js";import"./types-BNIhqt2v.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./ErrorBarContext-D0w-EAob.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./useAnimationId-RNAT_shg.js";import"./getRadiusAndStrokeWidthFromDot-nLQDjczC.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Upynic_t.js";import"./Trapezoid-COJp5Zhq.js";import"./Sector-xROucIrP.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./step-DQP9UvLT.js";import"./Curve-CQuCDB0y.js";import"./CartesianAxis-BqFoQr74.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-W9fTJ1Ap.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
