import{e}from"./iframe-CIxNp6W3.js";import{R as i}from"./arrayEqualityCheck-ZcVH4_uJ.js";import{C as p}from"./ComposedChart-Ch4nojgt.js";import{C as a}from"./CartesianGrid-Bwn46UyA.js";import{X as n}from"./XAxis-DSbNXcpO.js";import{Y as s}from"./YAxis-Dt9ZpeSD.js";import{L as c}from"./Line-6m2pOD5-.js";import{R as d}from"./ReferenceLine-B0iMmfZd.js";import{R as g}from"./RechartsHookInspector-B8l4NQFC.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cf5_CJke.js";import"./immer-CkfrG0rl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnQHtrMt.js";import"./index-Cib5zjST.js";import"./hooks-BNI7_4lT.js";import"./axisSelectors-BeBP2I3U.js";import"./d3-scale-BQ18Pqvj.js";import"./zIndexSlice-BEW6pf_v.js";import"./renderedTicksSlice-CbtbEbDH.js";import"./CartesianChart-CaQ1UeLW.js";import"./chartDataContext-DEZM9FrZ.js";import"./CategoricalChart-FVnBP1Tu.js";import"./CartesianAxis-vyecr7Hl.js";import"./Layer-Bp29xhoh.js";import"./Text-B-dRdN-u.js";import"./DOMUtils-SOpGz0EB.js";import"./Label-DM_zt9zM.js";import"./ZIndexLayer-DPYjXPVc.js";import"./types-D88TaevE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CD81hbcy.js";import"./ActivePoints-JOR1SBd5.js";import"./Dot-DbPKwx4_.js";import"./RegisterGraphicalItemId-B3XRN-uf.js";import"./ErrorBarContext-Dko46g4M.js";import"./GraphicalItemClipPath-DxCJ5NSr.js";import"./SetGraphicalItem-CExaHKdU.js";import"./useAnimationId-BJAtAhRd.js";import"./getRadiusAndStrokeWidthFromDot-DecXli92.js";import"./ActiveShapeUtils-DJ7hB8mH.js";import"./isPlainObject-B_udAERF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDKHqCIu.js";import"./Trapezoid-BynO58oQ.js";import"./Sector-NGTsm_Cr.js";import"./Symbols-CH9tQV3q.js";import"./symbol-R0iacGzj.js";import"./step-CuAsm7Fe.js";import"./Curve-CcclPR5V.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CEgQsKlh.js";import"./ChartSizeDimensions-CNahkAGh.js";import"./OffsetShower-CBcMXDRG.js";import"./PlotAreaShower-BJdN30iA.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
