import{e}from"./iframe-C3IizUjd.js";import{R as i}from"./arrayEqualityCheck-BN5YAPve.js";import{C as p}from"./ComposedChart-B45GxUxU.js";import{C as a}from"./CartesianGrid-fnBE0d0U.js";import{X as n}from"./XAxis-CEjSdtmZ.js";import{Y as s}from"./YAxis-C9Xei-d9.js";import{L as c}from"./Line-CzSxIjFn.js";import{R as d}from"./ReferenceLine-BUBe_PlA.js";import{R as g}from"./RechartsHookInspector-CMzm5IMa.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DskrAGQW.js";import"./immer-Zfp8_KXi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nOVK-a7O.js";import"./index-BDIXnKn2.js";import"./hooks-Dky24mZ6.js";import"./axisSelectors-DftPES2E.js";import"./d3-scale-CueCtyXL.js";import"./zIndexSlice-BO04q8IP.js";import"./renderedTicksSlice-Dt_Lih6a.js";import"./CartesianChart-6pUZjxxf.js";import"./chartDataContext-CC6e_g43.js";import"./CategoricalChart-bB5xHAMm.js";import"./CartesianAxis-Cf07KQuR.js";import"./Layer-BScYV_nA.js";import"./Text-Cq5Z8SfY.js";import"./DOMUtils-D3cjVXs_.js";import"./Label-D4qF_xzL.js";import"./ZIndexLayer-D0ch3miO.js";import"./types-XYE2Po1C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DvBN6ieP.js";import"./ActivePoints-DvOttsku.js";import"./Dot-ugLrsFAK.js";import"./RegisterGraphicalItemId-BeeC0A7D.js";import"./ErrorBarContext-ZY5h9mih.js";import"./GraphicalItemClipPath-CxTZUJ58.js";import"./SetGraphicalItem-BkT7mDpp.js";import"./useAnimationId-CDYOyu_I.js";import"./getRadiusAndStrokeWidthFromDot-C-cu9IN5.js";import"./ActiveShapeUtils-C-x2J9sD.js";import"./isPlainObject-BfiDfeU3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do-vXOL9.js";import"./Trapezoid-BMwhO9Tl.js";import"./Sector-Bpnrz7tS.js";import"./Symbols-wCZQNuZQ.js";import"./symbol-CdebLSvg.js";import"./step-CEFPVq0V.js";import"./Curve-CEEm8y0E.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-COvlj-J8.js";import"./ChartSizeDimensions-BMoEUk31.js";import"./OffsetShower-C3Z070Oz.js";import"./PlotAreaShower-DeOjQ5h5.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
