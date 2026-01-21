import{e}from"./iframe-B6AlQnM2.js";import{R as i}from"./arrayEqualityCheck-DOlZ0mCX.js";import{C as a}from"./ComposedChart-CFb7f_na.js";import{C as p}from"./CartesianGrid-BsrOPDfE.js";import{X as n}from"./XAxis-B2vfw6Li.js";import{Y as s}from"./YAxis-BtS_tsxk.js";import{L as c}from"./Line-9lTUlltG.js";import{R as d}from"./ReferenceLine-BO9feSV4.js";import{R as g}from"./RechartsHookInspector-C4bhcvg_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-osVefOLp.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CexAAOIz.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./CartesianAxis-BwDpbQiB.js";import"./Layer-Cdn-3vsr.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./Label-CIaajA0c.js";import"./ZIndexLayer-KOQQKvvO.js";import"./types-C25Y7m2H.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ODr0KtTw.js";import"./ActivePoints-CNKPkIr-.js";import"./Dot-DwI94pSl.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./ErrorBarContext-DYHYd6lU.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./useAnimationId-CsS9GYvF.js";import"./getRadiusAndStrokeWidthFromDot-L9FXfyyd.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQhXboIW.js";import"./Trapezoid-DdjR8tMX.js";import"./Sector-D5Wtmz4T.js";import"./Symbols-Cm6_UFeB.js";import"./Curve-DTUwCS4t.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
