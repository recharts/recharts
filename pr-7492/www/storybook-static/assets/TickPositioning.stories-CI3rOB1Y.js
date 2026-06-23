import{R as t}from"./iframe-C3hysSwX.js";import{R as m}from"./zIndexSlice-jLrLCsrp.js";import{L as s}from"./LineChart-CP7JtMd2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BVlSac6Z.js";import{X as l}from"./XAxis-Bz5F1_iJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BNUBbCyS.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./get-4mmuOJ4Q.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./axisSelectors-BKkILLr_.js";import"./d3-scale-Z5oWCNO5.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./Layer-BWZwdMd6.js";import"./Curve-6434-3z9.js";import"./types-B-fiXt0f.js";import"./step-C_2ct0pZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CONL8zCq.js";import"./Label-BY3nn8Dv.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./useAnimationId-CTVdzEbK.js";import"./ActivePoints-iKVh12Ay.js";import"./Dot-B1rRcV2J.js";import"./RegisterGraphicalItemId-o0SeLVTS.js";import"./ErrorBarContext-D24MXSMJ.js";import"./GraphicalItemClipPath-Cs8iTjY6.js";import"./SetGraphicalItem-CmkEoewy.js";import"./getRadiusAndStrokeWidthFromDot-CVqEtKFE.js";import"./ActiveShapeUtils-DTMmpBlQ.js";import"./CartesianAxis-DJwGDBXD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
