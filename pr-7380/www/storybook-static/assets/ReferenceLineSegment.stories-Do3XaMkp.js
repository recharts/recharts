import{e}from"./iframe-OJf-GSLb.js";import{g as i}from"./arrayEqualityCheck-2_Nd0mNT.js";import{C as a}from"./ComposedChart-BWezQ33r.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DvtIPyjz.js";import{X as s}from"./XAxis-CUozMhVT.js";import{Y as c}from"./YAxis-DlvLAsVD.js";import{L as d}from"./Line-CxGxpbK3.js";import{R as g}from"./ReferenceLine-BebfNZlV.js";import{R as f}from"./RechartsHookInspector-DjyNDFMe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./immer-fAzYVHYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./zIndexSlice-CRdCk5dL.js";import"./renderedTicksSlice-DYga_drD.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./CartesianAxis-Bqyi-QIr.js";import"./Layer-DtNuGt5z.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./Label-B3MBaUXp.js";import"./ZIndexLayer-BJFmSDw9.js";import"./types-DpddDWMl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Cdrr4XTN.js";import"./step-4r8B6sQi.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CyupdVou.js";import"./ActivePoints-C9vqSoFh.js";import"./Dot-brDQHNAJ.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./useAnimationId-Dwrr6l_F.js";import"./getRadiusAndStrokeWidthFromDot-CpS1-IJD.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DD4xdMms.js";import"./ChartSizeDimensions-CdI027Rl.js";import"./OffsetShower-BkR-_nsI.js";import"./PlotAreaShower-BECDt9HM.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
