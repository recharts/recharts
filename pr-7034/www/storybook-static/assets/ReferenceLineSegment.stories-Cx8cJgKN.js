import{e}from"./iframe-CRTFvrj9.js";import{R as i}from"./arrayEqualityCheck-C-72eKdK.js";import{C as p}from"./ComposedChart-DTMWU6Jk.js";import{C as a}from"./CartesianGrid-Dlfi_HS_.js";import{X as n}from"./XAxis-BSKb_OYU.js";import{Y as s}from"./YAxis-BR4X3yoq.js";import{L as c}from"./Line-CiAwxFS9.js";import{R as d}from"./ReferenceLine-BSY3GekM.js";import{R as g}from"./RechartsHookInspector-D5fTK36V.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./immer-C2wqAH-O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSniLpj2.js";import"./index-DTIfmw9b.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./d3-scale-B3vyKD8X.js";import"./zIndexSlice-CeN_cpGA.js";import"./renderedTicksSlice-Clwuxehj.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./CartesianAxis-UwfPUOGl.js";import"./Layer-CS75NGqW.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./Label-B8ukM34Q.js";import"./ZIndexLayer-T_Qg2faX.js";import"./types-DqJmRq78.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-FOFjsaAB.js";import"./ActivePoints-DqiWJefE.js";import"./Dot-Bs4qVlF8.js";import"./RegisterGraphicalItemId-CQsCOMci.js";import"./ErrorBarContext-V9kNDrvg.js";import"./GraphicalItemClipPath-D3uyj9j1.js";import"./SetGraphicalItem-BKYxWNub.js";import"./useAnimationId-D4atK31V.js";import"./getRadiusAndStrokeWidthFromDot-BycfBkgL.js";import"./ActiveShapeUtils-Dvtjmakf.js";import"./isPlainObject-DWQ5xGNV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzeM3od.js";import"./Trapezoid-BHEoFJyV.js";import"./Sector-CAdVxu4l.js";import"./Symbols-DQD-u_Ga.js";import"./symbol-CqE7w4As.js";import"./step-D-1eA3Al.js";import"./Curve-cG-fhaEi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bed0KFZ4.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./OffsetShower-BF3aeG8w.js";import"./PlotAreaShower-D8bDGspZ.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
