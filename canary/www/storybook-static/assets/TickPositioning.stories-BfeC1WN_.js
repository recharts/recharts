import{R as t}from"./iframe-CmqkAU55.js";import{R as m}from"./zIndexSlice-DttPm2yG.js";import{L as s}from"./LineChart-DKQOtBxY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DushgwKA.js";import{X as l}from"./XAxis-iMrKHVYZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-45H0AIAq.js";import"./index-CrNK6q9O.js";import"./index-Ccra80NE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMY6nxFh.js";import"./isWellBehavedNumber-eRUuJPZy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CdZHTDnE.js";import"./index-ImOuOX5i.js";import"./index-BIMQ5lZl.js";import"./axisSelectors-v6b69rA0.js";import"./d3-scale-CM34ZdGn.js";import"./renderedTicksSlice-CSz7jA9g.js";import"./CartesianChart-DHPjYa1I.js";import"./chartDataContext-CiMrnFkp.js";import"./CategoricalChart-CAeMU4C2.js";import"./Layer-JlYR6W_Z.js";import"./Curve-CGQeDOz5.js";import"./types-DD7WKq2Q.js";import"./step-CxyVRtQl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CEenLt2d.js";import"./Label-CI9Aa94q.js";import"./Text-DFCCUK93.js";import"./DOMUtils-DDl9EDuG.js";import"./ZIndexLayer-B8NE7f7O.js";import"./useAnimationId-DOKlurUN.js";import"./ActivePoints-DX-T5XFy.js";import"./Dot-BQXlip-b.js";import"./RegisterGraphicalItemId-DkK-FjDI.js";import"./ErrorBarContext-BQBXXX5z.js";import"./GraphicalItemClipPath-bjx9wsKp.js";import"./SetGraphicalItem-Bg0mOoGz.js";import"./getRadiusAndStrokeWidthFromDot-h0JWGKQ2.js";import"./ActiveShapeUtils-BJK8znX0.js";import"./RechartsThemeContext-C9_zddkn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis--fgQsGIr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
