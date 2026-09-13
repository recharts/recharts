import{R as t}from"./iframe-DyrN_51d.js";import{R as m}from"./zIndexSlice-20W2dW_I.js";import{L as s}from"./LineChart-B2WPUIg4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BSKz0Foo.js";import{X as l}from"./XAxis-BrvsOOq-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Deocn2P3.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkN-Eg1-.js";import"./axisSelectors-Bfr9Dapf.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./Layer-Bhl1Azk1.js";import"./Curve-JRjNlxP0.js";import"./types-D2IYUNPt.js";import"./step-DtwkAaFX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_Ln2HVFG.js";import"./Label-BwFzhvIj.js";import"./Text-CV1ypZeZ.js";import"./DOMUtils-DIhf953N.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./useAnimationId-D9Lt2BUa.js";import"./ActivePoints-C6wxEM4H.js";import"./Dot-CXTwVenc.js";import"./RegisterGraphicalItemId-CVmkVACh.js";import"./ErrorBarContext-Bxc1YjcQ.js";import"./GraphicalItemClipPath-CA7J29cH.js";import"./SetGraphicalItem-lGNUC0L0.js";import"./getRadiusAndStrokeWidthFromDot-u76jjLdq.js";import"./ActiveShapeUtils-DpQnh-5h.js";import"./useGraphicalItemIdentity-CBB7gohW.js";import"./CartesianAxis-vw-O2ROQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
