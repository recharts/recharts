import{R as t}from"./iframe-CGGZfnCV.js";import{R as m}from"./zIndexSlice-BqswsCB2.js";import{L as s}from"./LineChart-CI15s-fZ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B9-Nh0Th.js";import{X as l}from"./XAxis-D0RGLID7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DB16si7p.js";import"./throttle-CPPktxFr.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./axisSelectors-ClqRDW4l.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH0gLY6W.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./getRadiusAndStrokeWidthFromDot-B05KFCuA.js";import"./Layer-BEhjTHM-.js";import"./Curve-CCF7pO5F.js";import"./types-D01_wvtH.js";import"./step-CUQPzItX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./Label-BodzTsEv.js";import"./Text-BWSViN8b.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./ActivePoints-xFZqNI2F.js";import"./Dot-DwUXPQPe.js";import"./activeStyles-C8mJMGZo.js";import"./useAnimationId-CKpnbEUf.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./ErrorBarContext-C-uWWZZj.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./CartesianAxis-BDMs3FLV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
