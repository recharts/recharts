import{R as t}from"./iframe-DofrrzSz.js";import{R as m}from"./zIndexSlice-D4jXZr7P.js";import{L as s}from"./LineChart-tOZ7w82P.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BTgeNYF6.js";import{X as l}from"./XAxis-eOTmMW_3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./throttle-Cv7JSN-h.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./RechartsWrapper-E_-kYNca.js";import"./axisSelectors-pqZm8n4V.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRGWuf4p.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./Layer-29jH0q4c.js";import"./Curve-CgPD96Nk.js";import"./types-DwbSI8T9.js";import"./step-B24WZLE3.js";import"./path-DyVhHtw_.js";import"./LabelList-CvvaVn8W.js";import"./Label-CuxsGsNv.js";import"./Text-CCxE4_21.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./ActivePoints-DD_thTv0.js";import"./Dot-OjOZfNpf.js";import"./activeStyles-DFxA9Zbs.js";import"./useAnimationId-DIc4f048.js";import"./dataEntryStyles-DuwvESx8.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./ErrorBarContext-Be2kUHyO.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getRadiusAndStrokeWidthFromDot-Cwz8hFM3.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./CartesianAxis-BejCdWme.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
