import{R as t}from"./iframe-9izd3D9f.js";import{R as m}from"./zIndexSlice-j8GW4H6F.js";import{L as s}from"./LineChart-BmKNyQkU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DeweEXxf.js";import{X as l}from"./XAxis--s8YS1Wl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy12ptOd.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./axisSelectors-C_YuJB8n.js";import"./d3-scale-592QtAt9.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./Layer-CGfY9rzU.js";import"./Curve-CwmLK7S7.js";import"./types-DZJVpBfQ.js";import"./step-BVbRt37Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BaOOJr-i.js";import"./Label-DH_iQkHv.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./ZIndexLayer-CbN30hBP.js";import"./useAnimationId-DwScawE-.js";import"./ActivePoints-DABmwt2C.js";import"./Dot-BOLG4WLO.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./ErrorBarContext-BIj0xSPV.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getRadiusAndStrokeWidthFromDot-BjpuMrzG.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./CartesianAxis-C-mmkXWm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
