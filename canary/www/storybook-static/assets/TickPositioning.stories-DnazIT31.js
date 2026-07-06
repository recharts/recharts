import{R as t}from"./iframe-DILeTPtB.js";import{R as m}from"./zIndexSlice-JhTumx9T.js";import{L as s}from"./LineChart-CKXjK-7L.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dvb0PByu.js";import{X as l}from"./XAxis-Bwnro3mN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSfx3U2Q.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps--lUhC_MY.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./axisSelectors-BJN0i2Z4.js";import"./d3-scale-C6hgYXhG.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./Layer-DqGeYGqQ.js";import"./Curve-BAtIGC1F.js";import"./types-0cBFLGxq.js";import"./step-DZcEBBZm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BB2N4cgm.js";import"./Label-RUjb4LlC.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./ZIndexLayer-DKm5_jWO.js";import"./useAnimationId-oe-1YumM.js";import"./ActivePoints-BZxYxGPD.js";import"./Dot-j0bVABcw.js";import"./RegisterGraphicalItemId-CxyqVt25.js";import"./ErrorBarContext-Bk5mas5-.js";import"./GraphicalItemClipPath-ElTOcYVI.js";import"./SetGraphicalItem-DVaXC3-E.js";import"./getRadiusAndStrokeWidthFromDot-Cp2-QPpj.js";import"./ActiveShapeUtils-CEry7zbZ.js";import"./CartesianAxis-sqhBuaGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
