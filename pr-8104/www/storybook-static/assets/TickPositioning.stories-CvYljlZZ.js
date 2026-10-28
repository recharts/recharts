import{R as t}from"./iframe-Bc_TQ7zr.js";import{R as m}from"./zIndexSlice-CO4_damr.js";import{L as s}from"./LineChart-BgMpV5Q8.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Drv4Jn_f.js";import{X as l}from"./XAxis-DWAumGqR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-urKJAClX.js";import"./throttle-DHt3nTHd.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./axisSelectors-BQX-Wl7f.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-2JXHcyFQ.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./Layer-Pn8de_pX.js";import"./Curve-BkI7sWgu.js";import"./types-CI1g0QBx.js";import"./step-Bz4sQ0ke.js";import"./path-DyVhHtw_.js";import"./LabelList-aO6gLBJB.js";import"./Label-B9G7W81w.js";import"./Text-DL7i-IN9.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./ActivePoints-lBMg9AK3.js";import"./Dot-BVzb9xNA.js";import"./activeStyles-CqnjEaUo.js";import"./useAnimationId-BaQxjUGX.js";import"./dataEntryStyles-CcDBy8RW.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./ErrorBarContext-C3uNXZgX.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getRadiusAndStrokeWidthFromDot-CL0rbQkZ.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./useEffectiveDataKey-BSvuchOk.js";import"./CartesianAxis-C2icTJ4e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
