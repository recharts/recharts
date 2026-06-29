import{R as t}from"./iframe-yOPx9Gik.js";import{R as m}from"./zIndexSlice-D67vVDIo.js";import{L as s}from"./LineChart-B51-taJF.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C0Fqz3BG.js";import{X as l}from"./XAxis-CJ8HGhD8.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MwiuxAbo.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./get-BfHGT2kl.js";import"./resolveDefaultProps-DB1B-raE.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./Layer-Bwtnd2Qr.js";import"./Curve-CyG3DmyO.js";import"./types-BJAf4K7V.js";import"./step-Bnv-0_8B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CE38GYBB.js";import"./Label-BqUT8U7H.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./ZIndexLayer-B4R3RCf9.js";import"./useAnimationId-D3arzwOC.js";import"./ActivePoints-BnyIHKN-.js";import"./Dot-BOZFOnSK.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./ErrorBarContext-qp41ygoF.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getRadiusAndStrokeWidthFromDot-pUt3tlnV.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./CartesianAxis-C7MTbV32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
