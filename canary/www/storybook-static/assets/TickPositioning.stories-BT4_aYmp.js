import{R as t}from"./iframe-Bx8H2Ifg.js";import{R as m}from"./zIndexSlice-CibQQwTH.js";import{L as s}from"./LineChart-CNwdYzOI.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BVmQtC22.js";import{X as l}from"./XAxis-DdmuYybV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcH5jY9T.js";import"./index-D7D5zQI-.js";import"./index--RF86Un6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-atv84skJ.js";import"./isWellBehavedNumber-BjCfjx0l.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXti2BhE.js";import"./index-DZMfkQNN.js";import"./index-CDB7Uuo1.js";import"./renderedTicksSlice-BNkNmyy9.js";import"./axisSelectors-Cw32qcc-.js";import"./d3-scale-DWE49Teg.js";import"./CartesianChart-B8KEQc2q.js";import"./chartDataContext-TCBOpZph.js";import"./CategoricalChart-D_-fj6zl.js";import"./Layer-B1Bv1tpm.js";import"./Curve-dStP5J8a.js";import"./types-Dz5mzedy.js";import"./step-BYuX5L52.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CwxdPZKw.js";import"./Label-DbBEn_Ke.js";import"./Text-DTS3udCG.js";import"./DOMUtils-B-4npwaq.js";import"./ZIndexLayer-C7frmUa_.js";import"./useAnimationId-BtPQFk12.js";import"./ActivePoints-BilhKSxD.js";import"./Dot-bxDDkr32.js";import"./RegisterGraphicalItemId-B2iGTOcQ.js";import"./ErrorBarContext-BI-oQ816.js";import"./GraphicalItemClipPath-B35L0Cvh.js";import"./SetGraphicalItem-CrnQ6XAB.js";import"./getRadiusAndStrokeWidthFromDot-cCEJEDsq.js";import"./ActiveShapeUtils-D4eokJlb.js";import"./RechartsThemeContext-CzAT56ie.js";import"./CartesianAxis-DzJ0MnYC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
