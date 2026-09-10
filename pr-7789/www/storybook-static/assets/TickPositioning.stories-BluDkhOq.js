import{R as t}from"./iframe-UgRt0vcp.js";import{R as m}from"./zIndexSlice-B7qjUnDG.js";import{L as s}from"./LineChart-DMQN47zq.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dipve1CO.js";import{X as l}from"./XAxis-4W0ht619.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DuwfTuib.js";import"./index-Bv-jl5LW.js";import"./index-Bvm9MNt8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcWlbHp.js";import"./isWellBehavedNumber-ysV-_8Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EuqqM12a.js";import"./axisSelectors-DIh-l85l.js";import"./d3-scale-Cn-9twYV.js";import"./index-BUuQQxxl.js";import"./index-BtCdhKy_.js";import"./renderedTicksSlice-rspC5CNs.js";import"./index-NRyuBWjq.js";import"./CartesianChart-DoGcO1A-.js";import"./chartDataContext-BKXebmD7.js";import"./CategoricalChart-BbYkYnOT.js";import"./Layer-C1js-4J0.js";import"./Curve-BaJYpKaM.js";import"./types-BQX4mfvu.js";import"./step-BAtXOj-E.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BpS1OD2e.js";import"./Label-Ct2bC8Rh.js";import"./Text-CIcS1Cht.js";import"./DOMUtils-hZ-h7K-C.js";import"./useId-nYKyJk56.js";import"./useBackwardsCompatibleTheme-DJK5Z4IB.js";import"./ZIndexLayer-A1V94IPq.js";import"./useAnimationId-DPVBY7S8.js";import"./ActivePoints-BWaxPFAB.js";import"./Dot-DphG9sPw.js";import"./RegisterGraphicalItemId-Cu5milgY.js";import"./ErrorBarContext-g5uku85c.js";import"./GraphicalItemClipPath-C-zprDgr.js";import"./SetGraphicalItem-1hTkIljj.js";import"./getRadiusAndStrokeWidthFromDot-CKTCh4hG.js";import"./ActiveShapeUtils-B_uanDrb.js";import"./useGraphicalItemIdentity-DyOG4GgF.js";import"./CartesianAxis-RT1RuzF2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
