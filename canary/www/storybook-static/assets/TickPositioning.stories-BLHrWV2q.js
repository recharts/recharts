import{e as t}from"./iframe-bYFtU2gB.js";import{R as s}from"./arrayEqualityCheck-BHNF6PA7.js";import{L as m}from"./LineChart-Dfi9Z3EZ.js";import{L as c}from"./Line-B6MnASPp.js";import{X as d}from"./XAxis-B6h0khsn.js";import{R as l}from"./RechartsHookInspector-Cgqq1XBh.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RCRz3E4-.js";import"./PolarUtils-BwgqFbq3.js";import"./RechartsWrapper-Cr_qDhUZ.js";import"./hooks-ZDdJpBw-.js";import"./axisSelectors-Bz_L1ZR6.js";import"./zIndexSlice-UFbR30dZ.js";import"./CartesianChart-lWIloUy5.js";import"./chartDataContext-CbNClMtX.js";import"./CategoricalChart-ByKQIpLz.js";import"./Layer-BBEIeca0.js";import"./ReactUtils-C_A_edxl.js";import"./Label-CFtnFUI6.js";import"./Text-DGNM2np6.js";import"./DOMUtils-BRFWW1JK.js";import"./ZIndexLayer-BgNsQjiU.js";import"./ActivePoints-C3YdUCR7.js";import"./Dot-BouV6qyY.js";import"./types-rMmo8sSI.js";import"./RegisterGraphicalItemId-BrxUTcxA.js";import"./ErrorBarContext-Dr9wrC8F.js";import"./GraphicalItemClipPath-BBMk50de.js";import"./SetGraphicalItem-nU2Wrmlo.js";import"./useAnimationId-DJ17eyu2.js";import"./getRadiusAndStrokeWidthFromDot-BU75fsQJ.js";import"./ActiveShapeUtils-CJjJYwGu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhTN5tPV.js";import"./Trapezoid-DSgAJSbG.js";import"./Sector-CLRLJGPS.js";import"./Symbols-CNah5pWh.js";import"./Curve-CtUoNekQ.js";import"./CartesianAxis-B3J6v13U.js";import"./index-DOxosQgk.js";import"./ChartSizeDimensions-RFkmb5Zl.js";import"./OffsetShower-CjBekQlW.js";import"./PlotAreaShower-DwHvcBqq.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
