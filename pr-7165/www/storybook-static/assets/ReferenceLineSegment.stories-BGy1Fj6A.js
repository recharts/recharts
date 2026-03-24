import{e}from"./iframe-B-0BbsAX.js";import{R as i}from"./arrayEqualityCheck-D0GIznF3.js";import{C as p}from"./ComposedChart-C4M_-QHd.js";import{C as a}from"./CartesianGrid-DtezH6A5.js";import{X as n}from"./XAxis-DbUi1vPs.js";import{Y as s}from"./YAxis-CX3uKBZw.js";import{L as c}from"./Line-DKVN5x33.js";import{R as d}from"./ReferenceLine-DMI86V55.js";import{R as g}from"./RechartsHookInspector-a5VIBXh4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./immer-16Lk8WhM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./hooks-CLbcsvpt.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./CartesianAxis-DSL26GAi.js";import"./Layer-DmBsOgtN.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./Label-RKv-aJqQ.js";import"./ZIndexLayer-BS0cCdPh.js";import"./types-CmNjNiS4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dc4L6Dcx.js";import"./ActivePoints-D2jfQmP-.js";import"./Dot-DB3UZIXD.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./ErrorBarContext-B191cjJB.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./useAnimationId-C_pphjez.js";import"./getRadiusAndStrokeWidthFromDot-CIfccvwt.js";import"./ActiveShapeUtils-nrA-vqiB.js";import"./isPlainObject-CkRpqEDw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ApzVODqx.js";import"./Trapezoid-Coy9-nSc.js";import"./Sector-Czl1xAWH.js";import"./Symbols-D_XjywmB.js";import"./symbol-mrFX37Pu.js";import"./step-BJ3svLa1.js";import"./Curve-zb7_jZJr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BMYt7gcu.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./OffsetShower-DSqgSq0T.js";import"./PlotAreaShower-DqxXtLCD.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
