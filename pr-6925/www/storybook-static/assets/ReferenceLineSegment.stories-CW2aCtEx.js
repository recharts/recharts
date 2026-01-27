import{e}from"./iframe-Db4zTqbk.js";import{R as i}from"./arrayEqualityCheck-3CRW7fvn.js";import{C as a}from"./ComposedChart-b8DT5qpX.js";import{C as p}from"./CartesianGrid-B9AADoff.js";import{X as n}from"./XAxis-2YmY08Fs.js";import{Y as s}from"./YAxis-C58kpuB1.js";import{L as c}from"./Line-CQ-0i_va.js";import{R as d}from"./ReferenceLine-QybkYzSR.js";import{R as g}from"./RechartsHookInspector-CrEL5moc.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9skBriC.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-FQCKz-X1.js";import"./hooks-ryz_uIK2.js";import"./axisSelectors-blz0ZUDW.js";import"./zIndexSlice-CrYwnyyD.js";import"./CartesianChart-YyNzumgC.js";import"./chartDataContext-C75QL-LK.js";import"./CategoricalChart-CqxC4z6s.js";import"./CartesianAxis-CUgWXt_R.js";import"./Layer-Cflbp2vf.js";import"./Text-B-BVNWA6.js";import"./DOMUtils-CXvwiz2o.js";import"./Label-CqrigLpP.js";import"./ZIndexLayer-BUznzSNs.js";import"./types-BTyyhFf_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-OGo3X-P4.js";import"./ActivePoints-6rHP0Mli.js";import"./Dot-CXLbb6f5.js";import"./RegisterGraphicalItemId-Dl15i-mE.js";import"./ErrorBarContext-EfIpxhpK.js";import"./GraphicalItemClipPath-BZwY5GCl.js";import"./SetGraphicalItem-DZCf9fqS.js";import"./useAnimationId-CxVKnk1J.js";import"./getRadiusAndStrokeWidthFromDot-BNWRpCju.js";import"./ActiveShapeUtils-DuwLTnau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C_uWIMPJ.js";import"./Trapezoid-m-4m64o7.js";import"./Sector-CU3fNncw.js";import"./Symbols-G_hIZhWd.js";import"./Curve-D50n1SBe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bol23Ne6.js";import"./ChartSizeDimensions-CMbAaaLi.js";import"./OffsetShower-n4gU0hEx.js";import"./PlotAreaShower-Dgj_k8x2.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
