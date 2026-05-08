import{e}from"./iframe-ZnuiNVaE.js";import{R as i}from"./arrayEqualityCheck-DcpsFffb.js";import{C as p}from"./ComposedChart-CNkq3UMc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-OuGMHBup.js";import{X as s}from"./XAxis-hfxAoNer.js";import{Y as c}from"./YAxis-Diz2Tspw.js";import{L as d}from"./Line-UlckhZvH.js";import{R as g}from"./ReferenceLine-Dy0oe582.js";import{R as f}from"./RechartsHookInspector-C4iarVXO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SpwOLF2r.js";import"./immer-0nSCgAvg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEYGVzUm.js";import"./index-BpNZQyS5.js";import"./hooks-B5VA8Mmq.js";import"./axisSelectors-B7fsKZ9l.js";import"./d3-scale-CY4nDl51.js";import"./zIndexSlice-Drs2c4sD.js";import"./renderedTicksSlice-Bn9JwHxd.js";import"./CartesianChart-QqWjed8q.js";import"./chartDataContext-DOw2_YIC.js";import"./CategoricalChart-Bp3TzfC0.js";import"./CartesianAxis-90i_fguh.js";import"./Layer-3YLDlAyc.js";import"./Text-CLHYbH4R.js";import"./DOMUtils-DTgaodk1.js";import"./Label-CBQ7F7ZY.js";import"./ZIndexLayer-BzV-T_Iz.js";import"./types-mDbQPIQK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DWDhNlKk.js";import"./ActivePoints-CsKFQX5w.js";import"./Dot-DOC-EnTU.js";import"./RegisterGraphicalItemId-BcaLYkaD.js";import"./ErrorBarContext-C1ZpfKHJ.js";import"./GraphicalItemClipPath-C75obMCp.js";import"./SetGraphicalItem-CLIyGsmN.js";import"./useAnimationId-DkOya059.js";import"./getRadiusAndStrokeWidthFromDot-CVCMuq1B.js";import"./ActiveShapeUtils-B0-GYp8s.js";import"./isPlainObject-Bh5udtth.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8PzQF5cj.js";import"./Trapezoid-BzAzl90f.js";import"./Sector-BJWLe057.js";import"./Symbols-D3ZFSmHu.js";import"./symbol-DOh64DiI.js";import"./step-BAeuU6ZP.js";import"./Curve-D7bzhexe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BWgKuq9M.js";import"./ChartSizeDimensions-CpD-sUWL.js";import"./OffsetShower-B_CY-ece.js";import"./PlotAreaShower-DfogOd1z.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
