import{e as t}from"./iframe-CldnC2PN.js";import{R as n}from"./arrayEqualityCheck-BkMemVly.js";import{L as s}from"./LineChart-sbgIUmRs.js";import{L as c}from"./Line-ByBYJUYI.js";import{X as d}from"./XAxis-Cj8qZ5rT.js";import{R as l}from"./RechartsHookInspector-D62gTWo0.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./immer-DMaWcifR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./zIndexSlice-Dkmz4iFf.js";import"./renderedTicksSlice-Be71JRZt.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./CategoricalChart-SLN0-3Ts.js";import"./Layer-Bdw6vRTF.js";import"./ReactUtils-vDwQR-8r.js";import"./Label-CL4-mp52.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./ZIndexLayer-Bu6n17y5.js";import"./ActivePoints-BUuw4K3w.js";import"./Dot-5FROqbSu.js";import"./types-dYqueN3V.js";import"./RegisterGraphicalItemId-BmpgF9p0.js";import"./ErrorBarContext-Bu40-WC5.js";import"./GraphicalItemClipPath-_SIbPbOr.js";import"./SetGraphicalItem-QHdiFTBm.js";import"./useAnimationId-3owPHR_y.js";import"./getRadiusAndStrokeWidthFromDot-BeEBfGl6.js";import"./ActiveShapeUtils-PUYnWCIP.js";import"./isPlainObject-DfSr4O01.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzrYFnf.js";import"./Trapezoid-TT50IcST.js";import"./Sector-Olx8axXc.js";import"./Symbols-CezzAArh.js";import"./symbol-ChaweOtd.js";import"./step-DeOo6rRX.js";import"./Curve-Cs2JifYn.js";import"./CartesianAxis-BLyyO5TZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
