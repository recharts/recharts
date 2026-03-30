import{e as t}from"./iframe-DggZKTRy.js";import{R as n}from"./arrayEqualityCheck-DnZLtMf6.js";import{L as s}from"./LineChart-nUo-bpQw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-02UcdPyY.js";import{X as l}from"./XAxis-Dbhs6mKo.js";import{R as v}from"./RechartsHookInspector-DY7Qg7TT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXkRukFF.js";import"./immer-DqkR2i4r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./Layer-BuKRQch4.js";import"./ReactUtils-D9Ez5HAk.js";import"./Label-Dxk2zJHG.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./ZIndexLayer-D85cG2g2.js";import"./ActivePoints-DUFygyVE.js";import"./Dot-9vL981FZ.js";import"./types-CBaBaM7i.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./ErrorBarContext-YFVjhS9M.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./useAnimationId-C-Fijf5f.js";import"./getRadiusAndStrokeWidthFromDot-CUJVymlV.js";import"./ActiveShapeUtils-DDWUau3o.js";import"./isPlainObject-CasrDXFD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-mU1cjLaJ.js";import"./Trapezoid-CpShvAQC.js";import"./Sector-BKRhbQqJ.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";import"./step-IN4trDru.js";import"./Curve-DpzeZUSQ.js";import"./CartesianAxis-BXbHKKX1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./OffsetShower-C9Cav-aa.js";import"./PlotAreaShower-t65TdSVB.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
