import{R as t}from"./iframe-CKYCIS4O.js";import{R as m}from"./zIndexSlice-BVoHtIGl.js";import{L as s}from"./LineChart-CcqFjuDQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CLzVB0nb.js";import{X as l}from"./XAxis-BwOdDkr3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DJardr3Q.js";import"./throttle-DZYj3iOj.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./axisSelectors-BFrdOsRC.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Chzts2tO.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./Layer-BD9gaLyO.js";import"./Curve-DLtusU6K.js";import"./types-CmrXNY74.js";import"./step-DsdN-LIO.js";import"./path-DyVhHtw_.js";import"./LabelList-DIy8rGs9.js";import"./Label-V3vvxFs1.js";import"./Text-BLfI62nN.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./dataEntryStyles-DAzCaz5j.js";import"./ActivePoints-CHG1KhF9.js";import"./Dot-ndGMMR9M.js";import"./activeStyles-CNm0YTHp.js";import"./useAnimationId-CSk2ZRUZ.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./ErrorBarContext-Btx89lB4.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./getRadiusAndStrokeWidthFromDot-B53SAheV.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./CartesianAxis-8nzccMKS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
