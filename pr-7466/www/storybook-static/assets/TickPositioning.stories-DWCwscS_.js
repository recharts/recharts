import{R as t}from"./iframe-D8_PwwQn.js";import{R as m}from"./zIndexSlice-D3hIREVO.js";import{L as s}from"./LineChart-BrDOYw18.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dtm97aFG.js";import{X as l}from"./XAxis-BMXTihse.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B4u9UiQz.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./get-VOiq-nzz.js";import"./resolveDefaultProps-CDlH06hb.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./axisSelectors-GpzB0aa8.js";import"./d3-scale-B_gxMkbZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./Layer-DIbVHc_A.js";import"./Curve-BnWchyuA.js";import"./types-C59kAQfA.js";import"./step-ebfpa1zR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bi3B25M2.js";import"./Label-DYAIx6Pc.js";import"./Text-Dcw4f9im.js";import"./DOMUtils-BuLBbKXn.js";import"./ZIndexLayer-Dhl_4keR.js";import"./useAnimationId-BP5XfAv2.js";import"./ActivePoints-C2Pj95p4.js";import"./Dot-BJ21P9KG.js";import"./RegisterGraphicalItemId-I3cDOhkS.js";import"./ErrorBarContext-uaJHV0aS.js";import"./GraphicalItemClipPath-DA-AqBBR.js";import"./SetGraphicalItem-Clhc-wET.js";import"./getRadiusAndStrokeWidthFromDot-B9utXb_M.js";import"./ActiveShapeUtils-TdP-NoHF.js";import"./CartesianAxis-AGoux6hi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
