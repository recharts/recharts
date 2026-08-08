import{R as t}from"./iframe-BivO5BoJ.js";import{R as m}from"./zIndexSlice-Bjz_KcZJ.js";import{L as s}from"./LineChart-CT2CeP2f.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DOQ0pUTN.js";import{X as l}from"./XAxis-CJk4qOf_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BplF9VH1.js";import"./index-03GkEewG.js";import"./index-B0o2St2z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B41TlN8V.js";import"./isWellBehavedNumber-BP5BBjcl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFOf-gVb.js";import"./index-DdI5aF1Z.js";import"./index-eGB7E-8r.js";import"./axisSelectors-DhnOFegq.js";import"./d3-scale-oUOyK3d-.js";import"./renderedTicksSlice-CI5d0VIf.js";import"./CartesianChart-By-DJA1x.js";import"./chartDataContext-bLv_3jvW.js";import"./CategoricalChart-piOEuQ3H.js";import"./Layer-CQraiAmP.js";import"./Curve-DmB3zN28.js";import"./types-Ci90ji2E.js";import"./step-D7AgkVHN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Daz5NR7w.js";import"./Label-C7YhLpFH.js";import"./Text-B8O_8yPP.js";import"./DOMUtils-CA0Xf545.js";import"./ZIndexLayer-TaYOeXN7.js";import"./useAnimationId-C4RNTUIo.js";import"./ActivePoints-_kZDvhaZ.js";import"./Dot-BA4sFX2k.js";import"./RegisterGraphicalItemId-CmSKkMyt.js";import"./ErrorBarContext-ChpCgx9m.js";import"./GraphicalItemClipPath-xHJ3Vi6r.js";import"./SetGraphicalItem-D5hw8CGc.js";import"./graphicalItemIdentity-PtVRHa7z.js";import"./ActiveShapeUtils-BWMWU3gW.js";import"./RechartsThemeContext-CezfAeyp.js";import"./CartesianAxis-yaWpeoNa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
