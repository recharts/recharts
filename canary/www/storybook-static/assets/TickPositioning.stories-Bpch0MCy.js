import{e as t}from"./iframe-C_JnpPxC.js";import{R as s}from"./arrayEqualityCheck-sT-8H7T8.js";import{L as m}from"./LineChart-DwQCMcTM.js";import{L as c}from"./Line-CYhOsuSD.js";import{X as d}from"./XAxis-BpjCkomw.js";import{R as l}from"./RechartsHookInspector-C-nhVX4u.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMs63srN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Be1xWQVx.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./zIndexSlice-DoGitowx.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./Layer-WpsYuzZU.js";import"./ReactUtils-D29wERIN.js";import"./Label-CxS5BAR7.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./ZIndexLayer-B-ShVZV-.js";import"./ActivePoints-JrhNNaZp.js";import"./Dot-DS8ISMrc.js";import"./types-BnNymUFW.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./ErrorBarContext-BfsPTak7.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./useAnimationId-BOqolhoS.js";import"./getRadiusAndStrokeWidthFromDot-DoVJFvmy.js";import"./ActiveShapeUtils-Ft9Dseux.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnZDt0bN.js";import"./Trapezoid-D9fBkVlH.js";import"./Sector-H2-tBEz5.js";import"./Symbols-fhVjgxn_.js";import"./Curve-qS1_4eph.js";import"./CartesianAxis-VwfEIEjI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BwFDqC8u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
