import{e}from"./iframe-BGwjwh7b.js";import{R as i}from"./arrayEqualityCheck-Ci--b7kw.js";import{C as a}from"./ComposedChart-BM67LJyk.js";import{C as p}from"./CartesianGrid-Bpv9yHg0.js";import{X as n}from"./XAxis-DS9Xkr-k.js";import{Y as s}from"./YAxis-BE7e26gY.js";import{L as c}from"./Line-DnJu1JFJ.js";import{R as d}from"./ReferenceLine-DfL_OH3K.js";import{R as g}from"./RechartsHookInspector-VWahaYTL.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4_jkDd5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hK7FM4lj.js";import"./hooks-BrtJ2K4-.js";import"./axisSelectors-DZSZvNV6.js";import"./zIndexSlice-CqqXeG-S.js";import"./CartesianChart-5LhnS4ee.js";import"./chartDataContext-CifXIRqa.js";import"./CategoricalChart-BOR7W1TN.js";import"./CartesianAxis-C6FwbBuH.js";import"./Layer-g7-Im1O-.js";import"./Text-BJbt4-uX.js";import"./DOMUtils-B5Va_Rd3.js";import"./Label-ByJ0Zn7t.js";import"./ZIndexLayer-BlpEyICK.js";import"./types-DiIJ1tuj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-0GYQhZAx.js";import"./ActivePoints-DsWvMRWX.js";import"./Dot-a7SSIrAW.js";import"./RegisterGraphicalItemId-D86zanCr.js";import"./ErrorBarContext-CNFPOgVB.js";import"./GraphicalItemClipPath-CbnJI2Ms.js";import"./SetGraphicalItem-CfxChqbu.js";import"./useAnimationId-CRoY-omv.js";import"./getRadiusAndStrokeWidthFromDot-Dha7chAz.js";import"./ActiveShapeUtils-BcFn4-44.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpPiBfe5.js";import"./Trapezoid-yFda2MLs.js";import"./Sector-CnD_zSeQ.js";import"./Symbols-CA485AuF.js";import"./Curve-Bx03x7Y9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-5-nk5biS.js";import"./ChartSizeDimensions-ewe-wGZ_.js";import"./OffsetShower-CVJaT1Gz.js";import"./PlotAreaShower-Cbm_qyV0.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
