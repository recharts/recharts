import{e as t}from"./iframe-DnFqMkNF.js";import{R as m}from"./arrayEqualityCheck-DEUF_nnv.js";import{L as s}from"./LineChart-rtD-rdlF.js";import{L as c}from"./Line-uTxHYT36.js";import{X as d}from"./XAxis-j8l4i7VN.js";import{R as l}from"./RechartsHookInspector-CUfHCEPB.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CrMqOqSJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Wt67h2M.js";import"./hooks-CP5b_m36.js";import"./axisSelectors-CPdHEeWG.js";import"./zIndexSlice-CXYr44g9.js";import"./renderedTicksSlice-BJnCLUzI.js";import"./CartesianChart-CRkgE73v.js";import"./chartDataContext-BDWyCmXn.js";import"./CategoricalChart-IxDmkQ4g.js";import"./Layer-9mC9xCqL.js";import"./ReactUtils-46mNTZgz.js";import"./Label-D7fFgVlW.js";import"./Text-DsmkRe5m.js";import"./DOMUtils-D5GQzw0x.js";import"./ZIndexLayer-B30mlZWZ.js";import"./ActivePoints-B_AgrQap.js";import"./Dot-3Z5bp850.js";import"./types-D_jqkROP.js";import"./RegisterGraphicalItemId-DJudlZJr.js";import"./ErrorBarContext-CbJ9bt-9.js";import"./GraphicalItemClipPath-B-dv77RJ.js";import"./SetGraphicalItem-jeGmKde2.js";import"./useAnimationId-CAcVrmxD.js";import"./getRadiusAndStrokeWidthFromDot-xHG4qJ44.js";import"./ActiveShapeUtils-BUYAPEqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BqCnT0bH.js";import"./Trapezoid-h6fpFzx0.js";import"./Sector-CApGG2LQ.js";import"./Symbols-CDqR_0sP.js";import"./Curve-BT-KWQUD.js";import"./CartesianAxis-CJ5glNJc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B4_M3vQq.js";import"./ChartSizeDimensions-C8KjVzvN.js";import"./OffsetShower-CPo0ir56.js";import"./PlotAreaShower-B87d4Zfp.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,nt as default};
