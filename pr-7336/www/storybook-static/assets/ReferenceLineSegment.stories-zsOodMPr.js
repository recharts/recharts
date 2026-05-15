import{e}from"./iframe-C_AsYugi.js";import{R as i}from"./arrayEqualityCheck-xvllERIt.js";import{C as p}from"./ComposedChart-cY0MWVeZ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BCBuz4XX.js";import{X as s}from"./XAxis-DH_rN-kM.js";import{Y as c}from"./YAxis-gzpn2USg.js";import{L as d}from"./Line-QUZhKIKJ.js";import{R as g}from"./ReferenceLine-DsDC8Bii.js";import{R as f}from"./RechartsHookInspector-BZMd9r0w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./CartesianAxis-Qsc6tL7N.js";import"./Layer-Dz5BSX-y.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./Label-Ck2nWAbG.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./types-DFzRwbJd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BIcQ9LuG.js";import"./ActivePoints-D_gOxfcF.js";import"./Dot-E0S9rOFh.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./ErrorBarContext-Di7xd7Lk.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./useAnimationId-GLik1JQl.js";import"./getRadiusAndStrokeWidthFromDot-CMmixfMt.js";import"./ActiveShapeUtils-BW3KdMee.js";import"./isPlainObject-yome26yk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSXX-_zw.js";import"./Trapezoid-BE4mHG6h.js";import"./Sector-RBT64hMb.js";import"./Symbols-BrylnLFr.js";import"./symbol-Cv3vZKNL.js";import"./step-BNGIjVY6.js";import"./Curve-DqcNZQQ9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DCPl85jO.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./OffsetShower-vaJOlCun.js";import"./PlotAreaShower-CMsAoFdB.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
