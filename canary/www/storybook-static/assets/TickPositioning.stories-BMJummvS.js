import{R as t}from"./iframe-JB04ITxe.js";import{R as m}from"./zIndexSlice-BedYLUjR.js";import{L as s}from"./LineChart-CHuARuyd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CHJHx0C6.js";import{X as l}from"./XAxis-2CswrS5Z.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D_wC7bH8.js";import"./index-CloOaeIj.js";import"./index-BR_ntmTV.js";import"./get-BDmTa2no.js";import"./resolveDefaultProps-DnK0dHNE.js";import"./isWellBehavedNumber-CWoD1Zwt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_Mnb6wJ.js";import"./index-BMvw03mU.js";import"./index-BEbfCQUB.js";import"./renderedTicksSlice-C53CIbMu.js";import"./axisSelectors-OGGKPVta.js";import"./d3-scale-BSQ4FewF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ck5tcGy8.js";import"./chartDataContext-gfaUTl-k.js";import"./CategoricalChart-PrNOUwgL.js";import"./Layer-CC5P43nm.js";import"./Curve-JVKmUUOc.js";import"./types-BtpCwQ36.js";import"./step-Dr-jp1Wr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BaII0Say.js";import"./Label-D1e3845Y.js";import"./Text-C7k8RhMi.js";import"./DOMUtils-B7gcLuLP.js";import"./ZIndexLayer-tYN38LXC.js";import"./useAnimationId-IX-vmahP.js";import"./ActivePoints-Cs1OZT7v.js";import"./Dot-CiBnQwda.js";import"./RegisterGraphicalItemId-DJtDudBg.js";import"./ErrorBarContext-oGwgz47-.js";import"./GraphicalItemClipPath-B64UzPte.js";import"./SetGraphicalItem-bHcm5Lyp.js";import"./getRadiusAndStrokeWidthFromDot-1qwqcEV-.js";import"./ActiveShapeUtils-BF3URPPF.js";import"./CartesianAxis-Ck1yZ59m.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
