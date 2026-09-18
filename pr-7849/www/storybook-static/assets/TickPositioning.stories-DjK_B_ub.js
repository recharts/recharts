import{R as t}from"./iframe-BnwEvHVd.js";import{R as m}from"./zIndexSlice-0uCOCVRk.js";import{L as s}from"./LineChart-C0FkMntn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BNCbCy8a.js";import{X as l}from"./XAxis-DhFvYOTq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMoDiTen.js";import"./index-iHvm3R8g.js";import"./index-BwBYuMQi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jnzqtWcb.js";import"./isWellBehavedNumber-f8_DWfMW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ464iUK.js";import"./axisSelectors-DzcPpi8v.js";import"./d3-scale-RQ0i9OyJ.js";import"./index-2KzukYLG.js";import"./index-B3VczQm-.js";import"./renderedTicksSlice-DPG0-UfT.js";import"./index-CKyU5yK6.js";import"./CartesianChart-DbrCyOh2.js";import"./chartDataContext-fkcf5wCl.js";import"./CategoricalChart-BZFbMC-H.js";import"./Layer-BqkYBUjY.js";import"./Curve-DLP8Li3q.js";import"./types-CpWaLS-D.js";import"./step-C-chH2xx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFYzdMOG.js";import"./Label-DKFxt1KE.js";import"./Text-COiNjqEn.js";import"./DOMUtils-DMR3fXS7.js";import"./useId-BMcLep4I.js";import"./useBackwardsCompatibleTheme-eKW0IOYq.js";import"./ZIndexLayer-BALG2eh-.js";import"./useAnimationId-Bx9pchZd.js";import"./ActivePoints-BZ2W0rhn.js";import"./Dot-DTeilXrV.js";import"./RegisterGraphicalItemId-DgVfOOm7.js";import"./ErrorBarContext-DiS9VGRo.js";import"./GraphicalItemClipPath-lDnflq8u.js";import"./SetGraphicalItem-D3Y1kq9t.js";import"./getRadiusAndStrokeWidthFromDot-BZxUZerd.js";import"./ActiveShapeUtils-BQOop8W6.js";import"./useGraphicalItemIdentity-DGhBBybr.js";import"./CartesianAxis-DJc2UaR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
