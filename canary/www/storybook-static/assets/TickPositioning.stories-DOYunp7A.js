import{R as t}from"./iframe-B9NgERoL.js";import{R as m}from"./zIndexSlice-CeMrsmMa.js";import{L as s}from"./LineChart-BUiD6lRJ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line--rEciFbL.js";import{X as l}from"./XAxis-aLbTU0vL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaANxDja.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIufO86S.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./axisSelectors-Cp9fRWWc.js";import"./d3-scale-CeApqfqF.js";import"./CartesianChart-D1OHX_Vn.js";import"./chartDataContext-MrXPhuTJ.js";import"./CategoricalChart-BaN3vUEH.js";import"./Layer-C_3qb5EZ.js";import"./Curve-VzKcWA61.js";import"./types-fCUwHeLW.js";import"./step-D7ajG_sH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-FRFA-Z.js";import"./Label-D0wu2lTJ.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./ZIndexLayer-B-abFFm7.js";import"./useAnimationId-Dul1SXp-.js";import"./ActivePoints-CC4YCm4F.js";import"./Dot-CinH8xYi.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getRadiusAndStrokeWidthFromDot-CFmXYxCt.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./CartesianAxis-CU4wTzgV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
