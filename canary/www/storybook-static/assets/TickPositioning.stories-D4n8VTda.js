import{R as t}from"./iframe-CqRpABaK.js";import{R as m}from"./zIndexSlice-KvzMEBh7.js";import{L as s}from"./LineChart-vlbdjaP3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-8cbiPC_u.js";import{X as l}from"./XAxis-BSRwnZMq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BjLrRmHo.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./isWellBehavedNumber-CUSt0J5q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Q6-Ges1c.js";import"./axisSelectors-Bh6roEOt.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./Layer-g-5IuUpa.js";import"./Curve-BcRTskgb.js";import"./types-CC73-uTJ.js";import"./step-BuSHEP_V.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBpEgVGL.js";import"./Label-IjPv9f7P.js";import"./Text-CXo2baHO.js";import"./DOMUtils-DJUl9uN8.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./ZIndexLayer-D34xXT-L.js";import"./useAnimationId-BJd8TCij.js";import"./ActivePoints-CyBSG7Nh.js";import"./Dot-CMcfKVB4.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getRadiusAndStrokeWidthFromDot-5mvy0zL6.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";import"./CartesianAxis-NW0JLUgH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
