import{R as t}from"./iframe-Bbgfrsw7.js";import{R as m}from"./zIndexSlice-CQlXcDAc.js";import{L as s}from"./LineChart-4vvckJrH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Brw9uyw8.js";import{X as l}from"./XAxis-B3CRQ6u6.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BnwOCZg8.js";import"./index-C0ODKNwO.js";import"./index-v2biSiVS.js";import"./get-CGUpvFiU.js";import"./resolveDefaultProps-o6njxdDq.js";import"./isWellBehavedNumber-BR76DXAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRt4NQQt.js";import"./index-CECpKJ3H.js";import"./index-Dgahjeym.js";import"./renderedTicksSlice-CbreQ2EV.js";import"./axisSelectors-CDvVNjDS.js";import"./d3-scale-OklfQgrl.js";import"./CartesianChart-QVFJB6ft.js";import"./chartDataContext-CL0ujozD.js";import"./CategoricalChart-DhdplheV.js";import"./Layer-8m_pE-_A.js";import"./Curve-bpXujO2y.js";import"./types-8gz_-wr5.js";import"./step-DyahUGnz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtW6zihY.js";import"./Label-BiRqfMN5.js";import"./Text-Bz6YKmeV.js";import"./DOMUtils-Z9sFA7ma.js";import"./ZIndexLayer-6gPnMOeu.js";import"./useAnimationId-DUfU26_x.js";import"./ActivePoints-CH9TfgfX.js";import"./Dot-DOMfzIFj.js";import"./RegisterGraphicalItemId-BgE_IAVb.js";import"./ErrorBarContext-hic6ppru.js";import"./GraphicalItemClipPath-zba15Mlm.js";import"./SetGraphicalItem-Bny1zUhU.js";import"./getRadiusAndStrokeWidthFromDot-AY2jwcKk.js";import"./ActiveShapeUtils-CLp6ysVz.js";import"./CartesianAxis-D1v9Dkeg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
