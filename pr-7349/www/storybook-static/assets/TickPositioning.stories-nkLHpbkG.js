import{e as t}from"./iframe-8-kjzB7M.js";import{g as m}from"./arrayEqualityCheck-BFH1E3k_.js";import{L as s}from"./LineChart-CfV8y1rm.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CGldzIuh.js";import{X as l}from"./XAxis-D2S2cmnw.js";import{R as v}from"./RechartsHookInspector-CM7h1fuc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DEBbAbU8.js";import"./immer-DyK63VIN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7ei5y6q.js";import"./index-B7HOuyLw.js";import"./hooks-D7HTiiCO.js";import"./axisSelectors-BNYuZguV.js";import"./d3-scale-CQtZ6VlM.js";import"./zIndexSlice-RoK7gDNz.js";import"./renderedTicksSlice-B1hkz5RK.js";import"./CartesianChart-DIcUCgdK.js";import"./chartDataContext-B5w2WfFE.js";import"./CategoricalChart-BSYInFMU.js";import"./Curve-D8ZMrIKx.js";import"./types-BtLx_F1t.js";import"./step-BPajIDVN.js";import"./path-DyVhHtw_.js";import"./Layer-CzqQGym9.js";import"./ReactUtils-CewVIgMM.js";import"./Label-DM3VCT7K.js";import"./Text-CoxxW3ZN.js";import"./DOMUtils-DlGm6rgl.js";import"./ZIndexLayer-BFtzmC6W.js";import"./ActivePoints-B6bRCrz9.js";import"./Dot-kp7349vp.js";import"./RegisterGraphicalItemId-CmJN5Y2e.js";import"./ErrorBarContext-DcV-oeSm.js";import"./GraphicalItemClipPath-CVE49Uj3.js";import"./SetGraphicalItem-DKHyStui.js";import"./useAnimationId-R2tEawoj.js";import"./getRadiusAndStrokeWidthFromDot-DEvwWVK6.js";import"./ActiveShapeUtils-B64sWmQr.js";import"./isPlainObject-Dd1Ki_ZE.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianAxis-CXWQlOps.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DmSQVuHS.js";import"./ChartSizeDimensions-C53bqH85.js";import"./OffsetShower-Ba6R23wJ.js";import"./PlotAreaShower-mh0ASj0Y.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ct=["TickPositioning"];export{r as TickPositioning,ct as __namedExportsOrder,st as default};
