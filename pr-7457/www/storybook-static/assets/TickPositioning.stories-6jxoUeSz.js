import{R as t}from"./iframe-ii_SdKaT.js";import{R as m}from"./zIndexSlice-CewrGiZi.js";import{L as s}from"./LineChart-CDEoxbU3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BCh4BadY.js";import{X as l}from"./XAxis-n_W7ptOo.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BRK5VplU.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./get-IlujCcRJ.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./Layer-1o6wJcjz.js";import"./Curve-CvjftyU5.js";import"./types-CROtPh6T.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ddier9mI.js";import"./Label-CWAFalVX.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./ZIndexLayer-C_pljZlN.js";import"./useAnimationId-DETjp9PR.js";import"./ActivePoints-DUYbyaX_.js";import"./Dot-D93Ls2Za.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getRadiusAndStrokeWidthFromDot-ouGtJSmE.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./CartesianAxis-C12Pbczw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
