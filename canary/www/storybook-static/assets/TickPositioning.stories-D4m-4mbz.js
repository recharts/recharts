import{R as t}from"./iframe-n-o_GhOg.js";import{R as m}from"./zIndexSlice-rH1Vz5Mp.js";import{L as s}from"./LineChart-dVYKW8pH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BlrUCqXP.js";import{X as l}from"./XAxis-D3N7JqFL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C59GD_w_.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_cU67sC5.js";import"./axisSelectors-CZyPeZLC.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./Layer-DpixjnOX.js";import"./Curve-dJ1hXb5R.js";import"./types-D19g2GXX.js";import"./step-DtRuoLBY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BXuL_9-l.js";import"./Label-CNUZ8IJr.js";import"./Text-SNR8n6Fx.js";import"./DOMUtils-c7gF72Lb.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./ZIndexLayer-RuyYCT_q.js";import"./useAnimationId-Bs6Pq3h0.js";import"./ActivePoints-fyry5IXw.js";import"./Dot-NFpTkrs-.js";import"./RegisterGraphicalItemId-D70QTB5K.js";import"./ErrorBarContext-BSDbxWtX.js";import"./GraphicalItemClipPath-Ce-x1jHU.js";import"./SetGraphicalItem-0HQpcTKH.js";import"./getRadiusAndStrokeWidthFromDot-W6nPpsGK.js";import"./ActiveShapeUtils-8hxeMxzA.js";import"./useGraphicalItemIdentity-BKlZkD6N.js";import"./CartesianAxis-_Tflg6Fj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
