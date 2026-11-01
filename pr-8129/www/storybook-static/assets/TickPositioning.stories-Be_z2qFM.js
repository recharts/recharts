import{R as t}from"./iframe-0ard7KC3.js";import{R as m}from"./zIndexSlice-D6_sdm0t.js";import{L as s}from"./LineChart-DDL72ruS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D3ULcpWK.js";import{X as l}from"./XAxis-BVBrGZek.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./throttle-1OYicAaw.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./RechartsWrapper-BOxuYrqk.js";import"./axisSelectors-Cr_3x7-m.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLPwnwVf.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-ByhU0DDr.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./Layer-C0FwdD0E.js";import"./Curve-N3TADMlP.js";import"./fillDefinitions-CarsCIb_.js";import"./pageBackground-C8Mqnqon.js";import"./types-DiLmbnVu.js";import"./step-Qo2aOxrQ.js";import"./path-DyVhHtw_.js";import"./LabelList-fTXqNJ75.js";import"./Label-Bzl5TsqO.js";import"./Text-BVN9ck4W.js";import"./DOMUtils-DPHrecH2.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./ActivePoints-DWkJMBKo.js";import"./Dot-CmHWeTnm.js";import"./activeStyles-7ntMjbeG.js";import"./useAnimationId-DI_YvP-u.js";import"./dataEntryStyles-BOdZqKVH.js";import"./Symbols-lsHxNSE5.js";import"./symbol-BoiiS6VD.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./getRadiusAndStrokeWidthFromDot-CnAH_jdf.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./useEffectiveDataKey-BiPIBSbw.js";import"./CartesianAxis-CO2WQovg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const ct={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},dt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,dt as __namedExportsOrder,ct as default};
