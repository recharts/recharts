import{e}from"./iframe-Dd1Sjt9X.js";import{R as i}from"./arrayEqualityCheck-pUdtrDKv.js";import{C as p}from"./ComposedChart-CuflWUWP.js";import{C as a}from"./CartesianGrid-VgSpPdk9.js";import{X as n}from"./XAxis-BYGa6kOu.js";import{Y as s}from"./YAxis-BRdJhjsx.js";import{L as c}from"./Line-BfTN-7xH.js";import{R as d}from"./ReferenceLine-CXlbdAsG.js";import{R as g}from"./RechartsHookInspector-Cr2Johcx.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6lHiyqW.js";import"./immer-ezkOMCj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dw3RQG7d.js";import"./index-DHxloPwC.js";import"./hooks-CKgsmzQh.js";import"./axisSelectors-DCUpOlmc.js";import"./d3-scale-BBdKeTjL.js";import"./zIndexSlice-B2TlWuzN.js";import"./renderedTicksSlice-DDOiTdbf.js";import"./CartesianChart-BimCUxdh.js";import"./chartDataContext-CLOoHHQa.js";import"./CategoricalChart-CU3zaaGt.js";import"./CartesianAxis-CovsPuDZ.js";import"./Layer-CX4gucce.js";import"./Text-Cl6XBoxV.js";import"./DOMUtils-BIFKO-UG.js";import"./Label-ByOVYkgq.js";import"./ZIndexLayer-nfwFwrW8.js";import"./types-5Z667yyH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-0A2SPQqI.js";import"./ActivePoints-DahGmIAZ.js";import"./Dot-BMZXiNKw.js";import"./RegisterGraphicalItemId-Cz8x82sR.js";import"./ErrorBarContext-L_IEZQFq.js";import"./GraphicalItemClipPath-DOJdP2rh.js";import"./SetGraphicalItem-DT-0SkIe.js";import"./useAnimationId-ax-iI9cP.js";import"./getRadiusAndStrokeWidthFromDot-DKdUNLBw.js";import"./ActiveShapeUtils-DgMKp2OJ.js";import"./isPlainObject-Dk8iq51s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChXOGBDT.js";import"./Trapezoid-XW4nj9Uq.js";import"./Sector-C-MT-tlR.js";import"./Symbols-nv82Msvy.js";import"./symbol-DU1W-Oc6.js";import"./step-3UMSkQg1.js";import"./Curve-DCc30kqb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CAwGKYht.js";import"./ChartSizeDimensions-CyTaJmPr.js";import"./OffsetShower-BM6oyifk.js";import"./PlotAreaShower-D-MhE31R.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
