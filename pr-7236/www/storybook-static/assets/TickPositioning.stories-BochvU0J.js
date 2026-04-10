import{e as t}from"./iframe-JWSOvVZL.js";import{R as n}from"./arrayEqualityCheck-DJxJsIgg.js";import{L as s}from"./LineChart-5WE08xqr.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CuyuQhyf.js";import{X as l}from"./XAxis-CiEGa-2H.js";import{R as v}from"./RechartsHookInspector-DbINuC6c.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Db3kyesD.js";import"./immer-Cx8sbOuB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_ZAgcFWH.js";import"./index-qboEQSUS.js";import"./hooks-D_fkqjif.js";import"./axisSelectors-BfW2jaQP.js";import"./d3-scale-Cvg0WP4x.js";import"./zIndexSlice-xDRQRS04.js";import"./renderedTicksSlice-D4Sds7TF.js";import"./CartesianChart-6CEzPVWQ.js";import"./chartDataContext-CGNvCd4v.js";import"./CategoricalChart-XXxbMYfW.js";import"./Layer-CVGwLCGQ.js";import"./ReactUtils-qs-97Ac8.js";import"./Label-Cxg_vq25.js";import"./Text-C1wuLOW9.js";import"./DOMUtils-BGNYNETS.js";import"./ZIndexLayer-DKFbEZ_O.js";import"./ActivePoints-XzqbnO-t.js";import"./Dot-DDYCZ56V.js";import"./types-B3dpB15X.js";import"./RegisterGraphicalItemId-7hQHg__D.js";import"./ErrorBarContext-Cka3vvlo.js";import"./GraphicalItemClipPath-BzNC4mI6.js";import"./SetGraphicalItem-Do9Jrivq.js";import"./useAnimationId-BDQqVS92.js";import"./getRadiusAndStrokeWidthFromDot-CGUx355X.js";import"./ActiveShapeUtils-DUqlRNnh.js";import"./isPlainObject-DAbDjRrv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dy9rRH3J.js";import"./Trapezoid-Np68xL8c.js";import"./Sector-DgiCwcle.js";import"./Symbols-CJQeMuDE.js";import"./symbol-CzcstGin.js";import"./step-NHTakNU6.js";import"./Curve-BSIyWE0E.js";import"./CartesianAxis-BBAUsbPY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B-NDJh2x.js";import"./ChartSizeDimensions-B0YZDNOc.js";import"./OffsetShower-Pl0lZwIc.js";import"./PlotAreaShower-CT6U6KfM.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
