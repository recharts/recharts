import{R as t}from"./iframe-E9cTKeRE.js";import{R as m}from"./zIndexSlice-DgjoBcM4.js";import{L as s}from"./LineChart-YopgjNIh.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-oPEUnh-k.js";import{X as l}from"./XAxis-rRrOlgKo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CGWlJj3Y.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./Layer-gCSDlxX6.js";import"./Curve-CKjkPgN2.js";import"./types-BiCnzAm7.js";import"./step-xjRdG8EV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1DMV_LJ.js";import"./Label-BpZfxLrK.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./ZIndexLayer-T104iiSj.js";import"./useAnimationId-DdQ6zElL.js";import"./ActivePoints-Co1l_Ha9.js";import"./Dot-DCqiO5Z7.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getRadiusAndStrokeWidthFromDot-CZrTH9En.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./CartesianAxis-X6rLp4nN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
