import{R as t}from"./iframe-KBGw0lyx.js";import{R as m}from"./zIndexSlice-C-xeYs44.js";import{L as s}from"./LineChart-DFvx_vfn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CeC9baUi.js";import{X as l}from"./XAxis-ok9FfAxX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kFtONSvK.js";import"./throttle-BjGPoFhQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./RechartsWrapper-CcktegzB.js";import"./axisSelectors-CEjenqk6.js";import"./polarAxisSelectors-BG_XMkul.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CcHRZEud.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./Layer-Du8JdPXM.js";import"./Curve-r2B0eutN.js";import"./types-BKfndQQ3.js";import"./step-BbiIrKZ6.js";import"./path-DyVhHtw_.js";import"./LabelList-DauBxbTi.js";import"./Label-B98IZvVF.js";import"./Text-CUmSOGFL.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./ActivePoints-CGR7NTAp.js";import"./Dot-BPCwUkSx.js";import"./activeStyles-C4Umy--5.js";import"./useAnimationId-BAlrP4Yc.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./ErrorBarContext-CuOMSbvd.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./getRadiusAndStrokeWidthFromDot-Cv-NOSS3.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./CartesianAxis-ZwQJNcj_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
