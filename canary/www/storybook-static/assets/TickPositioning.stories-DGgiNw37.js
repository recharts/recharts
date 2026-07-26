import{R as t}from"./iframe-DxMMLjq4.js";import{R as m}from"./zIndexSlice-Crg_yDni.js";import{L as s}from"./LineChart-CUbhFaIN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C6CqArUN.js";import{X as l}from"./XAxis-ComdV9F0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVIVorzK.js";import"./index-NaaaP08j.js";import"./index-BmvyjtDr.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl28FH2f.js";import"./isWellBehavedNumber-C1o8zvOf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-YibyDFYm.js";import"./index-BNQESuWt.js";import"./index-NKUE4uSN.js";import"./renderedTicksSlice-R0A9XcRf.js";import"./axisSelectors-CtMsP7E5.js";import"./d3-scale-DNwZMBjH.js";import"./CartesianChart-eEIqhBYs.js";import"./chartDataContext-CPgowj6N.js";import"./CategoricalChart-CkjssiaG.js";import"./Layer-HeMPI1c4.js";import"./Curve-HWwjIPPZ.js";import"./types-CGS0Nool.js";import"./step-57b6j_Mi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZU2dyQ0.js";import"./Label-BzF2Z4Ph.js";import"./Text-BCYIz8FY.js";import"./DOMUtils-BdIlOhpH.js";import"./ZIndexLayer-YMn514XV.js";import"./useAnimationId-todkGmix.js";import"./ActivePoints-Cydr7Ilr.js";import"./Dot-BEKU9-XN.js";import"./RegisterGraphicalItemId-fNF2iW9l.js";import"./ErrorBarContext-f2qB8qRB.js";import"./GraphicalItemClipPath-BcLAlpwf.js";import"./SetGraphicalItem-C5-E1Ui2.js";import"./getRadiusAndStrokeWidthFromDot-Dkjblrfo.js";import"./ActiveShapeUtils-CzKC_ySI.js";import"./CartesianAxis-Bt1NAYMU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
