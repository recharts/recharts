import{e}from"./iframe-C6Uu7pTN.js";import{R as i}from"./arrayEqualityCheck-CwnCehta.js";import{C as p}from"./ComposedChart-ChY5wym6.js";import{C as a}from"./CartesianGrid-CG2ujgu_.js";import{X as n}from"./XAxis-DYlJSFAX.js";import{Y as s}from"./YAxis-BFKySEYM.js";import{L as c}from"./Line-DBBe-eb5.js";import{R as d}from"./ReferenceLine-CyNW8omJ.js";import{R as g}from"./RechartsHookInspector-DK8LEn3K.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFs3c8XE.js";import"./immer-BQbVNYZa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGLJriAG.js";import"./index-86WMnZat.js";import"./hooks-CPOFWC30.js";import"./axisSelectors-CvaRXDpT.js";import"./d3-scale-jTFhmIQC.js";import"./zIndexSlice-TqQJPXuj.js";import"./renderedTicksSlice-BbR9AX3S.js";import"./CartesianChart-Df2fxLuG.js";import"./chartDataContext-78iSRkXw.js";import"./CategoricalChart-DiJF7AWc.js";import"./CartesianAxis-CSfXt17s.js";import"./Layer-lr_Myov5.js";import"./Text-D3aSBSTN.js";import"./DOMUtils-C3fhmnrv.js";import"./Label-BWxvsGM2.js";import"./ZIndexLayer-BGg3LDJH.js";import"./types-LVTyj2cP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-De_gzh57.js";import"./ActivePoints-B8JphRK3.js";import"./Dot-Dz4sxWoj.js";import"./RegisterGraphicalItemId-DjVfXSwO.js";import"./ErrorBarContext-_q0KzTsJ.js";import"./GraphicalItemClipPath-enSk32wK.js";import"./SetGraphicalItem-BpIjVc9U.js";import"./useAnimationId-B1cyGcAu.js";import"./getRadiusAndStrokeWidthFromDot-fX_t_PhE.js";import"./ActiveShapeUtils-H4GnlVn4.js";import"./isPlainObject-BW25J73Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgIvpV-o.js";import"./Trapezoid-Cqle6yIN.js";import"./Sector-pDHcay4d.js";import"./Symbols-CHqyFdvp.js";import"./symbol-B6JyGFlS.js";import"./step-DybRLWtN.js";import"./Curve-D9DtbUHf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bw3U1Qlv.js";import"./ChartSizeDimensions-Bo_lxHZc.js";import"./OffsetShower-CHRjZmG4.js";import"./PlotAreaShower-BfZVYUAY.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
