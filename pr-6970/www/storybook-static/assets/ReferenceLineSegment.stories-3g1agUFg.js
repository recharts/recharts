import{e}from"./iframe-DMofGbdh.js";import{R as i}from"./arrayEqualityCheck-CsoqXgVI.js";import{C as a}from"./ComposedChart-k3-ghRdj.js";import{C as p}from"./CartesianGrid-BbwQGwf7.js";import{X as n}from"./XAxis-D0dacd78.js";import{Y as s}from"./YAxis-B_yG4ERH.js";import{L as c}from"./Line-DWJPZGSf.js";import{R as d}from"./ReferenceLine-BKkXMQuP.js";import{R as g}from"./RechartsHookInspector-DJgQFG2f.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cr3Nq4ZU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7CsVMpm.js";import"./hooks-DQLTrr19.js";import"./axisSelectors-CeuWGW4U.js";import"./zIndexSlice-CsA5GGWo.js";import"./CartesianChart-DWOZMVOy.js";import"./chartDataContext-K-dQ-k-3.js";import"./CategoricalChart-D_GR9jLw.js";import"./CartesianAxis-BNGc91Ri.js";import"./Layer-BiV0mvq6.js";import"./Text-BOWHjgiZ.js";import"./DOMUtils-DCHqYg2a.js";import"./Label-DxmFoslz.js";import"./ZIndexLayer-CWIihq-M.js";import"./types-DMK1Hrm-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dv6d3MQ5.js";import"./ActivePoints-CDeWGkl5.js";import"./Dot-_CebNPSK.js";import"./RegisterGraphicalItemId-D7ibYuhl.js";import"./ErrorBarContext-BGJbOelu.js";import"./GraphicalItemClipPath-mCG1gtli.js";import"./SetGraphicalItem-ttx2b7Qz.js";import"./useAnimationId-CkpaA0hy.js";import"./getRadiusAndStrokeWidthFromDot-a8uwl8jU.js";import"./ActiveShapeUtils-D8pbFwx0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWfmzqul.js";import"./Trapezoid-CRq1iTfA.js";import"./Sector-BMWgIsRC.js";import"./Symbols-iw9OdhhJ.js";import"./Curve-Dep4Vom7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B5a3_tnM.js";import"./ChartSizeDimensions-qqjl0QHD.js";import"./OffsetShower-E8NqoCsg.js";import"./PlotAreaShower-DPYwAHFd.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
