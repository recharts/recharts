import{R as t}from"./iframe-C1xjtyup.js";import{R as m}from"./zIndexSlice-CK_7sDhl.js";import{L as s}from"./LineChart-CcRwr0qm.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BWnpbJBY.js";import{X as l}from"./XAxis-yfo5ibqs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BW194xym.js";import"./throttle-DeB2d41h.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./RechartsWrapper-g7B-Y0pQ.js";import"./axisSelectors-CL5t64V7.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfSN9o3v.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./Layer-DgAL7HSK.js";import"./Curve-BG_HxKHy.js";import"./types-BMA5Z4Oj.js";import"./step-pIDDNbPT.js";import"./path-DyVhHtw_.js";import"./LabelList-DlsMy8UK.js";import"./Label-rlFXaG67.js";import"./Text-dB1JvKf5.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./ActivePoints-CaE7-5dE.js";import"./Dot-D0EtM9Lh.js";import"./activeStyles-MqObX4-I.js";import"./useAnimationId-BHg-nTIp.js";import"./dataEntryStyles-CoAbyOEr.js";import"./Symbols-DFo4fcMi.js";import"./symbol-DYSn4PiC.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getRadiusAndStrokeWidthFromDot-Cp452xPJ.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./CartesianAxis-gqJanQvj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
