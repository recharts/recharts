import{R as t}from"./iframe-8C24Tydd.js";import{R as m}from"./zIndexSlice-Dw4Oq4dL.js";import{L as s}from"./LineChart-CJwCn7gu.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CdXXfIAJ.js";import{X as l}from"./XAxis-CI8sx2Rv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./RechartsWrapper-CN9elUVX.js";import"./axisSelectors-wolYJBqC.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./Layer-D45TlyFk.js";import"./Curve-BP7tIwQM.js";import"./types-BD1-xaIs.js";import"./step-lTKWXilO.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-XtYPtKfF.js";import"./Label-D_2s_KcH.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./ActivePoints-Dhsdw6YW.js";import"./Dot-BqqZJubD.js";import"./activeStyles-D92_uiFB.js";import"./useAnimationId-CvLS5yyi.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./ErrorBarContext-CfhLJDta.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getRadiusAndStrokeWidthFromDot-B9BUEQWm.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./CartesianAxis-CNwz3srm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
