import{R as t}from"./iframe-Bq5XC69E.js";import{R as m}from"./zIndexSlice-CH_ot-kn.js";import{L as s}from"./LineChart-C5ysMJ7q.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CrvG0Qpi.js";import{X as l}from"./XAxis-CJ__L0zP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./throttle-Ct-rPSxx.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./RechartsWrapper-bjxa_6pD.js";import"./axisSelectors-BOZBH3Nn.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-MB7Peh3q.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./Layer-Cnu5LwAi.js";import"./Curve-BJhBX3YD.js";import"./types-L3YuI5Vg.js";import"./step-CitgC7Ni.js";import"./path-DyVhHtw_.js";import"./LabelList-0FCseyju.js";import"./Label-CGkLvakU.js";import"./Text-BD2GyaNh.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./ActivePoints-BI0eNhe7.js";import"./Dot-DSeqyqR_.js";import"./activeStyles-BIBdu-Bw.js";import"./useAnimationId-DwGbNOL_.js";import"./dataEntryStyles-DVS0RaWt.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./ErrorBarContext-JgTKdwbz.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getRadiusAndStrokeWidthFromDot-BSwjIQeh.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./CartesianAxis-D7JxrcAJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
