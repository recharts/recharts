import{R as t}from"./iframe-BECHMrDZ.js";import{R as m}from"./zIndexSlice-ZZYOt5ZJ.js";import{L as s}from"./LineChart-CBE2b039.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-NU5SWiL4.js";import{X as l}from"./XAxis-Dnf9N0V4.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DNeblauM.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./get-CPwaVA9l.js";import"./resolveDefaultProps-BtqON1I7.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./Layer-ESOqu-Gc.js";import"./Curve-Bn_0oI69.js";import"./types-n4LQ-b_y.js";import"./step-DbGI_ztS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CQmyu7n-.js";import"./Label-VQOoexxL.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./ZIndexLayer-dzP4UBMr.js";import"./useAnimationId-BT4jYtUB.js";import"./ActivePoints-Cmc10X0Q.js";import"./Dot-C7DD26qy.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./ErrorBarContext-D2jpma0H.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getRadiusAndStrokeWidthFromDot-C9KiXcw0.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./CartesianAxis-BTVfzskq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
