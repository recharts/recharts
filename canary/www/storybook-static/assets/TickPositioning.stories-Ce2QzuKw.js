import{R as t}from"./iframe-D2OYENKH.js";import{R as m}from"./zIndexSlice-D0ZhXs4m.js";import{L as s}from"./LineChart-DIpS1w4o.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CtVgLkBu.js";import{X as l}from"./XAxis-Pkmtv0hr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn9pRQ9R.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWgpx-pN.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./d3-scale-BX-yZ5Fv.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./CategoricalChart-UC5rHyt5.js";import"./Layer-D9vccuwA.js";import"./Curve-2nThZew5.js";import"./types-CP4OIotA.js";import"./step-DWDRJwlo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmNuH65D.js";import"./Label-BhTPc9li.js";import"./Text-Dw3wOnD-.js";import"./DOMUtils-DDs_Dfl9.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./useAnimationId-INjmlW7n.js";import"./ActivePoints-BjhdQ6pz.js";import"./Dot-DT2GXuQy.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./ErrorBarContext-DK9yojOq.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./getRadiusAndStrokeWidthFromDot-awhZfjnX.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./RechartsThemeContext-B2FvzarN.js";import"./CartesianAxis-BVkShzhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
