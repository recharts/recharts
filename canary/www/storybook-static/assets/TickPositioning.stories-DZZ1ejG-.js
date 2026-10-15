import{R as t}from"./iframe-CcyN1ZV1.js";import{R as m}from"./zIndexSlice-DWTF0hX9.js";import{L as s}from"./LineChart-BmJiHWcR.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BuaXrB5L.js";import{X as l}from"./XAxis-6LjH0TsS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9Dwf27c.js";import"./index-Dyila60U.js";import"./index-AJQJO5x9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTY6OgJi.js";import"./isWellBehavedNumber-CnBZkqHG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-9S0sCc.js";import"./axisSelectors-B4ReTl4S.js";import"./d3-scale-BxouAPuB.js";import"./index-B2XcMOi-.js";import"./index-BVkJtaEu.js";import"./renderedTicksSlice-Bjh8Fjbe.js";import"./index-_YIGzYhu.js";import"./CartesianChart-B3SfFTfT.js";import"./chartDataContext-BSpB3ZZP.js";import"./CategoricalChart-CXFsQjCx.js";import"./Layer-cvLVo1Gu.js";import"./Curve-Cj1AfJKq.js";import"./types-U4cAvHsY.js";import"./step-CVWEfu7h.js";import"./path-DyVhHtw_.js";import"./activeStyles-CeU8zAVc.js";import"./Label-DeeiGPOy.js";import"./Text-GXnWYGAc.js";import"./pageBackground-D_UkCcJZ.js";import"./useId-C9u3rAWe.js";import"./useBackwardsCompatibleTheme-BdBaTXYz.js";import"./ZIndexLayer-CpLPcSfq.js";import"./useAnimationId-J9w0IkU1.js";import"./dataEntryStyles-VGeW2eAl.js";import"./ActivePoints-BB9nBPw6.js";import"./Dot-CXSypbME.js";import"./ErrorBarContext-1RRlDzY7.js";import"./GraphicalItemClipPath-BRUG8_Yr.js";import"./SetGraphicalItem-CtBWbyZo.js";import"./getRadiusAndStrokeWidthFromDot-DQBrP5M-.js";import"./ActiveShapeUtils-D6VvEytF.js";import"./useEffectiveDataKey-D_8eHxuE.js";import"./CartesianAxis-DnpMFCoE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
