import{R as t}from"./iframe-DTgRciqJ.js";import{R as m}from"./zIndexSlice-DVbLmSgB.js";import{L as s}from"./LineChart-Djjsij8a.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B2ntj69e.js";import{X as l}from"./XAxis-GGlBaKPK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./throttle-DuudF_mE.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./axisSelectors-CM_jcbgZ.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./Layer-uwDyCJ97.js";import"./Curve-CjloRNAl.js";import"./types-D-ekNx8o.js";import"./step-0aJ3gZqs.js";import"./path-DyVhHtw_.js";import"./LabelList-DQdMNFQg.js";import"./Label-ClRWPO-B.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./ActivePoints-q_blbmo6.js";import"./Dot-BnzqQ9RW.js";import"./activeStyles-bjUNghBK.js";import"./useAnimationId-D4a67WLs.js";import"./dataEntryStyles-B-5OPbn7.js";import"./Symbols-D1y9xfwW.js";import"./symbol-C3fOvccx.js";import"./ErrorBarContext-CqakUp6M.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getRadiusAndStrokeWidthFromDot-DXeqlmgf.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
