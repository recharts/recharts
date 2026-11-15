import{R as t}from"./iframe-aStk4u5G.js";import{R as m}from"./zIndexSlice-fM76ZZLK.js";import{L as s}from"./LineChart-CcdQEiRY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CaBl6OwL.js";import{X as l}from"./XAxis-ENAn7eOB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./throttle-DVcVwqMz.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./axisSelectors-DBp9gfhA.js";import"./polarAxisSelectors-DXerv3y1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6YLYpaJ.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./Layer-BjWQQh7I.js";import"./Curve-DVkDevWh.js";import"./types-DjvBJzo1.js";import"./step-CGueoSlz.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BcmbbFXW.js";import"./Label-CSHZSiX2.js";import"./Text-ByyFOVFg.js";import"./ZIndexLayer-CcTOehup.js";import"./ActivePoints-B2wgHnUT.js";import"./Dot-CNnV5EQe.js";import"./activeStyles-CZ0hnhrg.js";import"./useAnimationId-BKAZWpn4.js";import"./Symbols-CNyA1mlx.js";import"./symbol-C-8FiWil.js";import"./ErrorBarContext-ABxS7lmh.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getRadiusAndStrokeWidthFromDot-D8PfYcSQ.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";import"./CartesianAxis-B4XXfFP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
