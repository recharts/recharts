import{e}from"./iframe-CMkrvckg.js";import{R as i}from"./arrayEqualityCheck-C-j9cVnD.js";import{C as p}from"./ComposedChart-BskBKFZP.js";import{C as a}from"./CartesianGrid-a6TSLvyJ.js";import{X as n}from"./XAxis-CRTScQzT.js";import{Y as s}from"./YAxis-DuUTIFNy.js";import{L as c}from"./Line-DyabMQ5Q.js";import{R as d}from"./ReferenceLine-BWTAkF8t.js";import{R as g}from"./RechartsHookInspector-LPNgAumr.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0hHUpMbb.js";import"./immer-CyD0Wx6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_AEo7CP.js";import"./index-l2b25tqQ.js";import"./hooks-z2F_PL2D.js";import"./axisSelectors-DiKss4V_.js";import"./d3-scale-fpsdvWAN.js";import"./zIndexSlice-CRGV0CLv.js";import"./renderedTicksSlice-DRtBvqzi.js";import"./CartesianChart-mSJGg3IH.js";import"./chartDataContext-Dg6bbq-C.js";import"./CategoricalChart-Bl6nS1b9.js";import"./CartesianAxis-BQn2ecgs.js";import"./Layer-4Y2Bpro8.js";import"./Text-CfL4AkJ2.js";import"./DOMUtils-CY4V2W-_.js";import"./Label-CK8WpSeL.js";import"./ZIndexLayer--DEMgBxJ.js";import"./types-h_n1Y6CX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-koRtCpPb.js";import"./ActivePoints-DPO6sfmL.js";import"./Dot-WqWz8qFp.js";import"./RegisterGraphicalItemId-B_jKurhL.js";import"./ErrorBarContext-DR1SZQJs.js";import"./GraphicalItemClipPath-CdBUcuRI.js";import"./SetGraphicalItem-D8O9NSBD.js";import"./useAnimationId-Dnz94C6_.js";import"./getRadiusAndStrokeWidthFromDot-BtVMYfvn.js";import"./ActiveShapeUtils-fAQzD1Cv.js";import"./isPlainObject-E65nxFXT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXlSVzkG.js";import"./Trapezoid-B-eKIWgm.js";import"./Sector-BAVvYkxC.js";import"./Symbols-C3K856pn.js";import"./symbol-C1RL9RI_.js";import"./step-BgKCtsuA.js";import"./Curve-D0J3TcJs.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BpykTG3u.js";import"./ChartSizeDimensions-tEh5XVCc.js";import"./OffsetShower-CI6ZxkzS.js";import"./PlotAreaShower-CiPqTN59.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
