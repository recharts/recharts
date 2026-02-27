import{e as t}from"./iframe-DFGAofbe.js";import{R as n}from"./arrayEqualityCheck-ljAchZLP.js";import{L as s}from"./LineChart-CV4HquQN.js";import{L as c}from"./Line-BlnoO5ZS.js";import{X as d}from"./XAxis-B7s0I8c_.js";import{R as l}from"./RechartsHookInspector-DbJ87cdf.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiW6MX56.js";import"./immer-BNIFj7IH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BW69_AMP.js";import"./index-BuPlUYom.js";import"./hooks-NQJeEPvo.js";import"./axisSelectors-wlNZvql0.js";import"./d3-scale-BORVzaI0.js";import"./zIndexSlice-ZGxvoLlb.js";import"./renderedTicksSlice-zWZrw6WL.js";import"./CartesianChart-B919z8kN.js";import"./chartDataContext-3sHnV3LN.js";import"./CategoricalChart-DiTxXNb9.js";import"./Layer-DkQEAz0F.js";import"./ReactUtils-Zl7yFqa2.js";import"./Label-D3hyhnox.js";import"./Text-eVa9CtOa.js";import"./DOMUtils-Bb3CoATj.js";import"./ZIndexLayer-C2uBG0v5.js";import"./ActivePoints-xqKHU-BS.js";import"./Dot-C8sJEI5Z.js";import"./types-hODQJ_Fi.js";import"./RegisterGraphicalItemId-BoqMctej.js";import"./ErrorBarContext-CN4hBBfW.js";import"./GraphicalItemClipPath-CAWgOBcy.js";import"./SetGraphicalItem-BNO-bjOH.js";import"./useAnimationId-DLq-j523.js";import"./getRadiusAndStrokeWidthFromDot-CO84l42z.js";import"./ActiveShapeUtils-BldO5j8K.js";import"./isPlainObject-CgDaYdpj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXQZY0za.js";import"./Trapezoid-C7B2-ixr.js";import"./Sector-BpsG7dxK.js";import"./Symbols-smoeIwKM.js";import"./symbol-ChY4FcTv.js";import"./step-D87477lM.js";import"./Curve-DUQRfqey.js";import"./CartesianAxis-CchT0nWW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-C6DKtKjE.js";import"./ChartSizeDimensions-BkxkztHc.js";import"./OffsetShower-B3oZm6GE.js";import"./PlotAreaShower-CBxzL5FD.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
