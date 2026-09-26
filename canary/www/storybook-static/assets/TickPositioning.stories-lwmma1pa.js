import{R as t}from"./iframe-B-cvRuUs.js";import{R as m}from"./zIndexSlice-CMjvBZBG.js";import{L as s}from"./LineChart-BdpW0czq.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Csl9Oq_s.js";import{X as l}from"./XAxis-y94IxigF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CDbcUl2N.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sn-pOtLi.js";import"./axisSelectors-BWIhKYR0.js";import"./d3-scale-DR_59xyj.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./index-43fZ4l-Z.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./Layer-BuVUUS9m.js";import"./Curve-BQq91RH8.js";import"./types-BMpC1VHb.js";import"./step-D9kLagG3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dsd4czhw.js";import"./Label-vDwlhiVA.js";import"./Text-CxPZ3A1T.js";import"./DOMUtils-3oIj9XlO.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./ZIndexLayer-DLKwVcRH.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./ActivePoints-CQAXHfdf.js";import"./Dot-F1dblK_0.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./ErrorBarContext-B6INZz-c.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getRadiusAndStrokeWidthFromDot-B-dIKKPR.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./useGraphicalItemIdentity-BfmGadKt.js";import"./CartesianAxis-k7ozjxp6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
