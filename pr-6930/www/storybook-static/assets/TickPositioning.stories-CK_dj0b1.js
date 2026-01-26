import{e as t}from"./iframe-BUAHB1JE.js";import{R as s}from"./arrayEqualityCheck-D5cvBvD0.js";import{L as m}from"./LineChart-CjXMrxBR.js";import{L as c}from"./Line-BMwtlPHX.js";import{X as d}from"./XAxis-DeVneqRd.js";import{R as l}from"./RechartsHookInspector-DyBVLxQ5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DB3crruI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./zIndexSlice-DtimrYBU.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./Layer-Cm056lbD.js";import"./ReactUtils-kUjnR9HA.js";import"./Label-DycKUeOS.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./ZIndexLayer-CvBAZeUB.js";import"./ActivePoints-pyP3ozvA.js";import"./Dot-BGsAxFXQ.js";import"./types-ztb1_leN.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./ErrorBarContext-BPyiRwXa.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./useAnimationId-Dqqe1r9b.js";import"./getRadiusAndStrokeWidthFromDot-Dv5iWKAB.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./Symbols-B668NUUf.js";import"./Curve-U_sOEQqK.js";import"./CartesianAxis-Ne59jWj5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
