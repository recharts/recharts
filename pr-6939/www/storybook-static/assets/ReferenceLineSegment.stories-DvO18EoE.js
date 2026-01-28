import{e}from"./iframe-BQPEMrXd.js";import{R as i}from"./arrayEqualityCheck-CslLKJ6H.js";import{C as a}from"./ComposedChart-CWFkdeSx.js";import{C as p}from"./CartesianGrid-CXNnKGRI.js";import{X as n}from"./XAxis-mF1pALMt.js";import{Y as s}from"./YAxis-CIcAGIvo.js";import{L as c}from"./Line-8JUB1lNz.js";import{R as d}from"./ReferenceLine-B8qrrtfF.js";import{R as g}from"./RechartsHookInspector-DspFoKBX.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BDNWBHNP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DACGaUhd.js";import"./hooks-Bdj8JxEZ.js";import"./axisSelectors-CtzL1lJc.js";import"./zIndexSlice-CdQy2W3n.js";import"./CartesianChart-BMe1DD5u.js";import"./chartDataContext-Bf7gL6YI.js";import"./CategoricalChart-Do_dOtlr.js";import"./CartesianAxis-CNEc1nbZ.js";import"./Layer-DxbBzKq7.js";import"./Text-40tQThuO.js";import"./DOMUtils-CBEPLavF.js";import"./Label-CJDR703l.js";import"./ZIndexLayer-BhdUGqn6.js";import"./types-BQWi4mRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Ctv4TrHD.js";import"./ActivePoints-CBPMI_KV.js";import"./Dot-Dad_gt4k.js";import"./RegisterGraphicalItemId-DGfNttgy.js";import"./ErrorBarContext-DCh3UuB4.js";import"./GraphicalItemClipPath-BhozllE_.js";import"./SetGraphicalItem-Dib0kNEx.js";import"./useAnimationId-BxGZeVYE.js";import"./getRadiusAndStrokeWidthFromDot-DDWPUI43.js";import"./ActiveShapeUtils-BLcBZx_i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmEiGd0_.js";import"./Trapezoid-uvUeJozR.js";import"./Sector-gJW5kDSo.js";import"./Symbols-zJ2C1Rrw.js";import"./Curve-CkSquOYK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DIjwufBA.js";import"./ChartSizeDimensions-CVrNRa4B.js";import"./OffsetShower-DTE5GBb5.js";import"./PlotAreaShower-6AA0_a8Q.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
