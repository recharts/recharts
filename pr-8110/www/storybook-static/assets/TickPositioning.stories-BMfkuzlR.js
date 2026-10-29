import{R as t}from"./iframe-LvrC9cNQ.js";import{R as m}from"./zIndexSlice-Chla-YhC.js";import{L as s}from"./LineChart-WhuGpd9s.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DKxaw0aF.js";import{X as l}from"./XAxis-ja2TXwgr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yQwV084p.js";import"./throttle-BrACn0xJ.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./axisSelectors-C8xBMBuJ.js";import"./polarAxisSelectors-DMX56tfl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfvKpIbF.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./Layer-CcIpGH5s.js";import"./Curve-CVAgTuhQ.js";import"./types-Dk8bWHyp.js";import"./step-XOREPbKt.js";import"./path-DyVhHtw_.js";import"./LabelList-DdXF3DfJ.js";import"./Label-DdT2eLCH.js";import"./Text-DGG_TkrL.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./ActivePoints-CCaTRIyk.js";import"./Dot-C6CSCKrA.js";import"./activeStyles-MYCrrU5C.js";import"./useAnimationId-BX5uo1zq.js";import"./dataEntryStyles-CJNDsNBI.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./ErrorBarContext-CdeJUeJW.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getRadiusAndStrokeWidthFromDot-BgrGISNG.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./useEffectiveDataKey-BIhhRaL_.js";import"./CartesianAxis-D4FB0bCi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
