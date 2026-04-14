import{e}from"./iframe-BSb16JoR.js";import{R as i}from"./arrayEqualityCheck-CKi6Epe4.js";import{C as p}from"./ComposedChart-BAoNDz5r.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-p9dbqERn.js";import{X as s}from"./XAxis-BHgcURqr.js";import{Y as c}from"./YAxis-BjWuIzzh.js";import{L as d}from"./Line-CA2pMRZZ.js";import{R as g}from"./ReferenceLine-Cmyrn2ib.js";import{R as f}from"./RechartsHookInspector-DGV6Ct7j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./immer-BeuBwnCt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./CartesianAxis-DMpwxzt3.js";import"./Layer-DZYtcC2w.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./Label-tcp5Z6P8.js";import"./ZIndexLayer-8dStJwlU.js";import"./types-BvVKlSL_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-v-8YVmpF.js";import"./ActivePoints-CXu9VOq4.js";import"./Dot-CVpd23iI.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./ErrorBarContext-D0q4JY8z.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./useAnimationId-BRGMijHA.js";import"./getRadiusAndStrokeWidthFromDot-CY2Vn6BR.js";import"./ActiveShapeUtils-CQZggNZ2.js";import"./isPlainObject-BiZ1xmFL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6I9faxi.js";import"./Trapezoid-BRhFJlA0.js";import"./Sector-C6wRPjnp.js";import"./Symbols-SIMNkJGH.js";import"./symbol-CgA8__kL.js";import"./step-g_dGXwfI.js";import"./Curve-CJKywfJT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
