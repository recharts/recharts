import{e as t}from"./iframe-CUlKjRv5.js";import{g as n}from"./arrayEqualityCheck-DBgCs58d.js";import{L as s}from"./LineChart-oDChAur2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CA-fClkz.js";import{X as l}from"./XAxis-CO_kz_i5.js";import{R as v}from"./RechartsHookInspector-DIUnr0hb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_1GgMiat.js";import"./immer-DSTsi-PZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./zIndexSlice-ygbvIPwo.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./Layer-BRPUehgK.js";import"./ReactUtils-Dhd-bIVM.js";import"./Label-CsCoT34Y.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./ZIndexLayer-Dzag2pwA.js";import"./ActivePoints-CrLAHFM3.js";import"./Dot-Cv9C9-P8.js";import"./types-cseKagnM.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./ErrorBarContext-CXV3xnHJ.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./useAnimationId-527k5CUF.js";import"./getRadiusAndStrokeWidthFromDot-CsjgyuMP.js";import"./ActiveShapeUtils-6qGjBTVG.js";import"./isPlainObject-D3iLjTkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BeDuyTKv.js";import"./Trapezoid-Bhuw_sBY.js";import"./Sector-DGUTJhGS.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";import"./step-ndBpbuBv.js";import"./Curve-Dj9MPAvc.js";import"./CartesianAxis-BeQQMY3-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
