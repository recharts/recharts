import{e as t}from"./iframe-D4XW71qE.js";import{R as s}from"./arrayEqualityCheck-Ct0H2J7-.js";import{L as m}from"./LineChart-BpNlDtJ2.js";import{L as c}from"./Line-Ds1mFxVO.js";import{X as d}from"./XAxis-B7adFIe7.js";import{R as l}from"./RechartsHookInspector-9aXKf5pi.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0DDkfJP.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./zIndexSlice-DRfQm_zr.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./Layer-_WbjJ9WY.js";import"./ReactUtils-Dt1V4s2Z.js";import"./Label-B64y4UV8.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./ZIndexLayer-uUtlF8oG.js";import"./ActivePoints-Dec3rykj.js";import"./Dot-xgW2ThBu.js";import"./types-CVucT5VX.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./ErrorBarContext-CYBrSxT_.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./useAnimationId-BXlO72m4.js";import"./getRadiusAndStrokeWidthFromDot-CmN5e2Eb.js";import"./ActiveShapeUtils-BcGwy2uj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CSkUH-X3.js";import"./Trapezoid-BC7P1jMa.js";import"./Sector-AFsZXlCO.js";import"./Symbols-CZhPoTol.js";import"./Curve-BM6HUAhp.js";import"./CartesianAxis-8-c0TmU5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
