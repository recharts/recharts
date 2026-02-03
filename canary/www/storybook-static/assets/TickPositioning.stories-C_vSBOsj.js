import{e as t}from"./iframe-Dw3q2J_C.js";import{R as s}from"./arrayEqualityCheck-CyZN96pQ.js";import{L as m}from"./LineChart-C1EJvARN.js";import{L as c}from"./Line-c1IAKOzu.js";import{X as d}from"./XAxis-BkGhyUaZ.js";import{R as l}from"./RechartsHookInspector-CjBXEdYk.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BxCpSvqF.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./zIndexSlice-CgOi6Kpf.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./Layer-kgIv22jT.js";import"./ReactUtils-CRr71kpZ.js";import"./Label-BTeufvbK.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./ZIndexLayer-QOZqstTD.js";import"./ActivePoints-D4tj1Ft8.js";import"./Dot-U-LLWdez.js";import"./types-BJHbMGwM.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./ErrorBarContext-CH81KESR.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./useAnimationId-BJQnqM8-.js";import"./getRadiusAndStrokeWidthFromDot-DUMZDB8N.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdkJqkle.js";import"./Trapezoid-BYebN7Pj.js";import"./Sector-C3UDCS_F.js";import"./Symbols-CuhIBlUX.js";import"./Curve-DlYk4-Kk.js";import"./CartesianAxis-Dx05xS85.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
