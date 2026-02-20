import{e as t}from"./iframe-B4ZOa_Yu.js";import{R as n}from"./arrayEqualityCheck-C7qm6m5x.js";import{L as s}from"./LineChart-CvAGD2_M.js";import{L as c}from"./Line-C2tunPhG.js";import{X as d}from"./XAxis-Ds-wBXG3.js";import{R as l}from"./RechartsHookInspector-D8rerupA.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DcaNso53.js";import"./immer-B05rlcy5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B66RMWp1.js";import"./index-DBSwNlxD.js";import"./hooks-BoWukVEP.js";import"./axisSelectors-CUTvv79j.js";import"./d3-scale-xF4QVF1U.js";import"./zIndexSlice-L-52L8l2.js";import"./renderedTicksSlice-BHPoCGKs.js";import"./CartesianChart-Dq-7HfpP.js";import"./chartDataContext-CeyVK9Tw.js";import"./CategoricalChart-CIWpFNpg.js";import"./Layer-D8UY7UMK.js";import"./ReactUtils-upui8jKZ.js";import"./Label-CDxkI7IB.js";import"./Text-RCR9lAA9.js";import"./DOMUtils-WUmSdG9_.js";import"./ZIndexLayer-DJVNNdtG.js";import"./ActivePoints-DrOeuumg.js";import"./Dot-C8akGE8Z.js";import"./types-Cvz57JP2.js";import"./RegisterGraphicalItemId-DSbtEDT7.js";import"./ErrorBarContext-CqZUOVMv.js";import"./GraphicalItemClipPath-DUfb3-iB.js";import"./SetGraphicalItem-DHjcaBbG.js";import"./useAnimationId-BoXeTLIY.js";import"./getRadiusAndStrokeWidthFromDot-CUYccmbg.js";import"./ActiveShapeUtils-t1m8X5yO.js";import"./isPlainObject-CdRNPTy1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-qe02Stpb.js";import"./Trapezoid-C5xqhjGS.js";import"./Sector-DG-V-cIW.js";import"./Symbols-aoMnmAhk.js";import"./symbol-ClQQoX6e.js";import"./step-bVfLcMGZ.js";import"./Curve-BSyKD1Ot.js";import"./CartesianAxis-CCuPeB1h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-C8tftqM8.js";import"./ChartSizeDimensions-CgbdMiCv.js";import"./OffsetShower-z8r0Gugh.js";import"./PlotAreaShower-CPk3ggQs.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
