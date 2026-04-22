import{e}from"./iframe-BoQTj_5t.js";import{R as i}from"./arrayEqualityCheck-h4HF4x_W.js";import{C as p}from"./ComposedChart-CC2uFk3W.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DDawkQoj.js";import{X as s}from"./XAxis-Bw8NdzWJ.js";import{Y as c}from"./YAxis-C-30AhxJ.js";import{L as d}from"./Line-BLk097ix.js";import{R as g}from"./ReferenceLine-D0q_HZaC.js";import{R as f}from"./RechartsHookInspector-LBDhOt6e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cuq7Ey8b.js";import"./immer-LK4juX8g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJottPx3.js";import"./index-BJ1s4j4a.js";import"./hooks-CxCFhuYH.js";import"./axisSelectors-vijQZibc.js";import"./d3-scale-Dvc-KAkv.js";import"./zIndexSlice-CJZLZTJ5.js";import"./renderedTicksSlice-js0QwYAy.js";import"./CartesianChart-DLPrj-Eg.js";import"./chartDataContext-BrW6BV92.js";import"./CategoricalChart-CT1UCyKb.js";import"./CartesianAxis-B91cAptM.js";import"./Layer-D7Wm7_P-.js";import"./Text-BztroWIo.js";import"./DOMUtils-DmRwSly6.js";import"./Label-_o7tKgSJ.js";import"./ZIndexLayer-BO_vi_Q6.js";import"./types-DLJuN5NY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-lu7EU6Kj.js";import"./ActivePoints-Dc2MnlRg.js";import"./Dot-D0_1FxKW.js";import"./RegisterGraphicalItemId-DvNGZwGO.js";import"./ErrorBarContext-pL12W9Rt.js";import"./GraphicalItemClipPath-BjwS4X8D.js";import"./SetGraphicalItem-Ce9evxpu.js";import"./useAnimationId-DbFh8KcE.js";import"./getRadiusAndStrokeWidthFromDot-CwRGrakx.js";import"./ActiveShapeUtils-7MZP2Iwm.js";import"./isPlainObject-cxYRvyg9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA5R7yHr.js";import"./Trapezoid-D4ZIub8Z.js";import"./Sector-Bxrfj806.js";import"./Symbols-DDT-2ywb.js";import"./symbol-DzG-jnmU.js";import"./step-BjXHarJ0.js";import"./Curve-CKkto3Op.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DDs3_BL6.js";import"./ChartSizeDimensions-BZhCWEAS.js";import"./OffsetShower-C-R2nTqO.js";import"./PlotAreaShower-d-TVNynX.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
