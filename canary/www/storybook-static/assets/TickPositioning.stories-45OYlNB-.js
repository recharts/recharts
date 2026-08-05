import{R as t}from"./iframe-D972tbhF.js";import{R as m}from"./zIndexSlice-Dmvy26G-.js";import{L as s}from"./LineChart-BGgzHg8X.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DPj7HunO.js";import{X as l}from"./XAxis-QP_2w1I7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2OThsuy.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./axisSelectors-uJIqnO2D.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CategoricalChart-DKJz-sZX.js";import"./Layer-C5RVdPDc.js";import"./Curve-DGKxAkYd.js";import"./types-DLeA2L4w.js";import"./step-9Pc3Vsuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2p3qtLJi.js";import"./Label-BZnc8KKN.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./ZIndexLayer-Dhusbhig.js";import"./useAnimationId-BPwHrlOs.js";import"./ActivePoints-SQF2J3GR.js";import"./Dot-DBr8YjaB.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./ErrorBarContext-DNvNglsi.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";import"./graphicalItemIdentity-BolIVYF7.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./RechartsThemeContext-C7EwwBej.js";import"./CartesianAxis-B06URywl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
