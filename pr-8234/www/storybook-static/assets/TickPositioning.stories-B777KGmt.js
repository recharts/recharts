import{R as t}from"./iframe-Co7Udrye.js";import{R as m}from"./zIndexSlice-DOrD3bq8.js";import{L as s}from"./LineChart-DrShy5NM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-x-R_Kf7-.js";import{X as l}from"./XAxis-C4fRrpXS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./throttle-Cc_t6lxE.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./RechartsWrapper-CzRhzMVT.js";import"./axisSelectors-e3Zjl34d.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DSuWQh9E.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./Layer-C65liL5F.js";import"./Curve-CTNqeiLd.js";import"./types-CNLXZtmS.js";import"./step-hcE1AvzR.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-KlXlC10J.js";import"./Label-DffVq635.js";import"./Text-DVQecdV7.js";import"./ZIndexLayer-DEtSsufZ.js";import"./ActivePoints-DbiUIU0R.js";import"./Dot-i29ttLNG.js";import"./activeStyles-dIWWSidH.js";import"./useAnimationId-DDJ6zjpL.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./ErrorBarContext-DzV5SKcC.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getRadiusAndStrokeWidthFromDot-Bxe1mCKc.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./useEffectiveDataKey-C3nLlcoP.js";import"./CartesianAxis-CBeq856j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
