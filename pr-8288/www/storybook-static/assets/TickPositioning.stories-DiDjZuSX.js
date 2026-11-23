import{R as t}from"./iframe-Cwhg5Alw.js";import{R as m}from"./zIndexSlice-Fv3NhYWW.js";import{L as s}from"./LineChart-D_6Fkgq-.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BWipIdmr.js";import{X as l}from"./XAxis-DysdhPMn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./throttle-Du5pgiUX.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./axisSelectors-BXhIMUYz.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-buNRHlZ7.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./getRadiusAndStrokeWidthFromDot-CzKUA028.js";import"./Layer-Cvk4I16t.js";import"./Curve-D9P_AzdW.js";import"./types-B4BwHuKZ.js";import"./step-BizBXnVe.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./Label-DOhfAK-3.js";import"./Text-Cv-7zpF9.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./ActivePoints-SiU-4rgE.js";import"./Dot-DINU8znu.js";import"./activeStyles-C2N6Ab6e.js";import"./useAnimationId-B8-WGiI8.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./ErrorBarContext-C5GJMenk.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./CartesianAxis-lC9jf5Zn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
