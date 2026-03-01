import{e}from"./iframe-KIGRIIb5.js";import{R as i}from"./arrayEqualityCheck-BpdZ7hwi.js";import{C as p}from"./ComposedChart-DvEDkjwM.js";import{C as a}from"./CartesianGrid-BTfYvi-X.js";import{X as n}from"./XAxis-CSvpHUvr.js";import{Y as s}from"./YAxis-Bh8V8qj-.js";import{L as c}from"./Line-BnJPW-No.js";import{R as d}from"./ReferenceLine-BhhDozDh.js";import{R as g}from"./RechartsHookInspector-Bt2WJDB1.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_adPZ-8.js";import"./immer-WG6U2D_d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHe9ZVa4.js";import"./index-ClQqk-oX.js";import"./hooks-CB3QlvSf.js";import"./axisSelectors-BkzxsiaE.js";import"./d3-scale-DgRq4lUU.js";import"./zIndexSlice-_VCrDw0P.js";import"./renderedTicksSlice-eT4Ivs1b.js";import"./CartesianChart-qCsQp1Vm.js";import"./chartDataContext-D4pNrPnz.js";import"./CategoricalChart-e7-cm4mq.js";import"./CartesianAxis-Cra0xsE5.js";import"./Layer-DuIzwjaR.js";import"./Text-BoAeRYTN.js";import"./DOMUtils-CBEI-OH0.js";import"./Label-CkUDjV7L.js";import"./ZIndexLayer-CBYmGw4W.js";import"./types-w2IwZ3Nn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CkQKUzGb.js";import"./ActivePoints-CoEyozmc.js";import"./Dot-DgubKZir.js";import"./RegisterGraphicalItemId-DsmENlGz.js";import"./ErrorBarContext-Dm4Pi7GF.js";import"./GraphicalItemClipPath-CZoI5FBE.js";import"./SetGraphicalItem-DmMr7UzB.js";import"./useAnimationId-Bv85JSPp.js";import"./getRadiusAndStrokeWidthFromDot-Dh8fbv0-.js";import"./ActiveShapeUtils-BbMpDdiq.js";import"./isPlainObject-CCJRIfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcYcowey.js";import"./Trapezoid-6-PW5Hrl.js";import"./Sector-Dsu6XmgC.js";import"./Symbols-B6R2DiC2.js";import"./symbol-C10mZUN3.js";import"./step-CQsLqeZl.js";import"./Curve-BndPQnOp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CoeeyBxi.js";import"./ChartSizeDimensions-BY9JAKDy.js";import"./OffsetShower-DhxtKv-n.js";import"./PlotAreaShower-DjAl-bbb.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
