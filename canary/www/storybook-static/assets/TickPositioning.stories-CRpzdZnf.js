import{e as t}from"./iframe-uVZDwAjj.js";import{R as n}from"./arrayEqualityCheck-BVLp_fP4.js";import{L as s}from"./LineChart-CwqTP8jY.js";import{L as c}from"./Line-C4f_JiI9.js";import{X as d}from"./XAxis-DDi_F3ms.js";import{R as l}from"./RechartsHookInspector-B8IZQaM2.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./immer-ChwPqFH_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./Layer-kSeehgUS.js";import"./ReactUtils-CdVDZBtJ.js";import"./Label-PDV3rnUf.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./ZIndexLayer-B6kXppYb.js";import"./ActivePoints-DaG8bHlJ.js";import"./Dot-DIb3YsWy.js";import"./types-B-Xhkkhb.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./ErrorBarContext-yNZJHACW.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./useAnimationId-CLB64h0U.js";import"./getRadiusAndStrokeWidthFromDot-ClrcQxIA.js";import"./ActiveShapeUtils-DdtpNjHl.js";import"./isPlainObject-DmqrNdKc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-GgKpEWLk.js";import"./Trapezoid-B50tZYZr.js";import"./Sector-CYoBZdRL.js";import"./Symbols-DYdrpw_H.js";import"./symbol-D_mOxO35.js";import"./step-Prvlnfgp.js";import"./Curve-BRxcZY_5.js";import"./CartesianAxis-D-nGvafv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
