import{e as t}from"./iframe-DG5XGAD6.js";import{R as s}from"./arrayEqualityCheck-j51cHR5x.js";import{L as m}from"./LineChart-CfR1t9mk.js";import{L as c}from"./Line-B4ZoNHaw.js";import{X as d}from"./XAxis-oYzB5LXw.js";import{R as l}from"./RechartsHookInspector-YgQTDZfw.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DwLx5uNW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwgBVkto.js";import"./hooks-CabgqhJI.js";import"./axisSelectors-pumdcMrp.js";import"./zIndexSlice-DIZTBSXC.js";import"./CartesianChart-DBiWbn6Y.js";import"./chartDataContext-CNLpatE7.js";import"./CategoricalChart-DngyMm0O.js";import"./Layer-CzlbLnCA.js";import"./ReactUtils-Vfgvf3cC.js";import"./Label-bn2tJ_cj.js";import"./Text-BWrPtZHP.js";import"./DOMUtils-Qi6quj9W.js";import"./ZIndexLayer-CKRqVJn0.js";import"./ActivePoints-Bx-JcGPq.js";import"./Dot-BL1VekhN.js";import"./types-D0CjTngR.js";import"./RegisterGraphicalItemId-BNmuyZFV.js";import"./ErrorBarContext-DyIY829R.js";import"./GraphicalItemClipPath-C48puZ8B.js";import"./SetGraphicalItem-Dt76N-O-.js";import"./useAnimationId-NyrgIauS.js";import"./getRadiusAndStrokeWidthFromDot-CqQuGbib.js";import"./ActiveShapeUtils-Cyi76-oO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-xQMUTm.js";import"./Trapezoid-C7Z3OQT2.js";import"./Sector-B5if7fUR.js";import"./Symbols-C5H0HNIV.js";import"./Curve-BnD4_LTQ.js";import"./CartesianAxis-a2JFC2mr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-ZiVRns4Q.js";import"./ChartSizeDimensions-C2G7tyo6.js";import"./OffsetShower-BRHEzN4x.js";import"./PlotAreaShower-nvVM3hzT.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
