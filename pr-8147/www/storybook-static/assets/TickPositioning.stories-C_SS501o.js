import{R as t}from"./iframe-BQY4vSXy.js";import{R as m}from"./zIndexSlice-BdzVgEW0.js";import{L as s}from"./LineChart-DdNzH7ri.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-thI8lTJ9.js";import{X as l}from"./XAxis-DJU4Mvi4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-G77sf460.js";import"./throttle-CE5heSva.js";import"./index-CQxQDYts.js";import"./index-D-_6MOIc.js";import"./RechartsWrapper-BcRxM-Av.js";import"./axisSelectors-B45QX1Cb.js";import"./polarAxisSelectors-Bx2aNCzN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tF01g-yC.js";import"./index-CLE53NQ2.js";import"./index-CyLNMVoO.js";import"./renderedTicksSlice-xQ-Bbda9.js";import"./index-Bx1R-goW.js";import"./fillDefinitions-DSK0YdxC.js";import"./CartesianChart-r0bwZB67.js";import"./ZIndexPortal-CnsPtZ0q.js";import"./CategoricalChart-DH0FyAFC.js";import"./Layer-AUPxKI27.js";import"./Curve-Prn3xfVK.js";import"./types-Mj5dcoaz.js";import"./step-BwGNQI61.js";import"./path-DyVhHtw_.js";import"./LabelList-CALPxAES.js";import"./Label-mx5Rr5JL.js";import"./Text-CLBNZPUe.js";import"./DOMUtils-fCmVDggT.js";import"./ZIndexLayer-CAJurUsW.js";import"./ActivePoints-BFRx_fxi.js";import"./Dot-Cds0GrCQ.js";import"./activeStyles-BMraSVhQ.js";import"./useAnimationId-qEoZ-4tT.js";import"./dataEntryStyles-CGibnImn.js";import"./Symbols-yVk86yax.js";import"./symbol-DVGalN_0.js";import"./ErrorBarContext-DajCWgNE.js";import"./SetGraphicalItem-DSqeiOP9.js";import"./getRadiusAndStrokeWidthFromDot-DVA4wgZi.js";import"./ActiveShapeUtils-jWDRV1_r.js";import"./useEffectiveDataKey-DjptVWbj.js";import"./CartesianAxis-DnyTGuRK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
