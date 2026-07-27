import{R as t}from"./iframe-BRjS3pa5.js";import{R as m}from"./zIndexSlice-XdBxArD4.js";import{L as s}from"./LineChart-xB0mW5OS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BnrW5em_.js";import{X as l}from"./XAxis-C08AGWpL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVKBaBan.js";import"./index-CTzNvEbv.js";import"./index-BBA_Z08e.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CQjC3mbh.js";import"./isWellBehavedNumber-BpzQ2UFz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kdlfkWfS.js";import"./index-BBFKTPis.js";import"./index-JNqHplgB.js";import"./renderedTicksSlice-BqYlra_S.js";import"./axisSelectors-CG0YGbYa.js";import"./d3-scale-BkRq6yTg.js";import"./CartesianChart-CNsqprpw.js";import"./chartDataContext-UzO9iCYp.js";import"./CategoricalChart-CG1ra5Si.js";import"./Layer-BT4MOeWW.js";import"./Curve-BAtmvmuC.js";import"./types-DRhRxFpq.js";import"./step-DMngYI5d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-51O2x23y.js";import"./Label-Dttiw5NK.js";import"./Text-z_Sr8qFY.js";import"./DOMUtils-D9-UYNUT.js";import"./ZIndexLayer-98YKZStn.js";import"./useAnimationId-CRgssPqb.js";import"./ActivePoints-VQONApch.js";import"./Dot-D2cX8i8Q.js";import"./RegisterGraphicalItemId-BMfolY6u.js";import"./ErrorBarContext-CRJaMaH8.js";import"./GraphicalItemClipPath-CPBZ3hrs.js";import"./SetGraphicalItem-B-YWrUBQ.js";import"./getRadiusAndStrokeWidthFromDot-BUdbBqHd.js";import"./ActiveShapeUtils-pSZkQHNE.js";import"./CartesianAxis-Cffb3mHz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CTxTvR-3.js";import"./isBuffer-Crkas5dz.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
