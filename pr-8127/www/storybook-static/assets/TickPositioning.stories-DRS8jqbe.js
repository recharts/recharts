import{R as t}from"./iframe-DG1yZPWZ.js";import{R as m}from"./zIndexSlice-asfAkO72.js";import{L as s}from"./LineChart-DJu7G1A3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DiHguxZv.js";import{X as l}from"./XAxis-Cx1v_iob.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./throttle-QLzPTGhw.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./RechartsWrapper-Bchp_o7p.js";import"./axisSelectors-BLyrYAI0.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-p1mp5kit.js";import"./index-BlTUNZQc.js";import"./index-Bt1QYmkD.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./Layer-DzG8YxQe.js";import"./Curve-DcJDRZ_G.js";import"./types-DqMoKlmp.js";import"./step-U1uI6C26.js";import"./path-DyVhHtw_.js";import"./LabelList-DDOiPfis.js";import"./Label-CP0s7Q77.js";import"./Text-jtW7RKFp.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./ActivePoints-CGsYeesF.js";import"./Dot-BvOm6Swm.js";import"./activeStyles-BM7qy7T1.js";import"./useAnimationId-C_9VGehw.js";import"./dataEntryStyles-B8PPCs32.js";import"./fillDefinitions-C7BJRYTP.js";import"./themeFill-D_uX30kF.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./ErrorBarContext-C4LHoflN.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getRadiusAndStrokeWidthFromDot-Bzdqwx5x.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./CartesianAxis-D2CTuJLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const ct={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},dt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,dt as __namedExportsOrder,ct as default};
