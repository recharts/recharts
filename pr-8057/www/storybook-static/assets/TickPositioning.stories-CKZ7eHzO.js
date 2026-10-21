import{R as t}from"./iframe-DTHZbTt-.js";import{R as m}from"./zIndexSlice-CwvyUZAf.js";import{L as s}from"./LineChart-B736fp5e.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BAiXLkVa.js";import{X as l}from"./XAxis-DNNXvE0w.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_YZWlOkj.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./axisSelectors-BOmHsD9v.js";import"./d3-scale-BmJqysRF.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./index-CrHWP68A.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./Layer-DW8M9VQm.js";import"./Curve-BFSDmDlA.js";import"./types-DfO2mLHa.js";import"./step-BNxJFgbJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-C3naVa7V.js";import"./Label-0KYVoNB4.js";import"./Text-D1xR-i1r.js";import"./pageBackground-D-Popr0j.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./ZIndexLayer--bHJC1rV.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./ActivePoints-XYXWcFmf.js";import"./Dot-BoMbzqSu.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getRadiusAndStrokeWidthFromDot-BBjNZ8_1.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./CartesianAxis-Ck9hBcPI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
