import{e as t}from"./iframe-CtEwCT9X.js";import{R as s}from"./arrayEqualityCheck-H3JWu4Kp.js";import{L as m}from"./LineChart-CAxR_FLF.js";import{L as c}from"./Line-EbUlvgbk.js";import{X as d}from"./XAxis-Dyu1KvxF.js";import{R as l}from"./RechartsHookInspector-DzvPF_wD.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D4rIxQ8x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AnHxT7w4.js";import"./hooks-rcQ-gxvj.js";import"./axisSelectors-CLqmQnll.js";import"./zIndexSlice-C0NscEQ4.js";import"./CartesianChart-DROVOQUl.js";import"./chartDataContext-3NcgbJTI.js";import"./CategoricalChart-DA7sCUkZ.js";import"./Layer-BNdxATQx.js";import"./ReactUtils-BjGJq1or.js";import"./Label-4VfWqw9i.js";import"./Text-BjHYQlz2.js";import"./DOMUtils-B7ui-v2S.js";import"./ZIndexLayer-BGiHPSQp.js";import"./ActivePoints-CRykM8N_.js";import"./Dot-B6v6wM9O.js";import"./types-BlQIDijQ.js";import"./RegisterGraphicalItemId-g2iXfztY.js";import"./ErrorBarContext-G6eCMKH6.js";import"./GraphicalItemClipPath-C8XfWWgk.js";import"./SetGraphicalItem-bKBrJsc3.js";import"./useAnimationId-DKUOkxb7.js";import"./getRadiusAndStrokeWidthFromDot-BLthc_nE.js";import"./ActiveShapeUtils-BcU5bshf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpE70r4e.js";import"./Trapezoid-DBpBN19V.js";import"./Sector-Do1ff_IB.js";import"./Symbols-DsTuGPc2.js";import"./Curve-CYu7zDaL.js";import"./CartesianAxis-CVBmqBFQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-wj7KHo_g.js";import"./ChartSizeDimensions-yLUqjZ4u.js";import"./OffsetShower-2b6-cTCa.js";import"./PlotAreaShower-CQqB1CA9.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
