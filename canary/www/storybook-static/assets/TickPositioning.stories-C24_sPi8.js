import{R as t}from"./iframe-D_SaqINW.js";import{R as m}from"./zIndexSlice-Nr9A9_cH.js";import{L as s}from"./LineChart-DtRAC6ie.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CktBvgGg.js";import{X as l}from"./XAxis-6wdck5XJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-4i53sgvd.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./get-DRtBRZ7g.js";import"./resolveDefaultProps-DUbefueE.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BOxkh1KP.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./Layer-CLMd0CrH.js";import"./Curve-Sg8XUuU0.js";import"./types-L0YqXeC-.js";import"./step-DyxZJeHE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DrX1vaEn.js";import"./Label-D8rwziA9.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./useAnimationId-DJVHCfAF.js";import"./ActivePoints-DaZDHHOd.js";import"./Dot-B7iUah-Z.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./ErrorBarContext-Cv8g9Tm4.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./getRadiusAndStrokeWidthFromDot-UiXMR6RM.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./CartesianAxis-DWHYepa6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
