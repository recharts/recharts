import{e}from"./iframe-DpxBiwXt.js";import{R as i}from"./arrayEqualityCheck-FXkJUuOg.js";import{C as a}from"./ComposedChart-BpoK1MIm.js";import{C as p}from"./CartesianGrid-DNW3g4XV.js";import{X as n}from"./XAxis-BwhWcYGH.js";import{Y as s}from"./YAxis-Bi8itMA7.js";import{L as c}from"./Line-By9eZF6k.js";import{R as d}from"./ReferenceLine-CmIjHZSi.js";import{R as g}from"./RechartsHookInspector-A8kV9_z_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BjnJrxH9.js";import"./hooks-CjYZQI6e.js";import"./axisSelectors-DxY3Hm_g.js";import"./zIndexSlice-BKKsRI17.js";import"./CartesianChart-C8Msn2UK.js";import"./chartDataContext-WZeplglC.js";import"./CategoricalChart-DGoypZYk.js";import"./CartesianAxis-DPFPdJc8.js";import"./Layer-B_VW6NEu.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./Label-CEkR5yeX.js";import"./ZIndexLayer-D0mBkmdS.js";import"./types-BBdfixzL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dffr1epF.js";import"./ActivePoints-DmMdWDFy.js";import"./Dot-CHYi4_d9.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./ErrorBarContext--hzc0ol9.js";import"./GraphicalItemClipPath-BxeldMcM.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./useAnimationId-xmRGVEvR.js";import"./getRadiusAndStrokeWidthFromDot-C96kEFaR.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BltJ-RBG.js";import"./Trapezoid-DN2MYT0t.js";import"./Sector-CLle2JPF.js";import"./Symbols-DaC_yNBz.js";import"./Curve-D7R0OSkI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-JWi15Uty.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
