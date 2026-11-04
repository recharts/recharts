import{R as t}from"./iframe-G0Ik9O6t.js";import{R as m}from"./zIndexSlice-CYnNRWxE.js";import{L as s}from"./LineChart-CZRkIS6W.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-umGGBS5k.js";import{X as l}from"./XAxis-CWTgMLCK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./throttle-0RzAOwSl.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./RechartsWrapper-C0SK3-tY.js";import"./axisSelectors-D9yir6Xs.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B1oMv4d2.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./Layer-DsYtJDK_.js";import"./Curve-BM_Sw2Bx.js";import"./types-D7lN_jRq.js";import"./step-CKk5L9t9.js";import"./path-DyVhHtw_.js";import"./LabelList-Bc94H-h2.js";import"./Label-CylpphjQ.js";import"./Text-B4HlcW6K.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./ActivePoints-DtZW7fDP.js";import"./Dot-CCKVvK0p.js";import"./activeStyles-BHukLnjd.js";import"./useAnimationId-BSSTqixR.js";import"./dataEntryStyles-C4cqIMlE.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./ErrorBarContext-BMXI6Vn7.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getRadiusAndStrokeWidthFromDot-BGcbbY8R.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./CartesianAxis-CcGZ5e89.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
