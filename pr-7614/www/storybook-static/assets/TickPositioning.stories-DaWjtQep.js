import{R as t}from"./iframe-C5hmF0To.js";import{R as m}from"./zIndexSlice-BixfUK5V.js";import{L as s}from"./LineChart-DyM4Wjp5.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DEGUXAZ2.js";import{X as l}from"./XAxis-C0QI0HXh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-teWCo3kp.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2jsJsE5.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./d3-scale-B4bxyqZp.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./Layer-CDmGCMyH.js";import"./Curve-cVSz_V8P.js";import"./types-CeFfhpIK.js";import"./step-AxYq5Lzl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BcG4wu47.js";import"./Label-Du636Igd.js";import"./Text-C5taNjiE.js";import"./DOMUtils-BTnNVt5T.js";import"./ZIndexLayer-CCu8NHHi.js";import"./useAnimationId-WdLJ0TXq.js";import"./ActivePoints-DkEblMVf.js";import"./Dot-B5cqvfYd.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./ErrorBarContext-BXXzJsD_.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./graphicalItemIdentity-BfXCt-oz.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./CartesianAxis-Co52JpOx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
