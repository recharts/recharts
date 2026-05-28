import{e}from"./iframe-nKBNN5B0.js";import{g as i}from"./arrayEqualityCheck-CxT-wzVL.js";import{C as a}from"./ComposedChart-CMimiTb9.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-CfI49b5n.js";import{X as s}from"./XAxis-DU_guq9x.js";import{Y as c}from"./YAxis-FQ23aVkz.js";import{L as d}from"./Line-UdkVxmSF.js";import{R as g}from"./ReferenceLine-BKxFv2K4.js";import{R as f}from"./RechartsHookInspector-sGkexO-0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B1K37wAO.js";import"./immer-CyCHtQC_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CtYT8XrE.js";import"./index-92xVHDbu.js";import"./hooks-D9IV7SS_.js";import"./axisSelectors-Ce9ynWe4.js";import"./d3-scale-BkKzcfBn.js";import"./zIndexSlice-D0XiDET1.js";import"./renderedTicksSlice-CO8dGGel.js";import"./CartesianChart-B93j2FVh.js";import"./chartDataContext-C9hfLHwH.js";import"./CategoricalChart-DseIVHYy.js";import"./CartesianAxis-Bnh1LK4J.js";import"./Layer-Dlo03F9V.js";import"./Text-DB5b8CCD.js";import"./DOMUtils-B7v60ynE.js";import"./Label-CsEI_R5F.js";import"./ZIndexLayer-C2zC9czD.js";import"./types-DsvdP6xG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-EceyF-XR.js";import"./step-Cz7IIlWp.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DZyDsCqU.js";import"./ActivePoints-BzC087aM.js";import"./Dot-CoS0_Gc_.js";import"./RegisterGraphicalItemId-DX6ZWJJQ.js";import"./ErrorBarContext-DtqQSr6r.js";import"./GraphicalItemClipPath-DenedrNc.js";import"./SetGraphicalItem-v3AApP2y.js";import"./useAnimationId-C5EqhcJr.js";import"./getRadiusAndStrokeWidthFromDot-2U1M0l9R.js";import"./ActiveShapeUtils-ZBGHGQd-.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-zSDCnArX.js";import"./ChartSizeDimensions-NMIHm-Kh.js";import"./OffsetShower-6NeAlfeU.js";import"./PlotAreaShower-DGsJDI99.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
