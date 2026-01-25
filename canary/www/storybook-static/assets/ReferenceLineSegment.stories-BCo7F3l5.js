import{e}from"./iframe-zYnk8EOr.js";import{R as i}from"./arrayEqualityCheck-R2aAAI7x.js";import{C as a}from"./ComposedChart-D5xvMhhv.js";import{C as p}from"./CartesianGrid-qx_M6Mk1.js";import{X as n}from"./XAxis-BSJK083u.js";import{Y as s}from"./YAxis--5gqcMjD.js";import{L as c}from"./Line-CoUUANrs.js";import{R as d}from"./ReferenceLine-CxoZXhm5.js";import{R as g}from"./RechartsHookInspector-BM6dBg77.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./CartesianAxis-BwSMeEYw.js";import"./Layer-B9ovT-3z.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./Label-GsPpBxAc.js";import"./ZIndexLayer-DbRKS04n.js";import"./types-BQ3BmiiK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-TEkJxkkD.js";import"./ActivePoints-CohCjn8B.js";import"./Dot-D2_ksVUP.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./ErrorBarContext-Bboddv8p.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./useAnimationId-C9zF9Z14.js";import"./getRadiusAndStrokeWidthFromDot-DGiV6eq7.js";import"./ActiveShapeUtils-B-4Mqq4H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWuLgpNw.js";import"./Trapezoid-Ciecc0SZ.js";import"./Sector-CRX25Q97.js";import"./Symbols-CvhTj7bZ.js";import"./Curve-BERjiOgY.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
