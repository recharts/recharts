import{R as t}from"./iframe-CszBinxB.js";import{R as m}from"./zIndexSlice-CutJbhUL.js";import{L as s}from"./LineChart-Cvnq87be.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CF2pkJ7d.js";import{X as l}from"./XAxis-oYdZhs_K.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D83-jpt2.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./get-Dkt-pB45.js";import"./resolveDefaultProps-Bibg6aom.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9WMJT6y.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./renderedTicksSlice-BApmRI5D.js";import"./axisSelectors-ChU_3Lvt.js";import"./d3-scale-8f-0eAbn.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./Layer-CbC5ZndY.js";import"./Curve-BU7ZSeTV.js";import"./types-BcRZVSBA.js";import"./step-F1REG5Zy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dM5mhDfD.js";import"./Label-Dp0h3UHP.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./ZIndexLayer-BWnK9pgn.js";import"./useAnimationId-DACL8E3O.js";import"./ActivePoints-D0tv5d-k.js";import"./Dot-D-4kDITN.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./ErrorBarContext--gRpVtKO.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./getRadiusAndStrokeWidthFromDot-DQWqw49n.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./CartesianAxis-BWqORJkK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
