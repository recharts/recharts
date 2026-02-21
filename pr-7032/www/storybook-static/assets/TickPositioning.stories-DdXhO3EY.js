import{e as t}from"./iframe-_bxOXoO9.js";import{R as n}from"./arrayEqualityCheck-B7kPjOe4.js";import{L as s}from"./LineChart-CnMGQpU6.js";import{L as c}from"./Line-CEP2Y-ve.js";import{X as d}from"./XAxis-B25iHqjD.js";import{R as l}from"./RechartsHookInspector-CQ4RIQ5B.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D0m7DKS7.js";import"./immer-4xgaWIU1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLtRnOh5.js";import"./index-BFgxmFq6.js";import"./hooks-Cyo7uYKI.js";import"./axisSelectors-BABYG139.js";import"./d3-scale-CMcXs8cL.js";import"./zIndexSlice-YmRlXVtY.js";import"./renderedTicksSlice-BhRx_d4S.js";import"./CartesianChart-BeL_fJ-U.js";import"./chartDataContext-CdQCRTNV.js";import"./CategoricalChart-5uJ4ezdK.js";import"./Layer-B4OQX5mX.js";import"./ReactUtils-BFPf_n2z.js";import"./Label-puZUAwbJ.js";import"./Text-BcYFtKsN.js";import"./DOMUtils-MxvGotSE.js";import"./ZIndexLayer-B8XFMXb9.js";import"./ActivePoints-C_CIVq-A.js";import"./Dot-CDhDmUCL.js";import"./types-CaD-AAbb.js";import"./RegisterGraphicalItemId-CTB49Iya.js";import"./ErrorBarContext-3ohsNMPc.js";import"./GraphicalItemClipPath-5qnulUvK.js";import"./SetGraphicalItem-BJ4aCabI.js";import"./useAnimationId-CniUVvXd.js";import"./getRadiusAndStrokeWidthFromDot-ZajgNGGY.js";import"./ActiveShapeUtils-DYBOuNOh.js";import"./isPlainObject-NBybHA4D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaX2mvZh.js";import"./Trapezoid-D0RHyHyZ.js";import"./Sector-Dr45uA-k.js";import"./Symbols-DC5bGOMu.js";import"./symbol-B3FMMLJa.js";import"./step-eq8OAlUh.js";import"./Curve-lVDO4rto.js";import"./CartesianAxis-B0aXIuqq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D6dEx3op.js";import"./ChartSizeDimensions-DiDEOzCF.js";import"./OffsetShower-DtnIakTn.js";import"./PlotAreaShower-BaYMr28N.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
