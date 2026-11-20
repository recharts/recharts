import{R as t}from"./iframe-qp48uAQ7.js";import{R as m}from"./zIndexSlice-KCJej1vF.js";import{L as s}from"./LineChart-Bybl5B6K.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DYWFyVWx.js";import{X as l}from"./XAxis-DBjPaOy0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./throttle-DidOwtMq.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./RechartsWrapper-1rMBmo6H.js";import"./axisSelectors-EQaPQOEj.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C1UROyMV.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./getRadiusAndStrokeWidthFromDot-DPhFQhmH.js";import"./Layer-3O8BuD1C.js";import"./Curve-D9eNKl8H.js";import"./types-B-Gso0-n.js";import"./step-DYSBTYxM.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-MmJGBd3d.js";import"./Label-Sje2x2ae.js";import"./Text-9axAMSSa.js";import"./ZIndexLayer-B5vbT5ul.js";import"./ActivePoints-AeR92xz-.js";import"./Dot-CZVpULkY.js";import"./activeStyles-CvvZZ1RN.js";import"./useAnimationId-gBLR8eku.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./ErrorBarContext-BOAdtyxi.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./ActiveShapeUtils--ilFziir.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./CartesianAxis-CvElXQWV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
