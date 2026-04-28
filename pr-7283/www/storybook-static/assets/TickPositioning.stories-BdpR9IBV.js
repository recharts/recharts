import{e as t}from"./iframe-Y_Pa4XUD.js";import{R as n}from"./arrayEqualityCheck-ufqgmavw.js";import{L as s}from"./LineChart-pVi02pZg.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DsGJIENB.js";import{X as l}from"./XAxis-Bv1vfoF0.js";import{R as v}from"./RechartsHookInspector-CoUZ_IKN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_hVYzQT.js";import"./immer-fIOXVJOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8CMlo1v.js";import"./index-BJNVUtSj.js";import"./hooks-CIr5CD4S.js";import"./axisSelectors-BmerCj2n.js";import"./d3-scale-ByVEmPR9.js";import"./zIndexSlice-CTCYCdxd.js";import"./renderedTicksSlice-CQWIZJ1K.js";import"./CartesianChart-Ds9j1WCi.js";import"./chartDataContext-DAoPlUXM.js";import"./CategoricalChart-C8vuTQEv.js";import"./Layer-Cvh40WqM.js";import"./ReactUtils-BE45q0BU.js";import"./Label-DoWUrSWO.js";import"./Text-mkkNE3Pk.js";import"./DOMUtils-DN2B9zoo.js";import"./ZIndexLayer-DHPXYj4K.js";import"./ActivePoints-_m6yHkUn.js";import"./Dot-C6EdxuDn.js";import"./types-CFzlQQ1s.js";import"./RegisterGraphicalItemId-BIRSR7Jx.js";import"./ErrorBarContext-Cb6v3AYw.js";import"./GraphicalItemClipPath-DMPCiQHF.js";import"./SetGraphicalItem-CCipA_FV.js";import"./useAnimationId-LxxsO2il.js";import"./getRadiusAndStrokeWidthFromDot-d_31bWzQ.js";import"./ActiveShapeUtils-DigOcqgk.js";import"./isPlainObject-CqaZa_wl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWx4TmVI.js";import"./Trapezoid-DRFbXSGQ.js";import"./Sector-NCqbNZMf.js";import"./Symbols-CsuZ3_sL.js";import"./symbol-DrAbyEPw.js";import"./step-B3cL9I-q.js";import"./Curve-BrfIxnDD.js";import"./CartesianAxis-DaCLeBFj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CPjVtjVX.js";import"./ChartSizeDimensions-Bp_T5Mu5.js";import"./OffsetShower-Bd96igZ1.js";import"./PlotAreaShower-DzHDy2_i.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
