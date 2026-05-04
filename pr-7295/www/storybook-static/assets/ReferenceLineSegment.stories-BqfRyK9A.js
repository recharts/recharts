import{e}from"./iframe-Cm3fKKya.js";import{R as i}from"./arrayEqualityCheck-CQWVDseH.js";import{C as p}from"./ComposedChart-CI7e_WTM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CBNfxOfI.js";import{X as s}from"./XAxis-_gagIVgp.js";import{Y as c}from"./YAxis-BAWoPQYV.js";import{L as d}from"./Line-CUx7_hG8.js";import{R as g}from"./ReferenceLine-wOyDi7n7.js";import{R as f}from"./RechartsHookInspector-CpOXiD6O.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BkcHGYVM.js";import"./immer-CEWtNvyb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-oDzj0r.js";import"./index-9rVBxZPD.js";import"./hooks-B3tRCSat.js";import"./axisSelectors-Bwtc5iq4.js";import"./d3-scale-BjMiYTJr.js";import"./zIndexSlice-DYSMWhOl.js";import"./renderedTicksSlice-BZy1ZNqb.js";import"./CartesianChart-BrFBpup6.js";import"./chartDataContext-B_eInrg7.js";import"./CategoricalChart-CY8DZn6m.js";import"./CartesianAxis-DUjBj8lo.js";import"./Layer-Bjej1AmV.js";import"./Text-DvSAUV0i.js";import"./DOMUtils-QUjg2Yua.js";import"./Label-DcJ8tF7g.js";import"./ZIndexLayer-Dsdg_UUE.js";import"./types-Cdoht-KM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CCKIvuk2.js";import"./ActivePoints-XXtVAAS1.js";import"./Dot-elfvXfLw.js";import"./RegisterGraphicalItemId-DJy9dO_8.js";import"./ErrorBarContext-DewfvX2H.js";import"./GraphicalItemClipPath-CRdIG2N7.js";import"./SetGraphicalItem-BjOYW37Q.js";import"./useAnimationId-C78FuYWX.js";import"./getRadiusAndStrokeWidthFromDot-D5QROXAR.js";import"./ActiveShapeUtils-CLgS6WZt.js";import"./isPlainObject-C3QqYDDv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7ODVlbIW.js";import"./Trapezoid-DvgpBRjx.js";import"./Sector-DrC_WEC7.js";import"./Symbols-BZXh3G7C.js";import"./symbol-atQbT2WX.js";import"./step-ClEFzmqb.js";import"./Curve-C9IFio54.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DsjXiXu7.js";import"./ChartSizeDimensions-DHQ2iMpX.js";import"./OffsetShower-Be6n4fO7.js";import"./PlotAreaShower-DRAX5UGP.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
