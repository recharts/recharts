import{R as t}from"./iframe-CFlvYhwJ.js";import{R as m}from"./zIndexSlice-DsYga1t6.js";import{L as s}from"./LineChart-BCVpL5u4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DKG46EWA.js";import{X as l}from"./XAxis-BkEb723n.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGHHBzas.js";import"./index-CK40W1ET.js";import"./index-CMfIljZ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1HAFajw.js";import"./isWellBehavedNumber-CZKybQSl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRpfhqml.js";import"./index-CkY-i2Tp.js";import"./index-BETjCkd5.js";import"./renderedTicksSlice-1CrcAe52.js";import"./axisSelectors-CI91Gt8x.js";import"./d3-scale-dVjou3RT.js";import"./CartesianChart-BaNzafos.js";import"./chartDataContext-C13UfWCq.js";import"./CategoricalChart-DdrlD6Qo.js";import"./Layer-CW0ll6KY.js";import"./Curve-C-oh9Gi7.js";import"./types-CdMLkiLP.js";import"./step-De1pGJyj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DsKEiEFE.js";import"./Label-QMoyFNov.js";import"./Text-DN7KrSut.js";import"./DOMUtils-D9HWXXxc.js";import"./ZIndexLayer-CvEqpirx.js";import"./useAnimationId-C-XOTnuE.js";import"./ActivePoints-7_4sir7A.js";import"./Dot-DikTEoY0.js";import"./RegisterGraphicalItemId-Dt1qkWl-.js";import"./ErrorBarContext-trjmp7P9.js";import"./GraphicalItemClipPath-CRnvGLDA.js";import"./SetGraphicalItem-BR7YSlkQ.js";import"./graphicalItemIdentity-D5gCgso6.js";import"./ActiveShapeUtils-CfzUyvN7.js";import"./RechartsThemeContext-DehnkZN_.js";import"./CartesianAxis-CTp7B_-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
