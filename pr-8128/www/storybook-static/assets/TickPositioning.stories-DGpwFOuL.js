import{R as t}from"./iframe-BJZBYlXs.js";import{R as m}from"./zIndexSlice-4kzTBdEO.js";import{L as s}from"./LineChart-C1bMhcCL.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DsC7P6_G.js";import{X as l}from"./XAxis-BODArBrx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./throttle-m042I2dJ.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./RechartsWrapper-xMruxvG5.js";import"./axisSelectors-fPyxXNp-.js";import"./polarAxisSelectors-BW13raLn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fXkyVTj6.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./Layer-BiONajIB.js";import"./Curve-BZZJQhfg.js";import"./fillDefinitions-DzwllWHv.js";import"./pageBackground-OPtbMqw3.js";import"./themeFill-DO9vEba-.js";import"./types-BRBV9Zbz.js";import"./step-C9q08w-O.js";import"./path-DyVhHtw_.js";import"./LabelList-CjXuEtRO.js";import"./Label-BB8sjzzI.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./ZIndexLayer-9eIJN5cX.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./activeStyles-CNDsNUTt.js";import"./useAnimationId-t_dEgl2e.js";import"./dataEntryStyles-O6Ub96yy.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./ErrorBarContext-B2TtUlqL.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./CartesianAxis-DuzHYXrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const dt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},lt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,lt as __namedExportsOrder,dt as default};
