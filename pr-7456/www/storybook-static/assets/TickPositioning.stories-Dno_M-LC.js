import{R as t}from"./iframe-B7udcz8q.js";import{R as m}from"./zIndexSlice-CtXztuzC.js";import{L as s}from"./LineChart-C_n017Um.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D-LESVBA.js";import{X as l}from"./XAxis-DiPjyBYO.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-t_2Sayw7.js";import"./index-S5IzzpjS.js";import"./index-rAymN7LL.js";import"./get-Tn0kxTo7.js";import"./resolveDefaultProps-B-U9qcdT.js";import"./isWellBehavedNumber-BlYOzctW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-RU_ueSyC.js";import"./index-BlkuEMuV.js";import"./index-Bml9ugX6.js";import"./renderedTicksSlice-LbTh7uAL.js";import"./axisSelectors-Cj3RkADr.js";import"./d3-scale-NB2wmaCb.js";import"./string-B6fdYHAA.js";import"./CartesianChart-94_kN34Y.js";import"./chartDataContext-BQtkj7i-.js";import"./CategoricalChart-Hmy3E080.js";import"./Layer-CJbCrDcq.js";import"./Curve-CqYDgXu-.js";import"./types-bSkV0tKv.js";import"./step-BfmxT7JJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KJX7W3it.js";import"./Label-DwDNb6uu.js";import"./Text-DijhQOvE.js";import"./DOMUtils-D_cLkzH2.js";import"./ZIndexLayer-D4FmDVUU.js";import"./useAnimationId-Ceo5Qx4Z.js";import"./ActivePoints-03Jr3wsv.js";import"./Dot-CT7VE7Ou.js";import"./RegisterGraphicalItemId-NzEXLpZt.js";import"./ErrorBarContext-DUPlcwIm.js";import"./GraphicalItemClipPath-dDeN-gZy.js";import"./SetGraphicalItem-CbXxnaP2.js";import"./getRadiusAndStrokeWidthFromDot-C1_PUQIm.js";import"./ActiveShapeUtils-CuaFKTcX.js";import"./CartesianAxis-Cfla_J1H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
