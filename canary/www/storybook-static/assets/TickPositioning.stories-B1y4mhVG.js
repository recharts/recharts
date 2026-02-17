import{e as t}from"./iframe-BekWtzeP.js";import{R as m}from"./arrayEqualityCheck-Dex07G1y.js";import{L as s}from"./LineChart-Bc6Oegcb.js";import{L as c}from"./Line-D0dttAr6.js";import{X as d}from"./XAxis-BaakOQmt.js";import{R as l}from"./RechartsHookInspector-DYfLD4ov.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DM_sVtnW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLym1DZ5.js";import"./hooks-M7JbNACE.js";import"./axisSelectors-dkELBwuo.js";import"./zIndexSlice-C6dUOqXj.js";import"./renderedTicksSlice-Cs1v0Weq.js";import"./CartesianChart-DBKl6El9.js";import"./chartDataContext-DIse9eKf.js";import"./CategoricalChart-DjOHDvdh.js";import"./Layer-Bfyqa5-M.js";import"./ReactUtils-V0CtXr9z.js";import"./Label-Co8l3-0E.js";import"./Text-GqnKFCwL.js";import"./DOMUtils-BX7aw3nI.js";import"./ZIndexLayer-BEmVcKyp.js";import"./ActivePoints-ECHEl66Y.js";import"./Dot-DROJJWRy.js";import"./types-BAUrPFwC.js";import"./RegisterGraphicalItemId-DBrxdiVv.js";import"./ErrorBarContext-erPuSmOq.js";import"./GraphicalItemClipPath-CbuKIejK.js";import"./SetGraphicalItem-COH5jwOQ.js";import"./useAnimationId-BhuDd99U.js";import"./getRadiusAndStrokeWidthFromDot-u9pmLcPC.js";import"./ActiveShapeUtils-DEhZs-Ax.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BI0WfAac.js";import"./Trapezoid-BGCarJJl.js";import"./Sector-B9JgPSGu.js";import"./Symbols-CsDFwuaA.js";import"./Curve-DNeihdYA.js";import"./CartesianAxis-CVhNrsBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D7stEGDS.js";import"./ChartSizeDimensions-BIF9SI6Q.js";import"./OffsetShower-BzXSvdvm.js";import"./PlotAreaShower-fI9VNU4p.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,nt as default};
