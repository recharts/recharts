import{e as t}from"./iframe-_tOEOrTB.js";import{R as n}from"./arrayEqualityCheck-B2ATAN_K.js";import{L as s}from"./LineChart-CzYzsJ6j.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CSH30hMe.js";import{X as l}from"./XAxis-B99ydacs.js";import{R as v}from"./RechartsHookInspector-BgNu5TE0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-QC90EbHK.js";import"./immer-Ctu7T9Ma.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4fVc8pz.js";import"./index-C8IxNL1D.js";import"./hooks-Dxc4ftFI.js";import"./axisSelectors-C0eqwsIc.js";import"./d3-scale-BYOnugJI.js";import"./zIndexSlice-CWqmREsN.js";import"./renderedTicksSlice-C1VyvUnW.js";import"./CartesianChart-BdgakOV8.js";import"./chartDataContext-Cj00HDaN.js";import"./CategoricalChart-uPJQTpzY.js";import"./Layer-DKn_t_OY.js";import"./ReactUtils-D3WhBtDM.js";import"./Label-DY2hHCUB.js";import"./Text-CLhNqgF1.js";import"./DOMUtils-Dp_xH288.js";import"./ZIndexLayer-CgC8xk-g.js";import"./ActivePoints-UW1fO4V4.js";import"./Dot-MLQan19h.js";import"./types-0739cztl.js";import"./RegisterGraphicalItemId-Dse9b0HT.js";import"./ErrorBarContext-DwAJtrMz.js";import"./GraphicalItemClipPath-DkwW047q.js";import"./SetGraphicalItem-FaJmXbmv.js";import"./useAnimationId-x2-6Yyy0.js";import"./getRadiusAndStrokeWidthFromDot-DShwyyA4.js";import"./ActiveShapeUtils-XLBlJtUm.js";import"./isPlainObject-jyHTfG6K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-hCYFffPl.js";import"./Trapezoid-CqizPLb6.js";import"./Sector-Cruz6N8W.js";import"./Symbols-CXub2t2y.js";import"./symbol-BgrsGtcm.js";import"./step-rG5mhkUn.js";import"./Curve-BgKgFd6U.js";import"./CartesianAxis-DXWYS4eF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BRj_naI3.js";import"./ChartSizeDimensions-DuqOm4SH.js";import"./OffsetShower-BuTy_q5n.js";import"./PlotAreaShower-DHEJGydW.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
