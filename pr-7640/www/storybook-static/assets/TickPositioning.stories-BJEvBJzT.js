import{R as t}from"./iframe-BIMbD8mx.js";import{R as m}from"./zIndexSlice-wO_dW_9z.js";import{L as s}from"./LineChart-6UTr3Qqx.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C4NM27Mj.js";import{X as l}from"./XAxis-79yd8ZPy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DiXkeT8N.js";import"./index-DwWghGbc.js";import"./index-BRQlGlsm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZ6QiDkA.js";import"./isWellBehavedNumber-CazuspJq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QNCP9nY0.js";import"./index-A5Cgym80.js";import"./index-BP-geqPm.js";import"./axisSelectors-BtNyQa3m.js";import"./d3-scale-DL9ezE1-.js";import"./renderedTicksSlice-B-RvvD_k.js";import"./CartesianChart-CABLVMKg.js";import"./chartDataContext-CXOVrzNd.js";import"./CategoricalChart-rgEOMHEL.js";import"./Layer-1Cdcr0Iy.js";import"./Curve-BJXCkxMN.js";import"./types-Dp-Ax4LT.js";import"./step-O2UOarbe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QaKLnfOP.js";import"./Label-DfQOptl9.js";import"./Text-D6zl2tjY.js";import"./DOMUtils-DjDyXH_P.js";import"./RechartsThemeContext-BjZ7jnPh.js";import"./ZIndexLayer-YpWri7rk.js";import"./useAnimationId-hHgrQgML.js";import"./ActivePoints-BrY5sxJW.js";import"./Dot-N76mer2J.js";import"./RegisterGraphicalItemId-DN1O3Sjb.js";import"./ErrorBarContext-DnIQZp30.js";import"./GraphicalItemClipPath-nqtdT7cB.js";import"./SetGraphicalItem-DRMG3qH2.js";import"./getRadiusAndStrokeWidthFromDot-Dpt2Y5Zj.js";import"./ActiveShapeUtils-CBR4xzcn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B1RojcCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
