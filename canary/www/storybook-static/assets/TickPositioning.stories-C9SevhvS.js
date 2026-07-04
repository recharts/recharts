import{R as t}from"./iframe-BMwTDcev.js";import{R as m}from"./zIndexSlice-CPh4fBg6.js";import{L as s}from"./LineChart-k5u35EIG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DUpd8mAG.js";import{X as l}from"./XAxis-7lt7L-uw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2Td0Lm2.js";import"./index-CE-0bGiS.js";import"./index-3001YAOl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DPnbdQu5.js";import"./isWellBehavedNumber-BJdFuSyd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRX6xo6C.js";import"./index-ya5mjY_f.js";import"./index-CVc-PuqQ.js";import"./renderedTicksSlice-Co-nhFmz.js";import"./axisSelectors-sdy2ioo_.js";import"./d3-scale-Dl0VFgtV.js";import"./CartesianChart-BteRC4rl.js";import"./chartDataContext-CXqd6BGE.js";import"./CategoricalChart-CdHUt0U8.js";import"./Layer-DhxEcDzW.js";import"./Curve-DSVLafFk.js";import"./types-zXcSMCPW.js";import"./step-BkUkyWe_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BgUudFYn.js";import"./Label-nIa50DhA.js";import"./Text-JRu-Gvgm.js";import"./DOMUtils-BEqLO6hC.js";import"./ZIndexLayer-BzcpQumx.js";import"./useAnimationId-CiOVdLQp.js";import"./ActivePoints-C2MaqzXC.js";import"./Dot-KOqs7h1g.js";import"./RegisterGraphicalItemId-B8C7xs2e.js";import"./ErrorBarContext-DgB1iysu.js";import"./GraphicalItemClipPath-C1lbmTQ1.js";import"./SetGraphicalItem-D1eQX8Ui.js";import"./getRadiusAndStrokeWidthFromDot-DrCQxCSe.js";import"./ActiveShapeUtils-BPh2ccfV.js";import"./CartesianAxis-DZkRw9Hy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
