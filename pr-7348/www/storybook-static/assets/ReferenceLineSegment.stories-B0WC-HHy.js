import{e}from"./iframe-BExdC6gN.js";import{g as i}from"./arrayEqualityCheck-DOMqUAof.js";import{C as a}from"./ComposedChart-CfHGhx4q.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-BwP7A8dN.js";import{X as s}from"./XAxis-CiJpP_bt.js";import{Y as c}from"./YAxis-CJCe92Ep.js";import{L as d}from"./Line-CtNgSGaI.js";import{R as g}from"./ReferenceLine-BPH43c9R.js";import{R as f}from"./RechartsHookInspector-jedlPGVn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BABy-fAx.js";import"./immer-fLQu0D5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./CartesianAxis-DOEtdq2b.js";import"./Layer-Bn8zfoRz.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./Label-BEYaNe1v.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./types-DfAw3uAA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BAgcgHZR.js";import"./step-D4OvHG8Z.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Dgl8JF7u.js";import"./ActivePoints-BRlCo6wv.js";import"./Dot-DeXpLXf5.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./ErrorBarContext-B68PiQ82.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./useAnimationId-DlRyv4oq.js";import"./getRadiusAndStrokeWidthFromDot-CEsaKSHL.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const le=["Segment"];export{t as Segment,le as __namedExportsOrder,fe as default};
