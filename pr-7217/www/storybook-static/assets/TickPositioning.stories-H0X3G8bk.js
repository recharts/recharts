import{e as t}from"./iframe-BM7P_3hj.js";import{R as n}from"./arrayEqualityCheck-Bmgq3ZTz.js";import{L as s}from"./LineChart-Cu7zoUR2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CHs41JOZ.js";import{X as l}from"./XAxis-C_LpUhcR.js";import{R as v}from"./RechartsHookInspector-DIlL8ISE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZ0zKn9L.js";import"./immer-D-2u7HXy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8tVHnOf.js";import"./index-Xlum1YFK.js";import"./hooks-BY0xPmaj.js";import"./axisSelectors-Dx6sVhYx.js";import"./d3-scale-B0w3FH9e.js";import"./zIndexSlice-jDjA289q.js";import"./renderedTicksSlice-DVjCr-Qu.js";import"./CartesianChart-Be0mgfMK.js";import"./chartDataContext-CJ-F_waf.js";import"./CategoricalChart-CRvKBBfd.js";import"./Layer-C6LffHMU.js";import"./ReactUtils-DyDnYFSa.js";import"./Label-BQD1_uHZ.js";import"./Text-CQ7mU3s7.js";import"./DOMUtils-DrlqJZq7.js";import"./ZIndexLayer-D7eOOyk7.js";import"./ActivePoints-CM_0l3Rg.js";import"./Dot-C4-mkX5o.js";import"./types-o-wQVJEv.js";import"./RegisterGraphicalItemId-B3DF5B-x.js";import"./ErrorBarContext-8JrkuwkP.js";import"./GraphicalItemClipPath-DJd9bIYV.js";import"./SetGraphicalItem-BjV3tQT1.js";import"./useAnimationId-CDf7Yg_k.js";import"./getRadiusAndStrokeWidthFromDot-BxdGbl3w.js";import"./ActiveShapeUtils-CpIbOFBd.js";import"./isPlainObject-D_XY9Qvh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-UEK_zsFS.js";import"./Trapezoid-tkh2Io-M.js";import"./Sector-B2gfW0gr.js";import"./Symbols-PsAIzTU_.js";import"./symbol-BXNRxpVN.js";import"./step-DyBB5gGy.js";import"./Curve-CqITwbJh.js";import"./CartesianAxis-BrBA7Fo6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BpI1Zh7a.js";import"./ChartSizeDimensions-75IDTK2b.js";import"./OffsetShower-BvXPFVVi.js";import"./PlotAreaShower-Cu3BCYLx.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
