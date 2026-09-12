import{R as t}from"./iframe-D1t-DMDX.js";import{R as m}from"./zIndexSlice-D3y7WbGu.js";import{L as s}from"./LineChart-BWX7BfYV.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-F5T58cXI.js";import{X as l}from"./XAxis-D2W5e4ho.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-6Gvu17mH.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CslUsmpl.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZjYCuuq.js";import"./axisSelectors-j0uMY4D2.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./index-DBKl6Uwy.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./Layer-C3v8UF0F.js";import"./Curve-DkVKde3C.js";import"./types-CakNgFJg.js";import"./step-2p0USgF7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6KHS5pS.js";import"./Label-l8kFpP-D.js";import"./Text-DAi50bHG.js";import"./DOMUtils-B6_ZXa7e.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./ZIndexLayer-DAI4vBfR.js";import"./useAnimationId-CHualwmZ.js";import"./ActivePoints-DH8HO3TV.js";import"./Dot-iuKqNYRF.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./getRadiusAndStrokeWidthFromDot-B9ylC5dT.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";import"./CartesianAxis-zM23PuK9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
