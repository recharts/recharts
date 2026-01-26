import{e as t}from"./iframe-CWA75x6f.js";import{R as s}from"./arrayEqualityCheck-BbPHrIiT.js";import{L as m}from"./LineChart-DOa8qDiw.js";import{L as c}from"./Line-BNgkxC6S.js";import{X as d}from"./XAxis-DIb7kM4Q.js";import{R as l}from"./RechartsHookInspector-SnjudCfW.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./zIndexSlice-BxnMOy2T.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./Layer-Dyb8NBHJ.js";import"./ReactUtils-BsQxKoDK.js";import"./Label-QjXIZu_1.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./ZIndexLayer-C1tQmmyV.js";import"./ActivePoints-Dmg5s4MQ.js";import"./Dot-Bdf28i8O.js";import"./types-ieTTG77J.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./ErrorBarContext-Bb8vM_ir.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./useAnimationId-CiXad0CX.js";import"./getRadiusAndStrokeWidthFromDot-BEv_HS27.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Sector-CjAZzh8K.js";import"./Symbols-BfpcWYyT.js";import"./Curve-DzqGeZIr.js";import"./CartesianAxis-CEnZCSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
