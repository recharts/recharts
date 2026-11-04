import{R as t}from"./iframe-Dpjo95BT.js";import{R as m}from"./zIndexSlice-Bz9FHg4X.js";import{L as s}from"./LineChart-BAstqdXT.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CKn7Dq4x.js";import{X as l}from"./XAxis-BTXqWGnk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./throttle-CgrRaOJs.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./RechartsWrapper-BpzLbtwc.js";import"./axisSelectors-DSxvh8IJ.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C6Aj8r2L.js";import"./index-B-kkbwvl.js";import"./index-CQjokYOg.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./Layer-dEC3lxZB.js";import"./Curve-DESeTImr.js";import"./types-CB3DqoLS.js";import"./step-CnW6P3zf.js";import"./path-DyVhHtw_.js";import"./LabelList-DJoHLEEy.js";import"./Label-DulCRYKX.js";import"./Text-8qrIJHOF.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./ActivePoints-CqWN2Rf1.js";import"./Dot-CyMu6wKR.js";import"./activeStyles-lY2Wk3Pa.js";import"./useAnimationId-DXZwJd8h.js";import"./dataEntryStyles-0BlaoxRC.js";import"./Symbols-DoRtyuXb.js";import"./symbol-WOMD01oz.js";import"./ErrorBarContext-zCJLcJsR.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getRadiusAndStrokeWidthFromDot-BbnzhDU0.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./CartesianAxis-BKOwU02Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
