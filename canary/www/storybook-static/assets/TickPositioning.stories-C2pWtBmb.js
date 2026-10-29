import{R as t}from"./iframe-z45XlhiT.js";import{R as m}from"./zIndexSlice-rByxwPq2.js";import{L as s}from"./LineChart-8P-q5sEj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BNg9pLDQ.js";import{X as l}from"./XAxis-yN0YOhJu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./RechartsWrapper-CkIduI85.js";import"./axisSelectors-DZIpCEiW.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./Layer-BkChjDHf.js";import"./Curve-DeIAn4Qv.js";import"./types-DMhu4FvJ.js";import"./step-xmYWYAoT.js";import"./path-DyVhHtw_.js";import"./LabelList-BXCYEXvh.js";import"./Label-CmK6wYAn.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./ActivePoints-DXpk42VJ.js";import"./Dot-C9aR3nF8.js";import"./activeStyles-2Y8cHsw1.js";import"./useAnimationId-DASBPoZY.js";import"./dataEntryStyles-CahaEVij.js";import"./Symbols-DOwNTV9x.js";import"./symbol-DbSGDWfT.js";import"./ErrorBarContext-C7sDKK_Q.js";import"./SetGraphicalItem-DAGbOIuL.js";import"./getRadiusAndStrokeWidthFromDot-Pw7eF4Cu.js";import"./ActiveShapeUtils-ChMdJ8i8.js";import"./useEffectiveDataKey-Dw2L82h2.js";import"./CartesianAxis-CzSQFzRC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
