import{R as t}from"./iframe-Dk6QtUOm.js";import{R as m}from"./zIndexSlice-DIYdct83.js";import{L as s}from"./LineChart-CJd7JyOz.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CeOL_j5O.js";import{X as l}from"./XAxis-DpzwYtrF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D98VVn5G.js";import"./index-DoZuvuq0.js";import"./index-U7zmREmi.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-iHCSp8Qu.js";import"./isWellBehavedNumber-D_eFFsbn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtQEiJyx.js";import"./index-COkLsuib.js";import"./index-DoCUyrNc.js";import"./renderedTicksSlice-1Do5QcM1.js";import"./axisSelectors-D6uzbqkR.js";import"./d3-scale-B2mup6zM.js";import"./CartesianChart-BPW_q9xK.js";import"./chartDataContext-BWXJwi3S.js";import"./CategoricalChart-DDK0QtzY.js";import"./Layer-CriLvMlw.js";import"./Curve-DD_9uNW0.js";import"./types-Df8kiDN0.js";import"./step-74BZyyTl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CpjG7pC9.js";import"./Label-Cv9o4t_y.js";import"./Text-B_RemiZL.js";import"./DOMUtils-C0erXEEq.js";import"./ZIndexLayer-CQwtlObF.js";import"./useAnimationId-BV1Lvx7_.js";import"./ActivePoints-D5mYDCHZ.js";import"./Dot-9qHn4B5a.js";import"./RegisterGraphicalItemId-DRrwgsJN.js";import"./ErrorBarContext-60D9zT8I.js";import"./GraphicalItemClipPath-DJOu5Ece.js";import"./SetGraphicalItem-D9C9m9l_.js";import"./getRadiusAndStrokeWidthFromDot-eEz4aUTs.js";import"./ActiveShapeUtils-CJey3tMT.js";import"./CartesianAxis-BFE0ezxc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
