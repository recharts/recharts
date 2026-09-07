import{R as t}from"./iframe-CnWp8UDJ.js";import{R as m}from"./zIndexSlice-Bxeoa1fM.js";import{L as s}from"./LineChart-DC_GfjNP.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B_yZhlkz.js";import{X as l}from"./XAxis-ChzUm0qK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-aLzKR_Gj.js";import"./index-39D9i7_F.js";import"./index-Data0V-G.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-omDmhEQP.js";import"./isWellBehavedNumber-B6aemPPP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLeW-6qK.js";import"./axisSelectors-LX60wKXF.js";import"./d3-scale-C7Jq6zIj.js";import"./index-gtYqs59B.js";import"./index-Dehtp_44.js";import"./renderedTicksSlice-BKgb7qhp.js";import"./index-Doynhu3_.js";import"./CartesianChart-DsDmw2jX.js";import"./chartDataContext-CO0CX1GC.js";import"./CategoricalChart-CM4dP2j4.js";import"./Layer-C_mDLxAs.js";import"./Curve-BQDaiCsn.js";import"./types-BIFao3Et.js";import"./step-4VYt7eZC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dbq_Hz9T.js";import"./Label-WwV9YhCJ.js";import"./Text-B0OOyN3r.js";import"./DOMUtils-CiASkXFs.js";import"./useId-EGP6ZE8R.js";import"./useBackwardsCompatibleTheme-UXRLdwDp.js";import"./ZIndexLayer-BZ4idX5Z.js";import"./useAnimationId-Maj24DOj.js";import"./ActivePoints-C5ifQD97.js";import"./Dot-CVjhwEFH.js";import"./RegisterGraphicalItemId-F3i4J8HM.js";import"./ErrorBarContext-CnG1miAN.js";import"./GraphicalItemClipPath-BoXmuKsm.js";import"./SetGraphicalItem-BDu63G4F.js";import"./getRadiusAndStrokeWidthFromDot-DT21Og_Z.js";import"./ActiveShapeUtils-BhVsu49r.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CwBaIU9L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
