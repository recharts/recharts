import{e as t}from"./iframe-DZUAPGWU.js";import{R as s}from"./arrayEqualityCheck-B_Kj_5n3.js";import{L as m}from"./LineChart-BnAuqBrH.js";import{L as c}from"./Line-LYCvK7Jw.js";import{X as d}from"./XAxis-B_pa2cFU.js";import{R as l}from"./RechartsHookInspector-CTfD316c.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTBUcsM2.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CZEU1xAf.js";import"./hooks-CmVGlUZA.js";import"./axisSelectors-DL2NuUaJ.js";import"./zIndexSlice-Wj6Lqt0c.js";import"./CartesianChart-DFIFFZ02.js";import"./chartDataContext-uOI58bDP.js";import"./CategoricalChart-DjpQG7hJ.js";import"./Layer-CUM7VYJb.js";import"./ReactUtils-BwhtQEJo.js";import"./Label-BpGSAoxQ.js";import"./Text-m0PU0Hkx.js";import"./DOMUtils-B-ueGznT.js";import"./ZIndexLayer-48hS6z3u.js";import"./ActivePoints-DBfahspR.js";import"./Dot-Cev7F8Ms.js";import"./types-gnnl7DTW.js";import"./RegisterGraphicalItemId-D7Nyvpen.js";import"./ErrorBarContext-qHTOOodp.js";import"./GraphicalItemClipPath-BFVsLge8.js";import"./SetGraphicalItem-BexwVPUx.js";import"./useAnimationId-eGODZItY.js";import"./getRadiusAndStrokeWidthFromDot-CUXV8xqK.js";import"./ActiveShapeUtils-DDG505Mz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dm59FMII.js";import"./Trapezoid-B65I0G_8.js";import"./Sector-Bi4APoRd.js";import"./Symbols-CJWWl_NZ.js";import"./Curve-OnMyuRM1.js";import"./CartesianAxis-Cxo8uXUJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-R3RI3I7Q.js";import"./ChartSizeDimensions-CMzQU2ij.js";import"./OffsetShower-B5l6vGiv.js";import"./PlotAreaShower-e0vK3Qeg.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
