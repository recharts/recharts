import{R as t}from"./iframe-B89lyy_-.js";import{R as m}from"./zIndexSlice-BefUx2Nd.js";import{L as s}from"./LineChart-BwnF5vKM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-_gevD_1B.js";import{X as l}from"./XAxis-CSc3N7hL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CABzBelW.js";import"./throttle-BZuMAyb2.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./RechartsWrapper-VgXxR9hf.js";import"./axisSelectors-DR4qXUjK.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgC9WZfP.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./Layer-CVGlZAI2.js";import"./Curve-3TxFGWdO.js";import"./types-DRZvsZyz.js";import"./step-BRjfFT26.js";import"./path-DyVhHtw_.js";import"./LabelList-6ZaFDz_R.js";import"./Label-C15axuMc.js";import"./Text-Dp5nXiQm.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./ActivePoints-BKrA626A.js";import"./Dot-97i04StL.js";import"./activeStyles-CQvoijJ0.js";import"./useAnimationId-CrfHw1CS.js";import"./dataEntryStyles-C4pyloN-.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./ErrorBarContext-CHzFixYj.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getRadiusAndStrokeWidthFromDot-Ddm3Cqxr.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-DOEm-eMS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
