import{e as t}from"./iframe-DtzQZ5We.js";import{R as m}from"./arrayEqualityCheck-3Q4fEezD.js";import{L as s}from"./LineChart-DeGMKDl2.js";import{L as c}from"./Line-CrxGC9uS.js";import{X as d}from"./XAxis-DbDdWo9i.js";import{R as l}from"./RechartsHookInspector-podkStYr.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGOHUa9W.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./zIndexSlice-DS1PNPXk.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./Layer-P1mRwVv-.js";import"./ReactUtils-Bg8ILpJF.js";import"./Label-D5-8z0UP.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./ZIndexLayer-DGEtHlps.js";import"./ActivePoints-CLc9h_MH.js";import"./Dot-D4WZdJ7E.js";import"./types-DcSMO55m.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./ErrorBarContext-BtAqYSS8.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./useAnimationId-GgPPrJFw.js";import"./getRadiusAndStrokeWidthFromDot-Cnf2Ftr7.js";import"./ActiveShapeUtils-D2Eg2bWy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSEdSL9_.js";import"./Trapezoid-DCMThu2C.js";import"./Sector-CcjHcsYG.js";import"./Symbols-k0cT0xYb.js";import"./Curve-C7rWq_eQ.js";import"./CartesianAxis-D6UZdOOc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CiWjk4ms.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
