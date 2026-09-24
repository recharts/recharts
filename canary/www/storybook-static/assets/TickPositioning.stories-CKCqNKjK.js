import{R as t}from"./iframe-B5g3I7ev.js";import{R as m}from"./zIndexSlice-DGvgy2X6.js";import{L as s}from"./LineChart-DZMSaTwR.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CzGLEasr.js";import{X as l}from"./XAxis-BhxgbA2b.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DboQbEZw.js";import"./index-CUp993cz.js";import"./index-BAWIKs3X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNWhfhMM.js";import"./isWellBehavedNumber-C-qAxBmX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bo6Jfh5F.js";import"./axisSelectors-DjPo8MIe.js";import"./d3-scale-C7u8uwmP.js";import"./index-Z4LdU3de.js";import"./index-wrz3e8tU.js";import"./renderedTicksSlice-BmUG22gY.js";import"./index-DQOAurO-.js";import"./CartesianChart-CCYXF9ai.js";import"./chartDataContext-DiPBxGan.js";import"./CategoricalChart-BprHnfNJ.js";import"./Layer-BzSrPOIw.js";import"./Curve-CnFbZ5iA.js";import"./types-4J1YdzxR.js";import"./step-CCbudcDx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAgU6T0J.js";import"./Label-T3V6prm0.js";import"./Text-BYK6re_u.js";import"./DOMUtils-BBurC4Bd.js";import"./useId-BeJfkheV.js";import"./useBackwardsCompatibleTheme-BDfv2Eej.js";import"./ZIndexLayer-C61b4tvj.js";import"./useAnimationId-E9ax1yjD.js";import"./ActivePoints-DonB9ZTw.js";import"./Dot-DrD1foSY.js";import"./RegisterGraphicalItemId-B0kmn4VH.js";import"./ErrorBarContext-CUA3MPdo.js";import"./GraphicalItemClipPath-C2l89xTF.js";import"./SetGraphicalItem-B2TqdHsC.js";import"./getRadiusAndStrokeWidthFromDot-lubS4zqJ.js";import"./ActiveShapeUtils-BHMUVdMS.js";import"./useGraphicalItemIdentity-DeD0kRsv.js";import"./CartesianAxis-CufURV0j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
