import{R as t}from"./iframe-CLpUHFUx.js";import{R as m}from"./zIndexSlice-ih_i1g5t.js";import{L as s}from"./LineChart-BqbYZzD5.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CDweeEof.js";import{X as l}from"./XAxis-DQukB1wG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLd1kjXB.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DTakvVP9.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./axisSelectors-DcdgEKfW.js";import"./d3-scale-BxXYUMYM.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./Layer-3AQvPOBc.js";import"./Curve-DZJekjpR.js";import"./types-BtWOZotP.js";import"./step-_f2gFda3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BvAtBQX7.js";import"./Label-Cri2SigJ.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./ZIndexLayer-DoU1T_G7.js";import"./useAnimationId-NKiMzI6a.js";import"./ActivePoints-B2iIRtsT.js";import"./Dot-rjCZu1cP.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./ErrorBarContext-DOU6usMR.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getRadiusAndStrokeWidthFromDot-b1AZaPVX.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./CartesianAxis-Dv_zGlnO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
