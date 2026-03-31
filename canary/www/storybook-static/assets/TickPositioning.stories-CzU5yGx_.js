import{e as t}from"./iframe-vUL-L_aJ.js";import{R as n}from"./arrayEqualityCheck-COxCNyPK.js";import{L as s}from"./LineChart-BeWJ-_y4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DsQcjQwj.js";import{X as l}from"./XAxis-BMYosvSp.js";import{R as v}from"./RechartsHookInspector-CWBwyRFX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C8rpue-w.js";import"./immer-BVp8bXPB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CG_OUpDm.js";import"./index-BdR1gVmI.js";import"./hooks-yjZ0j-0_.js";import"./axisSelectors-CUzNHzdL.js";import"./d3-scale-DD2Sx1-d.js";import"./zIndexSlice-K47YJD8k.js";import"./renderedTicksSlice-CDeFkEV6.js";import"./CartesianChart-BY4kTu9-.js";import"./chartDataContext-BHVW1DWn.js";import"./CategoricalChart-C_yJwLRG.js";import"./Layer-Dux9G07m.js";import"./ReactUtils-B3mcMybl.js";import"./Label-C4rHqw7t.js";import"./Text-CzUGJ8je.js";import"./DOMUtils-CvmeQvzc.js";import"./ZIndexLayer-Cr3lCUTq.js";import"./ActivePoints-QOVXqPsr.js";import"./Dot-CikDQJLR.js";import"./types-5KBfjt4C.js";import"./RegisterGraphicalItemId-sesVzteN.js";import"./ErrorBarContext-BI53r7fn.js";import"./GraphicalItemClipPath-D84XG9Hf.js";import"./SetGraphicalItem-DiqKS2xX.js";import"./useAnimationId-DLI5pxxS.js";import"./getRadiusAndStrokeWidthFromDot-BEMpaDjp.js";import"./ActiveShapeUtils-D_EuKoYs.js";import"./isPlainObject-B2pB2xQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TKYWYM.js";import"./Trapezoid-CJp4NMn-.js";import"./Sector-ztmOwzQz.js";import"./Symbols-DfP23eLB.js";import"./symbol-DFtJsCUW.js";import"./step-DT_l3LWo.js";import"./Curve-Cj7OHreQ.js";import"./CartesianAxis-C5gNDMzm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CdQg9v03.js";import"./ChartSizeDimensions-MpUtdPem.js";import"./OffsetShower-CNEUWUv0.js";import"./PlotAreaShower-Xh3uZCwl.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
