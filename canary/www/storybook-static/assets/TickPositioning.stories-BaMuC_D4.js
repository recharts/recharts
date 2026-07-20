import{R as t}from"./iframe-C7qTZtPI.js";import{R as m}from"./zIndexSlice-BcOfmYYd.js";import{L as s}from"./LineChart-DKLubnGe.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-mFW-YMe2.js";import{X as l}from"./XAxis-CgvkfXIs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DLOScDmO.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ce1865_D.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./renderedTicksSlice-CqCAs39i.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./Layer-y2Nfuyvg.js";import"./Curve-DiMbH13e.js";import"./types-Bx79eQJf.js";import"./step-THYeIvAN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HRihbpAW.js";import"./Label-DS1cnk1C.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./ZIndexLayer-B8jqXSnt.js";import"./useAnimationId-D4WzgVDK.js";import"./ActivePoints-GVhqjKv2.js";import"./Dot-nbmu8EHp.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./ErrorBarContext-BiuHMfT3.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getRadiusAndStrokeWidthFromDot-DdigNmch.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./CartesianAxis-C2LUMKQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
