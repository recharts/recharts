import{R as t}from"./iframe-CUml5YCN.js";import{R as m}from"./zIndexSlice-Duug8EOo.js";import{L as s}from"./LineChart-ViH0G8Dy.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-HXIUzKg7.js";import{X as l}from"./XAxis-DS-AJg-5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./throttle-00pBoixS.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./axisSelectors-B2HI9EL2.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CEanJ2qJ.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./Layer-BUAUs1E0.js";import"./Curve-MMF3Mq57.js";import"./types-BdRO-t6j.js";import"./step-CbD7Fw7p.js";import"./path-DyVhHtw_.js";import"./LabelList-1BV2-5OM.js";import"./Label-Co-nrknN.js";import"./Text-C-J7rFVH.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./ActivePoints-DmxPU0dU.js";import"./Dot-Bb0NnVdB.js";import"./activeStyles-DSIZcOzy.js";import"./useAnimationId-CTU-teyX.js";import"./dataEntryStyles-DqljzTne.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getRadiusAndStrokeWidthFromDot-B5I8H9q6.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./useEffectiveDataKey-11clGpT5.js";import"./CartesianAxis-BVj8a-va.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
