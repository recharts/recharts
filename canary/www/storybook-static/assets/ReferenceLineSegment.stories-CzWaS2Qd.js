import{e}from"./iframe-Dv2EI0Ju.js";import{R as i}from"./arrayEqualityCheck-D1mGNef5.js";import{C as p}from"./ComposedChart-DAlN2hwo.js";import{C as a}from"./CartesianGrid-C1dn2kEs.js";import{X as n}from"./XAxis-BxPBpU10.js";import{Y as s}from"./YAxis-Dl3Sd1eT.js";import{L as c}from"./Line-DPY8_MLp.js";import{R as d}from"./ReferenceLine-Bg_4q6b-.js";import{R as g}from"./RechartsHookInspector-CyibsFS2.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BAehELTf.js";import"./immer-C8dYrQHT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-bNtyFajX.js";import"./index-Bc1bjXU3.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./zIndexSlice-bRjNTWyo.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./CartesianAxis-Ci9kjPzN.js";import"./Layer-DEwUBVRy.js";import"./Text-C-pvoFVV.js";import"./DOMUtils-CeCikA4p.js";import"./Label-CoVOGhvs.js";import"./ZIndexLayer-yLy7ki0K.js";import"./types-BOTa8dCr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CPqsARhu.js";import"./ActivePoints-BQmOz7QA.js";import"./Dot-BMVkC3H5.js";import"./RegisterGraphicalItemId-Dt1T6Nvh.js";import"./ErrorBarContext-TBQU4_4Y.js";import"./GraphicalItemClipPath-QbozzGmj.js";import"./SetGraphicalItem-CO0LpAHO.js";import"./useAnimationId-CFJ1HB8y.js";import"./getRadiusAndStrokeWidthFromDot-fpMjLcGn.js";import"./ActiveShapeUtils-BasgF1mW.js";import"./isPlainObject-INKspUfV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYsgtCMq.js";import"./Trapezoid-D6Z4JPgp.js";import"./Sector-D8FF4WXP.js";import"./Symbols-Ol_rIUwX.js";import"./symbol-CAp9PJmI.js";import"./step-CXEpNkoj.js";import"./Curve-BYfhifTo.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BQUBjWw-.js";import"./ChartSizeDimensions-BOSou-B6.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
