import{R as t}from"./iframe-CZFgSFnm.js";import{R as n}from"./zIndexSlice-CTISp4tv.js";import{L as s}from"./LineChart-C-G4OB3D.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CA3HAZ8y.js";import{X as l}from"./XAxis-BfXelSpG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DrSRHMPG.js";import"./index-DX3tFi2I.js";import"./index-BJs7iDzc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-e55Twtbt.js";import"./isWellBehavedNumber-DUdaibLy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvRLJ5Qk.js";import"./index-DYK-T1Xx.js";import"./index-CW1iMe2m.js";import"./axisSelectors-LF1AULtu.js";import"./d3-scale-Brc85VvE.js";import"./renderedTicksSlice-D-MBTj4C.js";import"./CartesianChart-PmCypDgu.js";import"./chartDataContext-CvAeifx3.js";import"./CategoricalChart-dvJV-_Rh.js";import"./Layer-C6R-wMgD.js";import"./Curve-BnTjqqkL.js";import"./types-C_Z_MS2b.js";import"./step-CY8jqLlm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmVERa1o.js";import"./Label-CMeQeDmk.js";import"./Text-Dna8Rnzv.js";import"./DOMUtils-Ba5sbmYY.js";import"./useId-C0SVDnoD.js";import"./useBackwardsCompatibleTheme-xKYPlRvL.js";import"./ZIndexLayer-Xe1tLTY7.js";import"./useAnimationId-DM0V1ULk.js";import"./ActivePoints-B418SJ-y.js";import"./Dot-CWSN_a_c.js";import"./RegisterGraphicalItemId-CA2MokDU.js";import"./ErrorBarContext-BupfeAir.js";import"./GraphicalItemClipPath-BA_NbQWw.js";import"./SetGraphicalItem-DBiVF70L.js";import"./getRadiusAndStrokeWidthFromDot-195plUkS.js";import"./ActiveShapeUtils-CWrsW3HO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-XGvO_fDW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
