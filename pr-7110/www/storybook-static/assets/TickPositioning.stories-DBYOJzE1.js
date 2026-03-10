import{e as t}from"./iframe-DbhhbAlo.js";import{R as n}from"./arrayEqualityCheck-Lx_TMjyu.js";import{L as s}from"./LineChart-9TYNzxzE.js";import{L as c}from"./Line-DU9DHTcH.js";import{X as d}from"./XAxis-DjIfDDta.js";import{R as l}from"./RechartsHookInspector-BSvxhUzi.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqjP-SJZ.js";import"./immer-CXubSzbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BqWeXDcR.js";import"./index-bP3uccvR.js";import"./hooks-rkaChWzj.js";import"./axisSelectors-CG6dK3nK.js";import"./d3-scale-CD7WeVUs.js";import"./zIndexSlice-tEJEPfMp.js";import"./renderedTicksSlice-Br_sCV6u.js";import"./CartesianChart-2XwRf_I_.js";import"./chartDataContext-BjOOHIMo.js";import"./CategoricalChart-lS70JkQC.js";import"./Layer-BLRPCKMQ.js";import"./ReactUtils-DlRYbFyy.js";import"./Label-BD-AsMTb.js";import"./Text-9tx7qVgJ.js";import"./DOMUtils-CxI3YG9P.js";import"./ZIndexLayer-BXjMifaG.js";import"./ActivePoints-DtxAI_Pv.js";import"./Dot-CgUaw4tF.js";import"./types-DCl9eSsv.js";import"./RegisterGraphicalItemId-CiV8HnYd.js";import"./ErrorBarContext-8lDTik7_.js";import"./GraphicalItemClipPath-Bl8bx72_.js";import"./SetGraphicalItem-CKtT4vYj.js";import"./useAnimationId-CLYn9ysU.js";import"./getRadiusAndStrokeWidthFromDot-CIAhrogS.js";import"./ActiveShapeUtils-BiQ2ESb_.js";import"./isPlainObject-D743ttwB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIGKSdSo.js";import"./Trapezoid-okY0yamA.js";import"./Sector-C3VJLfsw.js";import"./Symbols-C4vV8xjD.js";import"./symbol-PPpy3bVe.js";import"./step-B3CTsvyi.js";import"./Curve-Dxoto--N.js";import"./CartesianAxis-DOxCqOnp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BEJpunbk.js";import"./ChartSizeDimensions-BHCR1SDL.js";import"./OffsetShower-D8NGzvq1.js";import"./PlotAreaShower-CmMEUx8D.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
