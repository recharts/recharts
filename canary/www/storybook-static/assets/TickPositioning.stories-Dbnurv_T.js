import{R as t}from"./iframe-BTkF_ck3.js";import{R as m}from"./zIndexSlice-DMb1iT4y.js";import{L as s}from"./LineChart-BpSy-ToF.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D7qRA9BJ.js";import{X as l}from"./XAxis-XXOeJL4_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./throttle-C296Coau.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./axisSelectors-CNaIfHAW.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmgL8dDE.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./Layer-DbGB2kqV.js";import"./Curve-sIdkl0eW.js";import"./types-8wxp4ZmL.js";import"./step-DBbPIMUm.js";import"./path-DyVhHtw_.js";import"./LabelList-2kTqXwcO.js";import"./Label-BzrvAI-c.js";import"./Text-TXIjjn1-.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./ActivePoints-KDHW2NPu.js";import"./Dot-Doj0VDvS.js";import"./activeStyles-DacmxpXN.js";import"./useAnimationId-BxLJVC0T.js";import"./dataEntryStyles-CxN2r_W-.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./ErrorBarContext-nR9VGpMB.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getRadiusAndStrokeWidthFromDot-BR6gVE_1.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./CartesianAxis-BPFkFfQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
