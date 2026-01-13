import{e as t}from"./iframe-1i9HA9RQ.js";import{R as s}from"./arrayEqualityCheck-BwjFPiUr.js";import{L as m}from"./LineChart-Bs1MqF33.js";import{L as c}from"./Line-D2VioKUJ.js";import{X as d}from"./XAxis-0WAwRzrH.js";import{R as l}from"./RechartsHookInspector-CcKov_mq.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CuqYJHcO.js";import"./PolarUtils-B3zJ31hA.js";import"./RechartsWrapper-Ca6atg1S.js";import"./hooks-y-J71LZD.js";import"./axisSelectors-B-ey3vYH.js";import"./zIndexSlice-kDjHMkcM.js";import"./CartesianChart-gPb3Ow7G.js";import"./chartDataContext-Cq6PbOHK.js";import"./CategoricalChart-fTOtoFif.js";import"./Layer-TtoeX7Dg.js";import"./ReactUtils-CesYLNMs.js";import"./Label-B5L7e25b.js";import"./Text-CkIqO9jR.js";import"./DOMUtils-BvTgwRu6.js";import"./ZIndexLayer-CX343y-L.js";import"./ActivePoints-D2uAfPbW.js";import"./Dot-BEc3ne5l.js";import"./types-BWGBotoG.js";import"./RegisterGraphicalItemId-C0szZiML.js";import"./ErrorBarContext-B9-hedxb.js";import"./GraphicalItemClipPath-C-3gRK47.js";import"./SetGraphicalItem-DlpP7DnH.js";import"./useAnimationId-CKk3JzZu.js";import"./getRadiusAndStrokeWidthFromDot-BzmVXP46.js";import"./ActiveShapeUtils-CgjTEdkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaWdx0SZ.js";import"./Trapezoid-GbRA1Hs7.js";import"./Sector-C3B07LHk.js";import"./Symbols-Bn7dqeJu.js";import"./Curve-DYisYGAN.js";import"./CartesianAxis-DT5pZ6h2.js";import"./index-BAAFpx__.js";import"./ChartSizeDimensions-BQPJaKjV.js";import"./OffsetShower-Bxqw5x-b.js";import"./PlotAreaShower-BqU9kqmb.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
