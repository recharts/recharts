import{e as t}from"./iframe-CCtdbun4.js";import{R as n}from"./arrayEqualityCheck-BN-qRjNh.js";import{L as s}from"./LineChart-D0X11IqK.js";import{L as c}from"./Line-DI439emv.js";import{X as d}from"./XAxis-Ct1i4Wo3.js";import{R as l}from"./RechartsHookInspector-nkQJYVm3.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cu5xR3IA.js";import"./immer-BcxcW3su.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEuf5fH-.js";import"./index-DBCQ_ffx.js";import"./hooks-DXcbfnOk.js";import"./axisSelectors-BomcgeiZ.js";import"./d3-scale-CwYvmJNK.js";import"./zIndexSlice-DX2GAYEt.js";import"./renderedTicksSlice-iuxiofvQ.js";import"./CartesianChart-rX1ISTKc.js";import"./chartDataContext-D9BGjOgR.js";import"./CategoricalChart-ozbpSDhd.js";import"./Layer-De9fsiqG.js";import"./ReactUtils-DmviycaL.js";import"./Label-B5ApX3Ma.js";import"./Text-BxEo2MUu.js";import"./DOMUtils-DqJTy59P.js";import"./ZIndexLayer-i87njMD3.js";import"./ActivePoints-BkjKkFoX.js";import"./Dot-DR26Huk-.js";import"./types-W2NqahI8.js";import"./RegisterGraphicalItemId-BxjxRH6l.js";import"./ErrorBarContext-ANthrryL.js";import"./GraphicalItemClipPath-CUfY08eo.js";import"./SetGraphicalItem-CHU7mth4.js";import"./useAnimationId-Dw71NoSQ.js";import"./getRadiusAndStrokeWidthFromDot-tQsEHpRr.js";import"./ActiveShapeUtils-DrfPmOEF.js";import"./isPlainObject-Cvg7OzPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkQFoQU0.js";import"./Trapezoid-BDAKKZ25.js";import"./Sector-DD0LTKZr.js";import"./Symbols-C_90O_d8.js";import"./symbol-B6Bw4Roa.js";import"./step-axPf2-sT.js";import"./Curve-Bg-TKsWy.js";import"./CartesianAxis-DjTpORWb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BAcfBBrr.js";import"./ChartSizeDimensions-BH1EyVxm.js";import"./OffsetShower-WQ852gw6.js";import"./PlotAreaShower-B-YpjWsE.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
