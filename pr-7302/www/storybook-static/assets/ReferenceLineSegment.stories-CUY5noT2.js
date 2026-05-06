import{e}from"./iframe-CB3xDsCu.js";import{R as i}from"./arrayEqualityCheck-BR3R0AIc.js";import{C as p}from"./ComposedChart-CS2PtOXx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-LO_JUYCi.js";import{X as s}from"./XAxis-DYQUx0ZR.js";import{Y as c}from"./YAxis-mQ0C3LQl.js";import{L as d}from"./Line-B3-O5qK3.js";import{R as g}from"./ReferenceLine-YLmn9Fi8.js";import{R as f}from"./RechartsHookInspector-YR9f7y3a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D2yjNbgT.js";import"./immer-DVlX7gWW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzH2iSQ0.js";import"./index-dzLlUSBq.js";import"./hooks-DFjGEA5J.js";import"./axisSelectors-BD2wGdYf.js";import"./d3-scale-DBjacL5V.js";import"./zIndexSlice-BDUpIrxI.js";import"./renderedTicksSlice-DTGPDQhB.js";import"./CartesianChart-Cn7O9-Sb.js";import"./chartDataContext-BOo6jc00.js";import"./CategoricalChart-D8l_W_kj.js";import"./CartesianAxis-DkDylqpL.js";import"./Layer-Ch9gTjDA.js";import"./Text-UtkJ3ap3.js";import"./DOMUtils-D031Yf3A.js";import"./Label-Br8zkPUL.js";import"./ZIndexLayer-Cz6Wxl3N.js";import"./types-DISef9EU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-VpSEOCqX.js";import"./ActivePoints-BkwIf39h.js";import"./Dot-DjIPoMxO.js";import"./RegisterGraphicalItemId-CB7Ow1C1.js";import"./ErrorBarContext-CBtIL5Hk.js";import"./GraphicalItemClipPath-CS8dxw6f.js";import"./SetGraphicalItem-gnY-9bMd.js";import"./useAnimationId-DK8UFsIQ.js";import"./getRadiusAndStrokeWidthFromDot-BuBjGrUL.js";import"./ActiveShapeUtils-Bccy3ucd.js";import"./isPlainObject-YEY4Yrhn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5g_Hqxg.js";import"./Trapezoid-C2jtUOqg.js";import"./Sector-CIMNq_ez.js";import"./Symbols-BHAxghFO.js";import"./symbol-B_QpE6oW.js";import"./step-Dz5tlK5n.js";import"./Curve-BUSUbFqo.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DOjZWx7H.js";import"./ChartSizeDimensions-B9c3BCsk.js";import"./OffsetShower-Cd2a_SDI.js";import"./PlotAreaShower-DozSiwxV.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
