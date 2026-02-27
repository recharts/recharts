import{e}from"./iframe-CLFlzKU9.js";import{R as i}from"./arrayEqualityCheck-CV0K5b6V.js";import{C as p}from"./ComposedChart-B2SA0aOK.js";import{C as a}from"./CartesianGrid-B-mexKbJ.js";import{X as n}from"./XAxis-CTep6ajY.js";import{Y as s}from"./YAxis-1XrS4lWj.js";import{L as c}from"./Line-SwDxyZLv.js";import{R as d}from"./ReferenceLine-F9Txo7qc.js";import{R as g}from"./RechartsHookInspector-EUreR-RY.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./immer-Dut6E3j8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./index-Di3CFc3K.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./zIndexSlice-Dgcx4EWE.js";import"./renderedTicksSlice-qTsdruV1.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./CartesianAxis-U7WBccnc.js";import"./Layer-D55T8TbI.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./Label-B8vPAEDz.js";import"./ZIndexLayer-CygGErko.js";import"./types-C77fUvNb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-KqS4Be82.js";import"./ActivePoints-Bn6jZmU2.js";import"./Dot-CU0xm_xN.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./ErrorBarContext-CcCgl_nm.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./useAnimationId-B-nqwfiH.js";import"./getRadiusAndStrokeWidthFromDot-DYWP2VQN.js";import"./ActiveShapeUtils-CngmHGxL.js";import"./isPlainObject-C5TOG-jr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGUQeJvS.js";import"./Trapezoid-Nj1UelrR.js";import"./Sector-BGoD3vr5.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";import"./step-BHh7-B-Y.js";import"./Curve-04aIAzqq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CmeZFfhb.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
