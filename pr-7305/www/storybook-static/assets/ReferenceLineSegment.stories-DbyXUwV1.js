import{e}from"./iframe-Cj3nIKoJ.js";import{R as i}from"./arrayEqualityCheck-v-UGwrho.js";import{C as p}from"./ComposedChart-Dhhe2-Q1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CAP815a3.js";import{X as s}from"./XAxis-BPLVTrG2.js";import{Y as c}from"./YAxis-CPODXTBx.js";import{L as d}from"./Line-BC8HKYq6.js";import{R as g}from"./ReferenceLine-CWIU__eK.js";import{R as f}from"./RechartsHookInspector-CgEoNM9X.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYnAxRaf.js";import"./immer-CXMyIV6A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nuhidKGe.js";import"./index-CtKFKGEW.js";import"./hooks-CnwONrTD.js";import"./axisSelectors-ih1f_cEF.js";import"./d3-scale--Y87SVPH.js";import"./zIndexSlice-8UDJ1IOD.js";import"./renderedTicksSlice-DXSuE5WB.js";import"./CartesianChart-BbEdEZ48.js";import"./chartDataContext-xuwFndC5.js";import"./CategoricalChart-DuiVKTDX.js";import"./CartesianAxis-C7qHOnR8.js";import"./Layer-CPT9BEuO.js";import"./Text-CC8Nd2bY.js";import"./DOMUtils-BfkiDds5.js";import"./Label-DlqlafMm.js";import"./ZIndexLayer-Vexd0w0T.js";import"./types-DeBW_iJF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-QSjTdxzv.js";import"./ActivePoints-C9K5tudt.js";import"./Dot-Dqd07VXK.js";import"./RegisterGraphicalItemId-BGPBjniu.js";import"./ErrorBarContext-CdybRlBm.js";import"./GraphicalItemClipPath-C9-KmWZG.js";import"./SetGraphicalItem-CBRb4w4Y.js";import"./useAnimationId-CBqAdaPb.js";import"./getRadiusAndStrokeWidthFromDot-ZJxzi4-O.js";import"./ActiveShapeUtils-DJRQdkq0.js";import"./isPlainObject-B3a7_XUu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D63r3ZS1.js";import"./Trapezoid-TdPyTlNd.js";import"./Sector-B0okeuxd.js";import"./Symbols-BXQtgV7c.js";import"./symbol-CzbDhrjP.js";import"./step-D6uncFX6.js";import"./Curve-DYzz3tk1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BsChK6M4.js";import"./ChartSizeDimensions-DFfD3d93.js";import"./OffsetShower-YtXoM0wF.js";import"./PlotAreaShower-BLMgNHzI.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
