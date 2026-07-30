import{R as t}from"./iframe-Bcp8O5w9.js";import{R as m}from"./zIndexSlice-D89hrw0J.js";import{L as s}from"./LineChart-C7BW0A7x.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D5QNWWOp.js";import{X as l}from"./XAxis-BiaLRW8b.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAyQB-br.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./index-CR585iKh.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./CartesianChart-CD4QeXTd.js";import"./chartDataContext-DNuqophf.js";import"./CategoricalChart-YaAk4iek.js";import"./Layer-be5X0p7R.js";import"./Curve-CliZJ8qV.js";import"./types-BoqxM4LK.js";import"./step-BcSwTyGL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dei1yN9c.js";import"./Label-hDShUpMs.js";import"./Text-wdIqEHol.js";import"./DOMUtils-CK1FWe6a.js";import"./ZIndexLayer-DGoKIl_r.js";import"./useAnimationId-BscNfyQw.js";import"./ActivePoints-PTULrlcl.js";import"./Dot-Chi-tYTx.js";import"./RegisterGraphicalItemId-BpEAlExL.js";import"./ErrorBarContext-9-QyAyWc.js";import"./GraphicalItemClipPath-KqXDj0-X.js";import"./SetGraphicalItem-3vj6veQk.js";import"./getRadiusAndStrokeWidthFromDot-CozuNNm5.js";import"./ActiveShapeUtils-BmZAHZJ_.js";import"./RechartsThemeContext-BZ4wBUr5.js";import"./CartesianAxis-BtWjjBG7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
