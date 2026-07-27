import{R as t}from"./iframe-DsM5Snoh.js";import{R as m}from"./zIndexSlice-Bw64GR0n.js";import{L as s}from"./LineChart-BMW1p7Cr.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CbSm--Jp.js";import{X as l}from"./XAxis-BP59MRl4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxJwdddW.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B889QW7F.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCACJiBR.js";import"./index-DzyEvv1d.js";import"./index-Dme9ADAC.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./axisSelectors-ZbRe1Fr2.js";import"./d3-scale-5xoUdZXJ.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./Layer-DJ-_hZeS.js";import"./Curve-DtFyS1kb.js";import"./types-C3s_AHHw.js";import"./step-DmgaGYb6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9cLBWaU.js";import"./Label-COWFM_3h.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./ZIndexLayer-8J4UOhVH.js";import"./useAnimationId-C3tGSe4h.js";import"./ActivePoints-jmPmXIfv.js";import"./Dot-F9GzLPgD.js";import"./RegisterGraphicalItemId-B77AAmB8.js";import"./ErrorBarContext-SZrR3kne.js";import"./GraphicalItemClipPath-DkDzGEyf.js";import"./SetGraphicalItem-HftiDrim.js";import"./getRadiusAndStrokeWidthFromDot-Bt2ychRU.js";import"./ActiveShapeUtils-Crk25mmB.js";import"./CartesianAxis-CVbxoQSN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
