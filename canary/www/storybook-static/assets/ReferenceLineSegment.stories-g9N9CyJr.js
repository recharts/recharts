import{e}from"./iframe-Dke1PXsj.js";import{R as i}from"./arrayEqualityCheck-DYUGm-S-.js";import{C as a}from"./ComposedChart-DKdsAYQN.js";import{C as p}from"./CartesianGrid-BV0PWeig.js";import{X as n}from"./XAxis-A5wiYRJ2.js";import{Y as s}from"./YAxis-C_nfgnx0.js";import{L as c}from"./Line-BUK5Np1E.js";import{R as d}from"./ReferenceLine-C8eWsjRq.js";import{R as g}from"./RechartsHookInspector-DESYImpk.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D9EPHdLe.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Dr-F8YT1.js";import"./hooks-DCQ9wQGY.js";import"./axisSelectors-Ck1fvBYL.js";import"./zIndexSlice-CdkZF_KN.js";import"./CartesianChart-Db_LpN91.js";import"./chartDataContext-DpjwG2mb.js";import"./CategoricalChart-B37YLYot.js";import"./CartesianAxis-DELVukVs.js";import"./Layer-B0EXSY1R.js";import"./Text-CbLXC33T.js";import"./DOMUtils-DWpZ1fz3.js";import"./Label-BJpGMmXt.js";import"./ZIndexLayer-Dd-3eNlO.js";import"./types-DDM_Xxay.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BSYO7pn7.js";import"./ActivePoints-DYWx7XLw.js";import"./Dot-D-awbIR4.js";import"./RegisterGraphicalItemId-BcZQiTRu.js";import"./ErrorBarContext-Bd_5n0Q0.js";import"./GraphicalItemClipPath-DAk4z-8q.js";import"./SetGraphicalItem-tvSnb31d.js";import"./useAnimationId-CaTohdQl.js";import"./getRadiusAndStrokeWidthFromDot-D9qqWM8m.js";import"./ActiveShapeUtils-CVSjVyuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Be-yypRZ.js";import"./Trapezoid-Cffcn2bg.js";import"./Sector-DEw-Ho6t.js";import"./Symbols-BgJQYoix.js";import"./Curve-DAvXUCHx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CL0r-bPV.js";import"./ChartSizeDimensions-GFw4Kaqh.js";import"./OffsetShower-l-ss4yV0.js";import"./PlotAreaShower-D_tFdLxx.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
