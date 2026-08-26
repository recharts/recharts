import{R as t}from"./iframe-C2DTpPl5.js";import{R as n}from"./zIndexSlice-BA0v7Oer.js";import{L as s}from"./LineChart-Bhi8PzzL.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ByVEcfKk.js";import{X as l}from"./XAxis-BQlNmsKr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTXNpE5t.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbTeQzXN.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./axisSelectors-DI7xvKPh.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./CategoricalChart-9si9MCW4.js";import"./Layer-C1G5_il7.js";import"./Curve-BQfn95_j.js";import"./types-C_I2Qi1-.js";import"./step-BpdWCqp5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-3hjUFG-5.js";import"./Label-CwiguCux.js";import"./Text-kmupVaPK.js";import"./DOMUtils-8MPdkl0j.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./ZIndexLayer-BzV-OpAF.js";import"./useAnimationId-en1pQLdR.js";import"./ActivePoints-JZ0NgfaJ.js";import"./Dot-0HxiRhRw.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./ErrorBarContext-DBVQitzE.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./getRadiusAndStrokeWidthFromDot-D3vyunVf.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vCI6MyTM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
