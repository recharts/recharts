import{e}from"./iframe-B5OZyTLO.js";import{R as i}from"./arrayEqualityCheck-CWhdwSDm.js";import{C as p}from"./ComposedChart-DpUDvMYQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B88auzH8.js";import{X as s}from"./XAxis-zb4VUPh6.js";import{Y as c}from"./YAxis-Dux7TOCI.js";import{L as d}from"./Line-4w5j44YG.js";import{R as g}from"./ReferenceLine-B3apWSPI.js";import{R as f}from"./RechartsHookInspector-_hFKO12C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAPxLZ6Q.js";import"./immer-TWt97Mx7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQQb0kbC.js";import"./index-hV-3VpKL.js";import"./hooks-BezBw8uS.js";import"./axisSelectors-ABOgVma3.js";import"./d3-scale-CN5ZQXr4.js";import"./zIndexSlice-BhJZ8kMU.js";import"./renderedTicksSlice-D_AhA4OM.js";import"./CartesianChart-FhsaLguc.js";import"./chartDataContext-B484Lq8t.js";import"./CategoricalChart-zasF99ZZ.js";import"./CartesianAxis-DF2T2i1R.js";import"./Layer-DY3DBIYw.js";import"./Text-CpciUZWD.js";import"./DOMUtils-CaAH8jO5.js";import"./Label-DrAV5Ysg.js";import"./ZIndexLayer--mzOMN2C.js";import"./types-CBKdJqtE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-50LnJO-z.js";import"./ActivePoints-BCl6lkYq.js";import"./Dot-DW8dVVMQ.js";import"./RegisterGraphicalItemId-DI_yJ9XE.js";import"./ErrorBarContext-Cy-UI2HL.js";import"./GraphicalItemClipPath-DqNQMvK4.js";import"./SetGraphicalItem-DtNxMT9p.js";import"./useAnimationId-C8kgPVjG.js";import"./getRadiusAndStrokeWidthFromDot-BwBEHiBz.js";import"./ActiveShapeUtils-wCZ0vcum.js";import"./isPlainObject-dgzqLzJz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CluG0cnR.js";import"./Trapezoid-DfDBBk_X.js";import"./Sector-DWNWDgn6.js";import"./Symbols-CYtIKOUS.js";import"./symbol-OBCxgJUM.js";import"./step--d94ZHvF.js";import"./Curve-CZezSHJu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-1eVRlG7n.js";import"./ChartSizeDimensions-UHLg_21n.js";import"./OffsetShower-C1QQvoSP.js";import"./PlotAreaShower-Bz0iMrs_.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
