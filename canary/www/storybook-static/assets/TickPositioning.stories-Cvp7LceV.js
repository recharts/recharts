import{e as t}from"./iframe-PyjOQzGK.js";import{R as s}from"./arrayEqualityCheck-_dHyT-RZ.js";import{L as m}from"./LineChart-cXiPbeTA.js";import{L as c}from"./Line-DIlKf69S.js";import{X as d}from"./XAxis-P49Iul1Y.js";import{R as l}from"./RechartsHookInspector-D26E9kzM.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C_qiBOfF.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./zIndexSlice-B8KtXzX9.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./Layer-CHnOmiRY.js";import"./ReactUtils-ChAGskY_.js";import"./Label-CvwrqBXQ.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./ZIndexLayer-DUzVAEAH.js";import"./ActivePoints-D6OmLLQF.js";import"./Dot-tggScJ5V.js";import"./types-UMLEboQ_.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./useAnimationId-DVpAz_Js.js";import"./getRadiusAndStrokeWidthFromDot-BrIH8QFd.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./Symbols-Jat4kELE.js";import"./Curve-BookXfP4.js";import"./CartesianAxis-DYXf8O7N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
