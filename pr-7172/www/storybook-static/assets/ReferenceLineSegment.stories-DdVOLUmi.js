import{e}from"./iframe-E-WC41kJ.js";import{R as i}from"./arrayEqualityCheck-BqUzcRut.js";import{C as p}from"./ComposedChart-Cj1Yh8a_.js";import{C as a}from"./CartesianGrid-D9oeCwlR.js";import{X as n}from"./XAxis-BaFlydz6.js";import{Y as s}from"./YAxis-CDciY-WX.js";import{L as c}from"./Line-BoIXwJ9W.js";import{R as d}from"./ReferenceLine-CuoHHgik.js";import{R as g}from"./RechartsHookInspector-DKk-8ET5.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZw5DbVo.js";import"./immer-B2AHHn8G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIczAnOb.js";import"./index-DZtbJ9Ut.js";import"./hooks-DQ5ZrLCC.js";import"./axisSelectors-BVUql3J4.js";import"./d3-scale-CSKw2yvo.js";import"./zIndexSlice-DkBOVcrD.js";import"./renderedTicksSlice-BqXsAF6I.js";import"./CartesianChart-B56zTdxs.js";import"./chartDataContext-CK93mzcE.js";import"./CategoricalChart-aHZNXhsF.js";import"./CartesianAxis-BOHEbUwD.js";import"./Layer-DOBdv7Ak.js";import"./Text-DTbX-dn1.js";import"./DOMUtils-CpAJnaA6.js";import"./Label-C5w0zLuo.js";import"./ZIndexLayer-DVYJjRDY.js";import"./types-CSLfd7k_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BHUem0rc.js";import"./ActivePoints-CdBmP24a.js";import"./Dot-hyCNPvjn.js";import"./RegisterGraphicalItemId-D0Yd-4hn.js";import"./ErrorBarContext-he9UG2nL.js";import"./GraphicalItemClipPath-CjeMVbHl.js";import"./SetGraphicalItem-FieAjGNP.js";import"./useAnimationId-Kk3oGpCX.js";import"./getRadiusAndStrokeWidthFromDot-CyXXFMBh.js";import"./ActiveShapeUtils-DBHiiMuo.js";import"./isPlainObject-CY-G0_BP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bf3uqJQh.js";import"./Trapezoid-B6nQFknd.js";import"./Sector-BB0wVMAH.js";import"./Symbols-B0YB4VCR.js";import"./symbol-BSUu54iG.js";import"./step-DU5CJrCT.js";import"./Curve-DYFm9WRY.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DcwfkASu.js";import"./ChartSizeDimensions-myNJ6iDJ.js";import"./OffsetShower-h4QuBQIC.js";import"./PlotAreaShower-ByNkN2fY.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
