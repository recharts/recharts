import{R as t}from"./iframe-BU2uaiQT.js";import{R as m}from"./zIndexSlice-B7Ww3qol.js";import{L as s}from"./LineChart-DxccN4nX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D-cMfYZE.js";import{X as l}from"./XAxis-BnGZclY4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C2wLywwD.js";import"./throttle-CcBx4b7F.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./RechartsWrapper-DJs7SFO5.js";import"./axisSelectors-D_lL4SFu.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmCizgpV.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./getRadiusAndStrokeWidthFromDot-EXJcUNWf.js";import"./Layer-Bk2JkGA1.js";import"./Curve-CAcSf3Dw.js";import"./types-BGeljdCR.js";import"./step-B9D1ky0j.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BQSK-138.js";import"./Label-CM1LVEBq.js";import"./Text-DcepGaW8.js";import"./ZIndexLayer-DWfXGHkj.js";import"./ActivePoints-BVY4H7tc.js";import"./Dot-tdH7rvCo.js";import"./activeStyles-C3KdIcht.js";import"./useAnimationId-DGhOgRI0.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./ErrorBarContext-CIErDLim.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./useEffectiveDataKey-u5bBQA4i.js";import"./CartesianAxis-CdjY0Szh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
