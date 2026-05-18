import{e}from"./iframe-CW44RDCc.js";import{g as i}from"./arrayEqualityCheck-Ua4xjAL-.js";import{C as p}from"./ComposedChart-Cf6loWdm.js";import{p as a}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-xF5Cq0CK.js";import{X as s}from"./XAxis-BtxpyVu0.js";import{Y as c}from"./YAxis-DkqaPkGp.js";import{L as d}from"./Line-Cq678OID.js";import{R as g}from"./ReferenceLine-sZls1hjv.js";import{R as f}from"./RechartsHookInspector-CE02yOZG.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCGYFD7i.js";import"./immer-XdRVX9he.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3a2SuVp.js";import"./index-q0MlqJm9.js";import"./hooks-PNvgBz41.js";import"./axisSelectors-CKeyOf07.js";import"./d3-scale-BVNpQg4a.js";import"./zIndexSlice-B0Fs0Bds.js";import"./renderedTicksSlice-m2ISnyyr.js";import"./CartesianChart-CTskZI97.js";import"./chartDataContext-BIpjCG9Z.js";import"./CategoricalChart-BSsRNKhV.js";import"./CartesianAxis-BktLkXzl.js";import"./Layer-8Qf7pjam.js";import"./Text-B0bhoYGy.js";import"./DOMUtils-DcGI1ooU.js";import"./Label-CB32eiK0.js";import"./ZIndexLayer-DOf301bL.js";import"./types-B4uBrmm7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D_YL06Q3.js";import"./ActivePoints-CzNqaTiV.js";import"./Dot-CJ1Gpj_u.js";import"./RegisterGraphicalItemId-C2nT64rB.js";import"./ErrorBarContext-CTE9_ggH.js";import"./GraphicalItemClipPath-2q24bU0-.js";import"./SetGraphicalItem--ChXDLvH.js";import"./useAnimationId-DAlITmll.js";import"./getRadiusAndStrokeWidthFromDot-BIUpFF8r.js";import"./ActiveShapeUtils-Sw9eCZBU.js";import"./isPlainObject-B7SWhIBJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Chq6EJDX.js";import"./Trapezoid-CMZodTaL.js";import"./Sector-CwAajl9S.js";import"./Symbols-DPIxRI8N.js";import"./symbol-DbqMCeb2.js";import"./step-_iQ5Op8T.js";import"./Curve-OVW22O2P.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-at3I6h66.js";import"./ChartSizeDimensions-O4pbDmZW.js";import"./OffsetShower-CmBjVyZD.js";import"./PlotAreaShower-9R2kP3z1.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const Ee=["Segment"];export{t as Segment,Ee as __namedExportsOrder,ye as default};
