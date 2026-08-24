import{R as t}from"./iframe-OWn8oF1A.js";import{R as n}from"./zIndexSlice-CwJzB82v.js";import{L as s}from"./LineChart-ZQmO2lsS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DkBHzBVs.js";import{X as l}from"./XAxis-CCMr852Y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DWaXsXNb.js";import"./index-CrP56Nug.js";import"./index-NwmZ423s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-IEje57sC.js";import"./isWellBehavedNumber-BZ7ES7WU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i1jsdj22.js";import"./index-CM0MgkCu.js";import"./index-C9Vm6jKM.js";import"./axisSelectors-BcSe1XYn.js";import"./d3-scale-CwANqbyk.js";import"./renderedTicksSlice-Sc5c_SM5.js";import"./CartesianChart-D8znfAM6.js";import"./chartDataContext-fxx91kDP.js";import"./CategoricalChart-CCczjnIs.js";import"./Layer-CqyZBrFC.js";import"./Curve-CeJvEjjA.js";import"./types-qoS_u5dB.js";import"./step-D_RWTSpX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_CvB9alV.js";import"./Label-AqmTYyGt.js";import"./Text-P3K5HdaU.js";import"./DOMUtils-DW9lfnAW.js";import"./useId-BS68P7zj.js";import"./useBackwardsCompatibleTheme-B7aULi62.js";import"./ZIndexLayer-C9URSHi7.js";import"./useAnimationId-B2Oo-Kvv.js";import"./ActivePoints-nFn7e4bI.js";import"./Dot-COcUPaQ9.js";import"./RegisterGraphicalItemId-zybFqkLh.js";import"./ErrorBarContext-BicDrW-x.js";import"./GraphicalItemClipPath-BKywaUa4.js";import"./SetGraphicalItem-BiApMsd9.js";import"./getRadiusAndStrokeWidthFromDot-DqQ5ADme.js";import"./ActiveShapeUtils-5n9-MhSP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DE3Bauq7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
