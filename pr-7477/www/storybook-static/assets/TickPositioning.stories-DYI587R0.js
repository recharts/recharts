import{R as t}from"./iframe-DiQxFPiD.js";import{R as m}from"./zIndexSlice-CbAjIrOk.js";import{L as s}from"./LineChart-Db1z8a11.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-sGvSTEOh.js";import{X as l}from"./XAxis-EdXvGrQH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DosMXF92.js";import"./index-gf7fYE_b.js";import"./index-B_6w02dr.js";import"./get-Dz6QpTIZ.js";import"./resolveDefaultProps-BZylAH88.js";import"./isWellBehavedNumber-BHg_3JmY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvKHUawi.js";import"./index-DEHTfYnV.js";import"./index-DXMpEhi9.js";import"./renderedTicksSlice-CVnOD3jK.js";import"./axisSelectors-BmcnLQg7.js";import"./d3-scale-DQujxaME.js";import"./CartesianChart-j347tMAF.js";import"./chartDataContext-sNW_KTv-.js";import"./CategoricalChart-1umVaoo6.js";import"./Layer-DW7oRwXF.js";import"./Curve-B6Y4ZTmR.js";import"./types-3xORkcTs.js";import"./step-C72WQite.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BWXZdjgl.js";import"./Label-DzhDJono.js";import"./Text-BktdaDV_.js";import"./DOMUtils-C48HdCx5.js";import"./ZIndexLayer-CyWmE1eJ.js";import"./useAnimationId-BBPLHSdH.js";import"./ActivePoints-CDvTrnjr.js";import"./Dot-DDdvkJOK.js";import"./RegisterGraphicalItemId-CwapTkk7.js";import"./ErrorBarContext-CkyyD-i0.js";import"./GraphicalItemClipPath-B5HruHls.js";import"./SetGraphicalItem-glSzG2Ws.js";import"./getRadiusAndStrokeWidthFromDot-lcmD8n15.js";import"./ActiveShapeUtils-CPs_mOyJ.js";import"./CartesianAxis-BIrMP5Fh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
