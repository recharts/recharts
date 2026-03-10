import{e}from"./iframe-B0RBHKhv.js";import{R as i}from"./arrayEqualityCheck-CUrlIiZa.js";import{C as p}from"./ComposedChart-DP9VXl43.js";import{C as a}from"./CartesianGrid-CB91r2uB.js";import{X as n}from"./XAxis-CmZ1Qc-G.js";import{Y as s}from"./YAxis-CpFYoB6j.js";import{L as c}from"./Line-B_TellG8.js";import{R as d}from"./ReferenceLine-C2e8r9hB.js";import{R as g}from"./RechartsHookInspector-BW5IS2xz.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COjtEafr.js";import"./immer-4Zn5elZn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./index-CJLF0Mhh.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./d3-scale-DmOZwrln.js";import"./zIndexSlice-CVs48kDF.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./CartesianAxis-CwVzMBAZ.js";import"./Layer-DKG_J2lX.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./Label-zCnoVUoE.js";import"./ZIndexLayer-D0KeT139.js";import"./types-Cr4gQIo8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-4VVLboep.js";import"./ActivePoints-B132Duv-.js";import"./Dot-D0OoiCd5.js";import"./RegisterGraphicalItemId-B4LFnea8.js";import"./ErrorBarContext-Lg7BjtUv.js";import"./GraphicalItemClipPath-CUPJIuLc.js";import"./SetGraphicalItem-BFputAxA.js";import"./useAnimationId-BhQIBdFI.js";import"./getRadiusAndStrokeWidthFromDot-C52wdnda.js";import"./ActiveShapeUtils-BxyuTB5c.js";import"./isPlainObject-CN9etUkS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwMZJDWv.js";import"./Trapezoid-CNfMGcYM.js";import"./Sector-COzuaaOM.js";import"./Symbols-DeqF7aJf.js";import"./symbol-Br_8ecW-.js";import"./step-tovYZaNJ.js";import"./Curve-OyQHTjUf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CAjd4rxZ.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
