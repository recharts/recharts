import{e}from"./iframe-DkoPPqoz.js";import{R as i}from"./arrayEqualityCheck-ConoiXxh.js";import{C as p}from"./ComposedChart-BDGpBivc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BT_ctgv2.js";import{X as s}from"./XAxis-TP4nil4a.js";import{Y as c}from"./YAxis-BYjsEyTB.js";import{L as d}from"./Line-Ch8ZpIZ6.js";import{R as g}from"./ReferenceLine-CLtmSc5v.js";import{R as f}from"./RechartsHookInspector-JABbqkig.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-rTEBizGM.js";import"./immer-h70EVoAC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7r7vnZw.js";import"./index-avHK6rAb.js";import"./hooks-kkIG_obm.js";import"./axisSelectors-DrsKaFAE.js";import"./d3-scale-DMaSDVSj.js";import"./zIndexSlice-DRo4EBFA.js";import"./renderedTicksSlice-C3i94H6-.js";import"./CartesianChart-FkpJPUOg.js";import"./chartDataContext-RI6mXRe4.js";import"./CategoricalChart-BVNqzoUx.js";import"./CartesianAxis-DqLKklwY.js";import"./Layer-zW4foO2t.js";import"./Text-Czgex7sv.js";import"./DOMUtils-BK7Rx0Uu.js";import"./Label-bvaOdScm.js";import"./ZIndexLayer-DkIqpuZB.js";import"./types-BY9uJX-K.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-t--G_5qe.js";import"./ActivePoints-CofuFEcX.js";import"./Dot-C9hCbkHm.js";import"./RegisterGraphicalItemId-DO3T0gKQ.js";import"./ErrorBarContext-D8jzUn2M.js";import"./GraphicalItemClipPath-DPMqkNK-.js";import"./SetGraphicalItem-Dy_UcRx-.js";import"./useAnimationId-BkaDppf2.js";import"./getRadiusAndStrokeWidthFromDot-DA4yVcY7.js";import"./ActiveShapeUtils-DVJC97NJ.js";import"./isPlainObject-gasvROJA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0hnRgW6.js";import"./Trapezoid-BJDCCDSe.js";import"./Sector-hs2Rz1EN.js";import"./Symbols-riOWWUH2.js";import"./symbol-Mw7pfSpK.js";import"./step-BXtSxhKs.js";import"./Curve-Ue3PdtjH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B78ZsepT.js";import"./ChartSizeDimensions-DJpvKh-u.js";import"./OffsetShower-x7RdLh9q.js";import"./PlotAreaShower-BlqZdS3t.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
