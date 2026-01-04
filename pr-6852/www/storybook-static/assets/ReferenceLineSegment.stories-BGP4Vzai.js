import{e}from"./iframe-CCMJ-7V4.js";import{R as i}from"./arrayEqualityCheck-EU51TFpx.js";import{C as a}from"./ComposedChart-C6h9PwcP.js";import{C as p}from"./CartesianGrid-DyGIfdDj.js";import{X as n}from"./XAxis-R7Vv75w5.js";import{Y as s}from"./YAxis-BsjRKKqi.js";import{L as c}from"./Line-DHYMeVHf.js";import{R as d}from"./ReferenceLine-DYxzF2uT.js";import{R as g}from"./RechartsHookInspector-CT184sGb.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BNCKdsdg.js";import"./PolarUtils-JMmyzBBh.js";import"./RechartsWrapper-Dlfj2KI1.js";import"./hooks--Mj4Y-hQ.js";import"./axisSelectors-Bwyl_l9L.js";import"./zIndexSlice-D6TWR_2-.js";import"./CartesianChart-BWh3hsiv.js";import"./chartDataContext-BB33_ty3.js";import"./CategoricalChart-Cxiu0ZqS.js";import"./CartesianAxis-CjO0kaDg.js";import"./Layer-BEqohIF5.js";import"./Text-DT_EImOw.js";import"./DOMUtils-DS3HDMLJ.js";import"./Label-DYpMY_OX.js";import"./ZIndexLayer-DTuo7Di4.js";import"./types-CfBor7-V.js";import"./ReactUtils-CeY657n5.js";import"./ActivePoints-DMWv0p30.js";import"./Dot-BPrJu2iO.js";import"./RegisterGraphicalItemId-DVKqMQCD.js";import"./ErrorBarContext-sxni0djP.js";import"./GraphicalItemClipPath-CYG_pIwh.js";import"./SetGraphicalItem-DBanf2OA.js";import"./useAnimationId-C67C_3Vf.js";import"./getRadiusAndStrokeWidthFromDot-BG_1nnLU.js";import"./ActiveShapeUtils-6YQyK9qF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFaFQv7g.js";import"./Trapezoid-iC4EoUjD.js";import"./Sector-CvpK-Ylm.js";import"./Symbols-BjLEgnQl.js";import"./Curve-CWiUvZCK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-55iJ_lXJ.js";import"./ChartSizeDimensions-DrMr_UaN.js";import"./OffsetShower-0LfR1yxg.js";import"./PlotAreaShower-BAItckLJ.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
