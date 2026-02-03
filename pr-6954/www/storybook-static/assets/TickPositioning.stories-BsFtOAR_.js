import{e as t}from"./iframe-Bsm65lpu.js";import{R as s}from"./arrayEqualityCheck-pVpwfhw9.js";import{L as m}from"./LineChart-w7RA2qP6.js";import{L as c}from"./Line-CrEkPYWQ.js";import{X as d}from"./XAxis-TRGWr1gg.js";import{R as l}from"./RechartsHookInspector-Clmx80vb.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-De8mSPBF.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./zIndexSlice-CyooY4AF.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./Layer-wMrNll4f.js";import"./ReactUtils-Dg23rHrH.js";import"./Label-BJg3D3z3.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./ZIndexLayer-B9ntexjH.js";import"./ActivePoints-RliMcJhX.js";import"./Dot-Cn8YAJTC.js";import"./types-DNFwz7vs.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./ErrorBarContext-ypCLG3pm.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./useAnimationId-dI2bK3sU.js";import"./getRadiusAndStrokeWidthFromDot-DbjDS3xp.js";import"./ActiveShapeUtils-D74FXmj1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CqOp_VNA.js";import"./Trapezoid-DD-HamH_.js";import"./Sector-BjJSeVtU.js";import"./Symbols-lC3l514a.js";import"./Curve-Dwdi27bs.js";import"./CartesianAxis-BtMXIbHW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CU5fePgk.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
