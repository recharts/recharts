import{R as t}from"./iframe-CbmcvRkz.js";import{R as m}from"./zIndexSlice-DoKZE_fT.js";import{L as s}from"./LineChart-BWO9Nu2v.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-cyvqn16I.js";import{X as l}from"./XAxis-BXkS-79Y.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BWk67B8y.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./get-prZAxsgN.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6OXESHp.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./renderedTicksSlice-BID11n2_.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./Layer-aQjZulmS.js";import"./Curve-Ba6UoBvx.js";import"./types-aj_9xhUM.js";import"./step-qj-9nXS-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8brG2ut.js";import"./Label-CMFdvkIW.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./ZIndexLayer-ByjAgEa2.js";import"./useAnimationId-Bg4LY1-F.js";import"./ActivePoints-Bm3DH6tK.js";import"./Dot-CYkHGb9U.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./ErrorBarContext-Cf-_Bhe_.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./getRadiusAndStrokeWidthFromDot-D4nwke3n.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./CartesianAxis-Duc97zpX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
