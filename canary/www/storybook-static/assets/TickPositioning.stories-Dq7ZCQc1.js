import{R as t}from"./iframe-BpQ7m7wo.js";import{R as m}from"./zIndexSlice-MwSCz61s.js";import{L as s}from"./LineChart-C5I9tXBJ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D_WboHkY.js";import{X as l}from"./XAxis-DE6o4Zll.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dkzrvgSW.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-33rcogn6.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BVbz7wfB.js";import"./axisSelectors-BYDkrwMW.js";import"./d3-scale-Byhs4CrR.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-ByFVwCBJ.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./Layer-DlRoNKW0.js";import"./Curve-B_xnDCFo.js";import"./types-XUWAitbU.js";import"./step-aBp-EU0i.js";import"./path-DyVhHtw_.js";import"./activeStyles-C2IhZeJz.js";import"./Label-BBIpfhf_.js";import"./Text-QB9mhIk2.js";import"./pageBackground-jCojFoRf.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./ZIndexLayer-BrTVgKud.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./ActivePoints-B2GxPwP4.js";import"./Dot-BNcOOzPX.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./getRadiusAndStrokeWidthFromDot-_Kbwexmc.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./useEffectiveDataKey-yqjBtOm2.js";import"./CartesianAxis-1RRtp3t2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
