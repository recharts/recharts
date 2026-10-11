import{R as t}from"./iframe-W_agkVyV.js";import{R as m}from"./zIndexSlice-CTdReD9p.js";import{L as s}from"./LineChart-Bix7U7nR.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CHfdY4oG.js";import{X as l}from"./XAxis-BMo9pONJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CA9ZAVQz.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3mPyrs7.js";import"./axisSelectors-6axja2Em.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./Layer-BtznfAPn.js";import"./Curve-BtaxSMiV.js";import"./types-CaM0OvRl.js";import"./step-DBl9LSRi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BahHAzuq.js";import"./Label-ClOsex7o.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./ZIndexLayer-BRJamsEl.js";import"./useAnimationId-Bm_zuzY4.js";import"./dataEntryStyles-ubI82mtZ.js";import"./ActivePoints-BV4SsbUp.js";import"./Dot-DTv2KvAS.js";import"./ErrorBarContext-Bg5MlTZs.js";import"./GraphicalItemClipPath-eVqzfYHN.js";import"./SetGraphicalItem-MNgoA9Pf.js";import"./getRadiusAndStrokeWidthFromDot-HZaFqHia.js";import"./ActiveShapeUtils-Ba2JWET-.js";import"./useEffectiveDataKey-Bzuj7hT4.js";import"./CartesianAxis-CPOh9De0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
