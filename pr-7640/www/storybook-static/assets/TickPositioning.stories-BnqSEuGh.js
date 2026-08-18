import{R as t}from"./iframe-tjnA4ZJo.js";import{R as m}from"./zIndexSlice-C0N8aUUS.js";import{L as s}from"./LineChart-BppoQF-g.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cwid8INE.js";import{X as l}from"./XAxis-C_h8MhtB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BG5Cbw48.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./axisSelectors-kO8GHbei.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./Layer-BffJbX--.js";import"./Curve-CyJ2f9jM.js";import"./types-B1JXlqQN.js";import"./step-OCCE-5TJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6MMSMcYJ.js";import"./Label-CYvlsQvC.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./ZIndexLayer-J8-hOCa0.js";import"./useAnimationId-1S4zeXgZ.js";import"./ActivePoints-BiBnoeEb.js";import"./Dot-3hZpkGF4.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getRadiusAndStrokeWidthFromDot-CaYPlNA5.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CBg_pQkI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
