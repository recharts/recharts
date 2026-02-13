import{e as t}from"./iframe-BrTwOhsr.js";import{R as s}from"./arrayEqualityCheck-CfVGBoS6.js";import{L as m}from"./LineChart-DKw09LHR.js";import{L as c}from"./Line-CTSMyiLy.js";import{X as d}from"./XAxis-DQVoLVBJ.js";import{R as l}from"./RechartsHookInspector-wr1qbxN7.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D38DG274.js";import"./hooks-CwxxJRu9.js";import"./axisSelectors-DyCazfsW.js";import"./zIndexSlice-q9T-BB65.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./Layer-B-9J2nmA.js";import"./ReactUtils-BRgMO5-h.js";import"./Label-Bx9GqcNI.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./ZIndexLayer-vpi4acAX.js";import"./ActivePoints-CUqSm5lk.js";import"./Dot-2FtraOao.js";import"./types-CgBItb-S.js";import"./RegisterGraphicalItemId-DG1ATRc8.js";import"./ErrorBarContext-B6qv5CJK.js";import"./GraphicalItemClipPath-BJcM9DJz.js";import"./SetGraphicalItem-DZWKp8RZ.js";import"./useAnimationId-DrcXJvRo.js";import"./getRadiusAndStrokeWidthFromDot-C2LdcGg9.js";import"./ActiveShapeUtils-BDlzWM-D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkEKHy4P.js";import"./Trapezoid-BSnUVGBW.js";import"./Sector-GT6Bl8Sq.js";import"./Symbols-L5mWEGXG.js";import"./Curve-CFG-wGoi.js";import"./CartesianAxis-BnpVD6GC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-8XSHT_-Z.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./OffsetShower-Djp4qM9b.js";import"./PlotAreaShower-B7fNSASi.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
