import{e}from"./iframe-_5zxKgci.js";import{R as i}from"./arrayEqualityCheck-DLMNeVLZ.js";import{C as p}from"./ComposedChart-UABhjuQ3.js";import{C as a}from"./CartesianGrid-Dzhi_uZZ.js";import{X as n}from"./XAxis-BoiUuQV6.js";import{Y as s}from"./YAxis-DbWdO-Gr.js";import{L as c}from"./Line-WKhxL_g2.js";import{R as d}from"./ReferenceLine-DjJLc8xB.js";import{R as g}from"./RechartsHookInspector-C23NmY-H.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gm3EjVOS.js";import"./immer-BaMlApsY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0zBti2g.js";import"./index-CQESjCWD.js";import"./hooks-vaBYKV_d.js";import"./axisSelectors-i9q5Sg_V.js";import"./d3-scale-CRK2FJTc.js";import"./zIndexSlice-D2iO7-nB.js";import"./renderedTicksSlice-txKnD5_R.js";import"./CartesianChart-DzKjUM75.js";import"./chartDataContext-CjoUdOo7.js";import"./CategoricalChart-DhteKPsq.js";import"./CartesianAxis-t0Xlfasl.js";import"./Layer-BeNKD6uh.js";import"./Text-CefoXcAH.js";import"./DOMUtils-CGXKezNB.js";import"./Label-B3FoJLG-.js";import"./ZIndexLayer-DbY9BdOy.js";import"./types-B4BvwS0U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-u6DOyzs3.js";import"./ActivePoints-CxFHksKT.js";import"./Dot-fP6sFQSZ.js";import"./RegisterGraphicalItemId-kDeQrqEd.js";import"./ErrorBarContext-CvNdI_Cv.js";import"./GraphicalItemClipPath-B6v7KdUQ.js";import"./SetGraphicalItem-To3lbRAY.js";import"./useAnimationId-B5UzlvQm.js";import"./getRadiusAndStrokeWidthFromDot-Boo0lFRT.js";import"./ActiveShapeUtils-DyNfLGNz.js";import"./isPlainObject-DMrThXxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLAaMXbr.js";import"./Trapezoid-DHmjrzCK.js";import"./Sector-CZQdSV3s.js";import"./Symbols-BwFRUbSV.js";import"./symbol-DUbMmeat.js";import"./step-CFxJr1fu.js";import"./Curve-DLvP5FI3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CSd9dO1D.js";import"./ChartSizeDimensions-B7JadKwb.js";import"./OffsetShower-_I7-ZVXC.js";import"./PlotAreaShower-Duhke6Yi.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
