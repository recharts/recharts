import{R as t}from"./iframe-w7qCbIlq.js";import{R as m}from"./zIndexSlice-BtZQ5xih.js";import{L as s}from"./LineChart-Bd8MFQyA.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BlbeS46W.js";import{X as l}from"./XAxis-8n0ix597.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KQ-EWGZj.js";import"./index-BmGe_VQx.js";import"./index-BBIhqOXx.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BXXLLFZs.js";import"./isWellBehavedNumber-BLtoVg4o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJCCLnSy.js";import"./index-Ddi-T72V.js";import"./index-C1u3rFhR.js";import"./renderedTicksSlice-TeAVrZEF.js";import"./axisSelectors-DudJ2V7b.js";import"./d3-scale-DHyfTYAT.js";import"./CartesianChart-BbPcQF_v.js";import"./chartDataContext-d_tiIYhw.js";import"./CategoricalChart-C5vKFxAI.js";import"./Layer-C8MJqdtw.js";import"./Curve-858tLF7S.js";import"./types-0ytIGtz9.js";import"./step-BY4MZZhT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DtqXu7a9.js";import"./Label-Bwto3iA9.js";import"./Text-Bii4Z9SU.js";import"./DOMUtils-BHtgPnwB.js";import"./ZIndexLayer-BipLpo9Z.js";import"./useAnimationId-BLBs87N6.js";import"./ActivePoints-MWBllTj-.js";import"./Dot-DqpKuKrG.js";import"./RegisterGraphicalItemId-BMqZVFge.js";import"./ErrorBarContext-Ddig5LAI.js";import"./GraphicalItemClipPath-CJg2XcFN.js";import"./SetGraphicalItem-CaM-dNjz.js";import"./getRadiusAndStrokeWidthFromDot-Bj2pWrUE.js";import"./ActiveShapeUtils-pA3gak5X.js";import"./CartesianAxis-CT_UcdRd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
