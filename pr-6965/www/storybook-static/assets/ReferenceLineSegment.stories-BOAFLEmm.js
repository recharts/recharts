import{e}from"./iframe-D44FkRcR.js";import{R as i}from"./arrayEqualityCheck-CpHRyEoZ.js";import{C as a}from"./ComposedChart-BJqa9Xh0.js";import{C as p}from"./CartesianGrid-ZMyhlhKd.js";import{X as n}from"./XAxis-Bc7aqN4V.js";import{Y as s}from"./YAxis-B19HmFuc.js";import{L as c}from"./Line-CGS71pfF.js";import{R as d}from"./ReferenceLine-PWgB3xFs.js";import{R as g}from"./RechartsHookInspector-BUut-YKB.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9MxTna8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxiJS72.js";import"./hooks-yX9SOuhB.js";import"./axisSelectors-DS2aNONq.js";import"./zIndexSlice-By2Q2sEz.js";import"./CartesianChart-MGBUmmtK.js";import"./chartDataContext-DR37Z2O8.js";import"./CategoricalChart-Dy6guSzL.js";import"./CartesianAxis-CQLQyo5l.js";import"./Layer-Cw02mn90.js";import"./Text-m6BVE9y3.js";import"./DOMUtils-DdnL5-6j.js";import"./Label-BDKklye7.js";import"./ZIndexLayer-6GEHbSGN.js";import"./types-BaOyAkY9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dk5cr1D8.js";import"./ActivePoints-ClEt73cA.js";import"./Dot-CxuisgTC.js";import"./RegisterGraphicalItemId-Cmin2ECj.js";import"./ErrorBarContext-WrFhm3tP.js";import"./GraphicalItemClipPath-CVVuYceY.js";import"./SetGraphicalItem-DNNp47_y.js";import"./useAnimationId-B6KoK7rR.js";import"./getRadiusAndStrokeWidthFromDot-c3x0UpIy.js";import"./ActiveShapeUtils-CvDVndyY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuTYB5sP.js";import"./Trapezoid-B3gZXa3J.js";import"./Sector-CGH7Ttue.js";import"./Symbols-D2aKUPGo.js";import"./Curve-gEApNnTT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D7ezxrhm.js";import"./ChartSizeDimensions-B61qSqob.js";import"./OffsetShower-BfGtxzWE.js";import"./PlotAreaShower-DA_KxbUr.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
