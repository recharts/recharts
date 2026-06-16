import{R as t}from"./iframe-CnwzBkds.js";import{R as m}from"./zIndexSlice-BpzqiTUQ.js";import{L as s}from"./LineChart-Bd8XpCfI.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DZz_6nuU.js";import{X as l}from"./XAxis-DbvG2C4p.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BZhv9pDN.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./get-B8n4OfLY.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxrV5UFS.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./Layer-BZqaMaXh.js";import"./Curve-BxBABYqk.js";import"./types-E3CxlAR_.js";import"./step-DoliEjqo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm-dfr_1.js";import"./Label-CslQeHKW.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./ZIndexLayer-C4T4UXDK.js";import"./useAnimationId-_xLlXMao.js";import"./ActivePoints-PwKQf3Tu.js";import"./Dot-ChNZRKCC.js";import"./RegisterGraphicalItemId-CObDD7O1.js";import"./ErrorBarContext-B0xmk8dk.js";import"./GraphicalItemClipPath-B8izwUTw.js";import"./SetGraphicalItem-DAx4YtHH.js";import"./getRadiusAndStrokeWidthFromDot-BA9mIRYp.js";import"./ActiveShapeUtils-_gRdTSDq.js";import"./CartesianAxis-BmrJk-2O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
