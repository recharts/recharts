import{e}from"./iframe-yOl7ebEO.js";import{R as i}from"./arrayEqualityCheck-UuJDb-yR.js";import{C as p}from"./ComposedChart-BVedwSw5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BA_DIZK_.js";import{X as s}from"./XAxis-DD4YWjFw.js";import{Y as c}from"./YAxis-BW20z882.js";import{L as d}from"./Line-BDePEqV7.js";import{R as g}from"./ReferenceLine-BjT2xllE.js";import{R as f}from"./RechartsHookInspector-DtC7uthn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gw_jyAz4.js";import"./immer-CYF84rOh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1ybgTyA.js";import"./index-D-Did3Jy.js";import"./hooks-BE8JLfvF.js";import"./axisSelectors-B5yQSsls.js";import"./d3-scale-CZWGMAWB.js";import"./zIndexSlice-PEvl5-9d.js";import"./renderedTicksSlice-CnX-tuq-.js";import"./CartesianChart-CI8VxjgA.js";import"./chartDataContext-DWA37a9L.js";import"./CategoricalChart-DTvKZB6u.js";import"./CartesianAxis-CqiimSqN.js";import"./Layer-DB7JxVnT.js";import"./Text-s8nxqTbU.js";import"./DOMUtils-Co3lMGfS.js";import"./Label-CDk0YY7H.js";import"./ZIndexLayer-WvT2N6Nx.js";import"./types-DQaZd2AR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BYuoIEUf.js";import"./ActivePoints-MVGoSZ5r.js";import"./Dot-DujX6iAu.js";import"./RegisterGraphicalItemId-yywJB84l.js";import"./ErrorBarContext-CKGldT3Z.js";import"./GraphicalItemClipPath-BM3B2Cex.js";import"./SetGraphicalItem-BACVcxKo.js";import"./useAnimationId-Fp-fdxRQ.js";import"./getRadiusAndStrokeWidthFromDot-CPh76gsn.js";import"./ActiveShapeUtils-aPgWLWZ7.js";import"./isPlainObject-DJR91lAO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D1lQKzhS.js";import"./Trapezoid-Bo-P1Ks9.js";import"./Sector-ZE6eqjpU.js";import"./Symbols-h-bSBTN1.js";import"./symbol-Djg7BpVR.js";import"./step-MC0Zc_ls.js";import"./Curve-zYBm6Ox7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CeoEhrnk.js";import"./ChartSizeDimensions-B292NXgO.js";import"./OffsetShower-DAwTp_Xz.js";import"./PlotAreaShower-BJre87Gs.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
