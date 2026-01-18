import{e}from"./iframe-majBtK-E.js";import{R as i}from"./arrayEqualityCheck-DVgUr5sF.js";import{C as a}from"./ComposedChart-Rw7RmovT.js";import{C as p}from"./CartesianGrid-BX5yW7yI.js";import{X as n}from"./XAxis-BuPlQDHV.js";import{Y as s}from"./YAxis-RBaLqt0k.js";import{L as c}from"./Line-i7hbzGoO.js";import{R as d}from"./ReferenceLine-BjZf5Izl.js";import{R as g}from"./RechartsHookInspector-C8tTsK9b.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4pC6M3l.js";import"./PolarUtils-CJsRsyos.js";import"./RechartsWrapper-0u9Ddv25.js";import"./hooks-oixdIqV0.js";import"./axisSelectors-Ce1DsLqd.js";import"./zIndexSlice-7SDVSN9y.js";import"./CartesianChart-BL_zgiIZ.js";import"./chartDataContext-CZTJj6RV.js";import"./CategoricalChart-D7h1yX10.js";import"./CartesianAxis-BrVqccJA.js";import"./Layer-BLDMzEqE.js";import"./Text-phE5o1Gx.js";import"./DOMUtils-mrrzRZs0.js";import"./Label-e34JrSXW.js";import"./ZIndexLayer-Dv76Cipi.js";import"./types-C6X4a6Ih.js";import"./ReactUtils-CnNdH0Da.js";import"./ActivePoints-BicyjPPL.js";import"./Dot-CQ-BA1l2.js";import"./RegisterGraphicalItemId-CiSdioED.js";import"./ErrorBarContext-DUFA32t0.js";import"./GraphicalItemClipPath-CMlJ6COV.js";import"./SetGraphicalItem-Bs7RhIp3.js";import"./useAnimationId-BsAnEyOV.js";import"./getRadiusAndStrokeWidthFromDot-BhwwRVIx.js";import"./ActiveShapeUtils-CN13qk7C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-en3DGB-O.js";import"./Trapezoid-DktYSmhy.js";import"./Sector-7pSu32ck.js";import"./Symbols-Cp35_dcw.js";import"./Curve-9TopWPhs.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C8KZ_CA2.js";import"./ChartSizeDimensions-CwqFjkkT.js";import"./OffsetShower-CIon6stJ.js";import"./PlotAreaShower-BUoNZ3NG.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
